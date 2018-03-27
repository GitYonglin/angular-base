import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  title = '默认标题';

  @Output()
    sayHello: EventEmitter<any> = new  EventEmitter<any> ();
  constructor() { }

  ngOnInit() {
  }

  doSayHello(): void {
    console.log('child2 say Hello');
    this.sayHello.emit();
  }
}
