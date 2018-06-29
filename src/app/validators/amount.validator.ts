import { AbstractControl } from '@angular/forms';

export class AmountValidator {

  static validateString(c: AbstractControl) {
    const AMOUNT_REGEXP = /^([$][0-9]*.[0-9]*)$|^([0-9]*.[0-9]*%)$/;

    return AMOUNT_REGEXP.test(c.value) ? null : {
      validateAmount: {
        valid: false,
      },
    };
  }

  static validate(c: AbstractControl) {
    const AMOUNT_REGEXP = /\d+(\.\d{1,2})?/;

    return AMOUNT_REGEXP.test(c.value) || c.value == "" || c.value == null ? null : {
      validateAmount: {
        valid: false,
      },
    };
    
  }
}
