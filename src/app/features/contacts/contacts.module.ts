import { NgModule} from '@angular/core';

import { MaterialFormsModule } from '@app/shared/forms/material-forms.module';
import { SharedModule } from '@app/shared/shared.module';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactService } from './shared/contact.service';
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
    imports: [
        SharedModule,
        MaterialFormsModule,
        ContactsRoutingModule 
    ],
    declarations: [
        ContactDetailComponent,
        ContactListComponent,
        NewContactComponent
    ],
    providers: [
        ContactService
    ],
    entryComponents: [
        ContactDetailComponent
    ]
})

export class ContactsModule { }
