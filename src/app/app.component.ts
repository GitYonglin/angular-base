import { Component, ViewChild } from '@angular/core';

import { Communication1Component } from './communication1/communication1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('child')
    private child: Communication1Component;

  public count = 0;
  parentStatus = 0;

  childFunc(): void {
    this.child.childFunc();
  }

  follow(): void {
    alert('通过子组件触发的方法');
  }

  toggle() {
    this.parentStatus ++;
  }
}
