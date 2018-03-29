import { NgModule } from '@angular/core';

import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
  ],
  // 导出模块
  exports: [
    UserInfoComponent
  ],
  providers: [],
})
export class SharedModule { }
