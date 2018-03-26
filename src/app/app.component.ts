import { Component, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { DynChildComponent } from './dyn-child/dyn-child.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  // 获取模板中的 “dyncomp” 元素
  @ViewChild('dyncomp', {read: ViewContainerRef})
    dyncomp: ViewContainerRef;

  comp1: ComponentRef<DynChildComponent>;
  comp2: ComponentRef<DynChildComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngAfterContentInit() {
    console.log('动态创建组件');
    // 创建动态组件
    const childComp = this.resolver.resolveComponentFactory(DynChildComponent);
    // 将动态组件插入元素中
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = '第一个创建的动态组件';
    // 第二个参数是组件在容器中的位置
    this.comp2 = this.dyncomp.createComponent(childComp, 0);
    // 获取动态组件属性
    this.comp2.instance.title = '第二个创建的动态组件';
    // 获取动态组件方法
    this.comp1.instance.btnClick.subscribe((param) => {
      console.log(this.comp1.instance.title + param);
    });
  }
  // 删除一个组件
  destoryChild(): void {
    console.log('删除组件');
    this.comp2.destroy();
  }
}
