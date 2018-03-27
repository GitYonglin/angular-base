import { Component, OnInit, ContentChild, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, AfterContentInit {
  // 获取唯一一个内容投影组件
  // @ContentChild(Child2Component)
  //   child2: Child2Component;
  // 获取多个内容投影组件
  @ContentChildren(Child2Component)
    childs: QueryList<Child2Component>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.child2.title = '新的标题';
    // this.child2.sayHello.subscribe((parem) => {
    //   console.log('ts中监听的child2的shyHello方法');
    // });
    this.childs.forEach((child, index) => {
      child.title = `${index}组件`;
    });
  }

  // childSayHello(): void {
  //   this.child2.doSayHello();
  // }
}
