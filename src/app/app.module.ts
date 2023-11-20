import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    CountryInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
