import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { HeaderComponent } from './header/header.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ContainsPipe } from './shared/pipes/contains.pipe';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

const routePaths = [
  {
    path: '',
    component: LandingPageComponent,
    
  },
  {
    path: 'dashboard',
    component: CalenderComponent,
    canActivate: [AuthService]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    HeaderComponent,
    ItemDetailsComponent,
    TruncatePipe,
    ContainsPipe,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule.forRoot(routePaths),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
