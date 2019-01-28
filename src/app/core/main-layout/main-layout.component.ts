import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent {
    // Receive menu object and title from the parent 'AppComponent'
    @Input() title: string;
    @Input() menu: Array<Object>;

    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor() { }

    toggleSidenav() {
        // trigger the child component's 'toggle' method 
        this.sidenav.toggle();
    }
}