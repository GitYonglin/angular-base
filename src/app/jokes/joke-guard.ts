import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { JokesComponent } from './jokes.component';

@Injectable()
export class JokeGuard implements CanDeactivate<any> {
  canDeactivate(component: JokesComponent) {
    console.log(component);
    // 模板中的跳转标志位
    if (!component.saved) {
      return window.confirm('你确定不保存吗？');
    }
    return true;
  }
}
