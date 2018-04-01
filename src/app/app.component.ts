import { Component } from '@angular/core';
import { RegisterModel } from './model/register-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public regModel = new RegisterModel();
}
