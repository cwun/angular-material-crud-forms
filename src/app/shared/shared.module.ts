import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogsModule } from './dialogs/dialogs.module';
import { MaterialFormsModule } from './forms/material-forms.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
    ],
    declarations: [ ],
    exports:[
        DialogsModule,
        MaterialFormsModule
    ]
})

export class SharedModule { }

