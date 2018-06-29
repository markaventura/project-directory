import { AbstractControl } from '@angular/forms';

export class PhoneNumberValidator {

  static validate(c: AbstractControl) {
    const PHONE_NUMBER_REGEX = /^$|^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    return PHONE_NUMBER_REGEX.test(c.value) || c.value == null ? null : {
      validatePhoneNumber: {
        valid: false,
      },
    };
  }
}
