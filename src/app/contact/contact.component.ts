import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    emailjs.init('-C2jHkwQu1Z-JOFze');
  }

  get name() {
    return this.contactForm.get('name')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get message() {
    return this.contactForm.get('message')!;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.submitted = true;
      emailjs.send(
      'service_f02zgrm',
      'template_32p6sgd',
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      }
    ).then(
      () => alert('Email sent successfully ✅'),
      (error) => alert('Failed ❌ ' + error.text)
    );
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
