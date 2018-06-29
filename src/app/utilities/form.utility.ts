import { FormGroup } from "@angular/forms";

export class FormUtility {

  public static mapErrors(form: FormGroup, errors: any) {
    const controls = form['controls'];
    const errorBody = JSON.parse(errors['_body']).errors[0];

    for (const key of Object.keys(errorBody)) {
      form.get(key).setErrors({ server_error: errorBody[key] });
    }
  }

}