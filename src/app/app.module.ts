import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es'; //módulo para traducciones
import { registerLocaleData } from '@angular/common'; //para aplicar las traducciones

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

registerLocaleData(localeEs); //debe cargar antes que todo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-Es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
