import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEs from '@angular/common/locales/es'; //módulo para traducciones
import { registerLocaleData } from '@angular/common'; //para aplicar las traducciones
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

registerLocaleData(localeEs); //debe cargar antes que todo

@NgModule({
  declarations: [
    AppComponent,
    ReversoPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-Es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
