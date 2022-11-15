import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contact: FormGroup;

  constructor() { 
    this.contact = this.contactForm();

  }

  ngOnInit(): void {
  }

  // Create a new contact
  contactForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  // Submit form
  submitForm(form: FormGroup) {

    // Form valdation
    if (form.valid) {
      console.log(form.value);
    }
  }

}
