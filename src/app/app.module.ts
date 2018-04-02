import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChineseMobileValidator } from './validation/Chinese-mobile-validator.directive';
import { FormControlComponent } from './dynamic-form/form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ChineseMobileValidator,
    FormControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
