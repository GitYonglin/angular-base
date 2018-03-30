import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  /**
   * 验证是否有权限加载一个异步模块
   */
  canload(): boolean {
    return true;
  }

  /**
   * 验证路由是否可以激活
   */
  canActivate(): boolean {
    return true;
  }
}
