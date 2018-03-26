import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dyn-child',
  templateUrl: './dyn-child.component.html',
  styleUrls: ['./dyn-child.component.scss']
})
export class DynChildComponent implements OnInit {
  public title = '默认标题';

  @Output()
    public btnClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  public triggerEvent(): void {
    this.btnClick.emit('动态组件事件');
  }
}
