import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentGrammarComponent } from './component-grammar/component-grammar.component';
import { PricePipe } from './pipe/price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ComponentGrammarComponent,
    PricePipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
