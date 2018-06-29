import { AbstractControl } from '@angular/forms';

export class NumberValidator {

  static validate(c: AbstractControl) {
    const CODE_REGEX = /^[0-9]+$/;
    return CODE_REGEX.test(c.value) || c.value == null || c.value == "" ? null : {
      validate: {
        valid: false,
      },
    };
  }
}
