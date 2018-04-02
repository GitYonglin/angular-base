import { Component, OnInit, Input } from '@angular/core';
import { RegisterModel } from './model/register-model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FieldBase, Image, Textbox, TextArea } from './dynamic-form/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() fields: FieldBase<any>[] = [
    new Image({
      src: 'https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png'
    }),
    new Textbox({
      label: '头像:',
      placeholder: '上传头像',
      type: 'file'
    }),
    new Textbox({
      label: '用户名:',
      placeholder: '用户名'
    }),
    new Textbox({
      label: '常用邮箱:',
      placeholder: '常用邮箱'
    }),
    new Textbox({
      label: '密码:',
      type: 'password',
      placeholder: '密码，至少8位'
    }),
    new Textbox({
      label: '重复密码:',
      type: 'password',
      placeholder: '重复密码'
    }),
    new TextArea({
      label: '个人简介:',
      placeholder: '个人简介，最多140字，不能放链接。',
      rows: 3,
    })
  ];

  public form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);
  }

  toFormGroup(fields: FieldBase<any>[]) {
    // tslint:disable-next-line:prefer-const
    let group: any = {};

    fields.forEach(field => {
      group[field.key] = new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
