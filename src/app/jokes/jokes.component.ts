import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    // 监听路由事件触发后全局都会监听到
    // this.router.events.subscribe(param => {
    //   console.log(param);
    // });
  }

}
