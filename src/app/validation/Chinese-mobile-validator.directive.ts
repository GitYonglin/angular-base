import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ChineseMobileValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ChineseMobileValidator,
      multi: true
    }
  ]
})
export class ChineseMobileValidator implements Validator {
  @Input() ChineseMobileValidator: string;

  constructor() { }

  validate(control: AbstractControl): { [error: string]: any } {
    // tslint:disable-next-line:prefer-const
    let val = control.value;
    // tslint:disable-next-line:prefer-const
    let flag: boolean = /^1(3|4|5|7|8)\d{9}$/.test(val);
    console.log(flag);
    if (flag) {
      control.setErrors(null);
      return null;
    } else {
      control.setErrors({ ChineseMobileValidator: false });
      return { ChineseMobileValidator: false };
    }
  }
}
