import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { CalenderItemComponent } from './calender/calender-item/calender-item.component';
import { HeaderComponent } from './header/header.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemDetailsShowComponent } from './item-details/item-details-show/item-details-show.component';
import { ItemDetailsEditComponent } from './item-details/item-details-edit/item-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    CalenderItemComponent,
    HeaderComponent,
    ItemDetailsComponent,
    ItemDetailsShowComponent,
    ItemDetailsEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
