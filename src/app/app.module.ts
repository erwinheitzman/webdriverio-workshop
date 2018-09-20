import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TipsAndTricksComponent } from './components/tips-and-tricks/tips-and-tricks.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardComponent } from './components/card/card.component';
import { MissingPageComponent } from './components/missing-page/missing-page.component';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { HomeComponent } from './components/home/home.component';


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
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    TipsAndTricksComponent,
    HeaderComponent,
    NavigationComponent,
    CardComponent,
    CardCollectionComponent,
    MissingPageComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
