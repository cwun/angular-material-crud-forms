import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';

import { ConfirmedDialogComponent } from './confirmed-dialog/confirmed-dialog.component';

@NgModule({
    imports: [
        MatDialogModule
    ],
    declarations: [
        ConfirmedDialogComponent
    ],
    exports:[ 
        ConfirmedDialogComponent
    ],
    entryComponents: [
        ConfirmedDialogComponent
    ]
})

export class DialogsModule { }
