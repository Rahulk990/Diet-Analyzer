import { Component, OnInit } from '@angular/core';
import { ItemModelService } from '../shared/services/item-model.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchFilter: string = '';

  constructor(private itemService: ItemModelService) {}

  ngOnInit(): void {}

  onSubmit(event: string): void {
    this.itemService.searchEmitter.next(event);
  }
}
