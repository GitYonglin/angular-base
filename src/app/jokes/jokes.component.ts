import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  // 跳转标志位
  public saved = true;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  input(value) {
    console.log(value.data);
    this.saved = false;
  }

  sver() {
    this.saved = true;
  }
}
