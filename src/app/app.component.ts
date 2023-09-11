import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <img class="logo" src="https://www.decodedfrontend.io/wp-content/uploads/2021/01/logo-01.png">
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div class="form-field">
        <label for="displayName">Display Name</label>
        <input formControlName="displayName" type="text" id="displayName">
      </div>
      <fieldset formGroupName="address">
        <legend>Address</legend>
        <div class="form-field">
          <label for="zipCode">Zip Code</label>
          <input formControlName="zipCode" type="text" id="zipCode">
        </div>
        <div class="form-field">
          <label for="address">Street</label>
          <input formControlName="street" type="text" id="address">
        </div>
      </fieldset>
      <button>Submit</button>
    </form>
  `
})
export class AppComponent {
  form = new FormGroup({
    displayName: new FormControl(''),
    address: new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl('')
    })
  });
  submit() {
    // do whatever you need with it...
    console.log(this.form.value);
  }

}
