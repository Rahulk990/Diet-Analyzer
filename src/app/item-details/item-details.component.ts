import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item, ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  @Input() itemIndex: number | any;
  @Output() close: EventEmitter<any> = new EventEmitter();
  itemDetails: Item | any;
  isEditable: boolean = false;
  originalItem: Item | any;
  showItemIngredients: number = -1;
  newFoodItem: string = '';
  newIngredient: string = '';
  isModified: boolean = false;

  constructor(
    private itemService: ItemService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.itemDetails = JSON.parse(
      JSON.stringify(this.itemService.itemsArray[this.itemIndex])
    );
  }

  onEdit(): void {
    this.isEditable = true;
    this.originalItem = JSON.parse(JSON.stringify(this.itemDetails));
  }

  onClose(): void {
    this.close.emit();
  }

  onCancel(): void {
    this.isEditable = false;
    this.itemDetails = JSON.parse(JSON.stringify(this.originalItem));
    this.originalItem = null;
  }

  onSave(): void {
    this.isEditable = false;
    if (!Object.is(this.originalItem, this.itemDetails)) {
      this.isModified = true;
      this.itemService.updateItem(this.itemDetails, this.itemIndex);
    }
    this.originalItem = null;
  }

  toggleIngredients(index: number): void {
    if (this.showItemIngredients === -1 || this.showItemIngredients !== index) {
      this.showItemIngredients = index;
    } else {
      this.showItemIngredients = -1;
    }
  }

  addFoodItem(): void {
    if (!this.itemDetails.foodItemsArray) {
      this.itemDetails.foodItemsArray = [];
    }

    if (this.newFoodItem.length > 0) {
      this.itemDetails.foodItemsArray.push({
        name: this.newFoodItem,
      });
      this.newFoodItem = '';
      this.snackBar.open('New Item Added', 'Ok', { duration: 1000 });
    }
  }

  addIngredient(index: number): void {
    if (!this.itemDetails.foodItemsArray[index].ingredients) {
      this.itemDetails.foodItemsArray[index].ingredients = [];
    }

    if (this.newIngredient.length > 0) {
      this.itemDetails.foodItemsArray[index].ingredients.push(
        this.newIngredient
      );
      this.newIngredient = '';
      this.snackBar.open('New Ingredient Added', 'Ok', { duration: 1000 });
    }
  }

  deleteFoodItem(index: number): void {
    this.itemDetails.foodItemsArray.splice(index, 1);
    this.snackBar.open('Food Item Deleted', 'Ok', { duration: 1000 });
  }

  deleteIngredient(itemIndex: number, ingredientIndex: number): void {
    this.itemDetails.foodItemsArray[itemIndex].ingredients.splice(
      ingredientIndex,
      1
    );
    this.snackBar.open('Ingredient Deleted', 'Ok', { duration: 1000 });
  }

  toggleReaction(): void {
    this.itemDetails.isReaction = !this.itemDetails.isReaction;
  }
}
