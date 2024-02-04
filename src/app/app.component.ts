import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressGroupComponent } from './address-group/address-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, AddressGroupComponent],
  template: `
    <img class="logo" src="https://www.decodedfrontend.io/wp-content/uploads/2021/01/logo-01.png">
    
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div class="form-field">
        <label for="displayName">Display Name</label>
        <input formControlName="displayName" type="text" id="displayName">
      </div>
      <app-address-group label="Delivery Address" controlKey="deliveryAddress"></app-address-group>
      <app-address-group label="Billing Address" controlKey="billingAddress"></app-address-group>
      <button>Submit</button>
    </form>
  `
})
export class AppComponent {
  form = new FormGroup({
    displayName: new FormControl('')
  });
  submit() {
    // do whatever you need with it...
    console.log(this.form.value);
    this.form.reset();
  }

}
