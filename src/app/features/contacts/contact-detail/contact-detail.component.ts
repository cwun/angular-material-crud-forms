import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup } from "@angular/forms";

import { Contact } from '../shared/contact';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
    title = 'Edit Contact';
    form: FormGroup;
    
    constructor(
        private dialogRef: MatDialogRef<ContactDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public contact: Contact) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = new FormGroup({
            id: new FormControl(this.contact.id),
            firstName: new FormControl(this.contact.firstName, Validators.required),
            lastName: new FormControl(this.contact.lastName, Validators.required),
            email: new FormControl(this.contact.email, [Validators.required, Validators.email]),
            work: new FormControl(this.contact.work, Validators.required),
            street: new FormControl(this.contact.street, Validators.required),
            city: new FormControl(this.contact.city, Validators.required),
            state: new FormControl(this.contact.state, Validators.required),
            zip: new FormControl(this.contact.zip, Validators.required)
        });
    }

    save() {
        if (this.form.invalid) {
            return;
        }
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close(null);
    }
}