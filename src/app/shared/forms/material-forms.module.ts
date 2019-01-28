import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material/material.module';

import { AddressFormComponent } from './address-form/address-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { WorkFormComponent } from './work-form/work-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        AddressFormComponent,
        PersonalFormComponent,
        ResultFormComponent,
        WorkFormComponent
    ],
    exports:[ 
        MaterialModule,
        AddressFormComponent,
        PersonalFormComponent,
        ResultFormComponent,
        WorkFormComponent
    ],
    entryComponents: [
        WorkFormComponent
    ]
})

export class MaterialFormsModule { }

