import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-communication1',
  templateUrl: './communication1.component.html',
  styleUrls: ['./communication1.component.scss']
})
export class Communication1Component implements OnInit {
  private _title = '默认标题';

  @Input()
    set title(title: string) {
      this._title = `【${title}】`;
    }
    get title(): string {
      return this._title;
    }

  @Input()
    count;
  @Output()
  // 这里的countChange 这个事件必须是 （变量名 + Change结尾）
    countChange = new EventEmitter();

  @Output()
    public follow = new EventEmitter<any>();

  constructor( public testService: TestService ) { }

  ngOnInit() {
  }

  public emianEvent(): void {
    this.follow.emit('子组件的方法');
  }

  public childFunc(): void {
    alert('激活子组件方法');
  }

  onChange(event): void {
    this.countChange.emit(this.count);
  }

  testEventbus() {
    this.testService.eventBus.next('组件一触发事件');
  }
}
