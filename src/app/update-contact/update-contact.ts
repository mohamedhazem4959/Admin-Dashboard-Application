import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IContact, IUserContact } from '../icontact';
import { ContactService } from '../contact-s';

@Component({
  selector: 'app-update-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-contact.html',
  styleUrl: './update-contact.css'
})
export class UpdateContact implements OnInit {
  userId: string = '';
  contacts: IContact[] = []; // ✅ Always initialize

  contactForm: FormGroup = new FormGroup({
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    linkedin: new FormControl<string>(''),
    github: new FormControl<string>('')
  });

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContactInfo().subscribe({
      next: (data: any) => {
        // ✅ Check if API has contact array
        if (Array.isArray(data) && data.length > 0 && data[0].contact) {
         this.userId = data[0]._id;
        this.contacts = data[0].contact;

          this.contactForm.patchValue({
            email: this.findUrl('Email'),
            phone: this.findUrl('telephone'),
            linkedin: this.findUrl('linkedIn'),
            github: this.findUrl('github')
          });
        } else {
          console.warn('No contact info found in API response:', data);
        }
      },
      error: err => console.error('Failed to load contact info', err)
    });
  }

  findUrl(platform: string): string {
    return this.contacts.find(c => c.platform.toLowerCase() === platform.toLowerCase())?.url || '';
  }

  saveContactInfo() {
    if (!this.contacts.length) { // ✅ Prevent running if contacts not loaded
      alert('Contact info not loaded yet.');
      return;
    }

    const updates = [
      { platform: 'Email', url: this.contactForm.value.email },
      { platform: 'telephone', url: this.contactForm.value.phone },
      { platform: 'linkedIn', url: this.contactForm.value.linkedin },
      { platform: 'github', url: this.contactForm.value.github }
    ];

    updates.forEach(update => {
      const contactItem = this.contacts.find(c => c.platform.toLowerCase() === update.platform.toLowerCase());
      if (contactItem?._id) {
        this.contactService.updateContactInfo(this.userId, contactItem._id, { url: update.url })
          .subscribe({
            next: () => console.log(`${update.platform} updated`),
            error: err => console.error(`Failed to update ${update.platform}`, err)
          });
      }
    });

    alert('Contact info updated successfully!');
  }
}
