import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatDividerModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TipsAndTricksComponent } from './components/tips-and-tricks/tips-and-tricks.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { MissingPageComponent } from './components/missing-page/missing-page.component';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    TipsAndTricksComponent,
    HeaderComponent,
    ToolbarComponent,
    CardComponent,
    CardCollectionComponent,
    MissingPageComponent,
    HomeComponent,
    SearchBarComponent,
    DialogComponent
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [DialogComponent]
})
export class AppModule { }
