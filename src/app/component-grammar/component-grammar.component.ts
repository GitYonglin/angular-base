import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-grammar',
  templateUrl: './component-grammar.component.html',
  styleUrls: ['./component-grammar.component.scss']
})
export class ComponentGrammarComponent implements OnInit {
  public title = '模板语法';
  public imgUrl = 'https://www.angular.cn/assets/images/logos/angular/logo-nav@2x.png';
  public name = '默认值';
  public currentTime = new Date();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    alert('你点击了按钮');
  }
}
