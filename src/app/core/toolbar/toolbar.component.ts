import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
    // Receive menu object and title from the parent 'MainLayoutComponent'
    @Input() menu: Array<Object>;
    @Input() title: string;
    // Raise the event to the parent 'MainLayoutComponent'
    @Output() toggleSidebar = new EventEmitter();
    
    sidebarOpened = false;

    ngOnInit() {
    }

    /**
     * Toggle the sidenav menu.
     */
    toggleSidenav() {
        this.sidebarOpened = !this.sidebarOpened;
        this.toggleSidebar.emit(this.sidebarOpened);
    }
}
