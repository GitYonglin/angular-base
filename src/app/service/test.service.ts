import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; // 必须添加这个依赖
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TestService {
  public eventBus: Subject<string> = new Subject<string>();

  constructor() { }

}
