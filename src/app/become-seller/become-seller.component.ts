import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.css'],

})
export class BecomeSellerComponent {

  sellerData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  };

  constructor(private router: Router) {}

  submitSellerForm(sellerForm: NgForm) {
    if(sellerForm.valid){

    this.router.navigate(['/dashboard']);
  }
}}
