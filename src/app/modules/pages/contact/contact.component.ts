import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contact: FormGroup;

  constructor(private meta: Meta, private title: Title) { 
    // Form
    this.contact = this.contactForm();

    // Tags
    this.meta.addTags([
      { name: 'description', content: 'Ural Limited Company is a leading company that represends many companies in Italy, Turkiye, Greece and Albania' },
      { name: 'keywords', content: 'urallimited, contact' },
      { name: 'robots', content: 'contact, follow' }
    ]);

    // title
    this.title.setTitle('Contact');
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
