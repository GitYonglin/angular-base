import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './model/register-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo = new RegisterModel();
  // 数据key
  public formErrors = {
    userName: '',
    password: '',
  };
  // 验证提示数据
  validationMessages = {
    userName: {
      required: '用户名必须输入。',
      minlength: '用户名4到32个字符。'
    },
    password: {
      required: '用户名必须输入。',
      minlength: '用户名4到32个字符。'
    },
  };

  constructor(public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  // 数据验证提示
  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      console.log(field);
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  // 数据绑定与验证规则设置
  buildForm(): void {
    this.userForm = this.fb.group({
      userName: [
        this.userInfo.userName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      password: [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
}
