import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const contactsRoutes: Routes = [
    // 1st Route
    {  path: '', component: ContactListComponent },
    // 2nd Route
    {  path: 'add-contact', component: NewContactComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(contactsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactsRoutingModule { }