import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'Angular Material CRUD Forms';

    menu: Array<Object> = [
        { name: 'Tutorials', url: 'https://www.cc28tech.com/angular-material-crud-forms-part-1' },
        { name: 'Github', url: 'https://github.com/cwun/angular-material-crud-forms' },
        { name: 'About me', url: 'https://www.cc28tech.com/cathy-wun' }
    ];
}
