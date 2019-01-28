import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component ({
    selector:     'app-work-form',
    templateUrl: './work-form.component.html',
    styleUrls: ['./work-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WorkFormComponent {
    // Receive FormGroup instance from the parent 'NewContactComponent'
    @Input() form: FormGroup;
    
    constructor() { }
}