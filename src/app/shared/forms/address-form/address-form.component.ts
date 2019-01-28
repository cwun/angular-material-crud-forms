import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component ({
    selector:     'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddressFormComponent {
    // Receive FormGroup instance from the parent 'NewContactComponent'
    @Input() form: FormGroup;
    
    constructor() { }
}
