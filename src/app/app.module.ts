import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TestService } from './service/test.service';

import { AppComponent } from './app.component';
import { Communication1Component } from './communication1/communication1.component';
import { Communication2Component } from './communication2/communication2.component';


@NgModule({
  declarations: [
    AppComponent,
    Communication1Component,
    Communication2Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
