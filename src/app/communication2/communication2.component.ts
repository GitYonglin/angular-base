import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-communication2',
  templateUrl: './communication2.component.html',
  styleUrls: ['./communication2.component.scss']
})
export class Communication2Component implements OnInit {
  public events: Array<any> = [];
  constructor( public testservice: TestService) { }

  ngOnInit() {
    this.testservice.eventBus.subscribe((value) => {
      this.events.push(`${value}--${new Date()}`);
    });
  }
}
