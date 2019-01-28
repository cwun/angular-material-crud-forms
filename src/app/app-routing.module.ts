import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    // 1st Route
    { path: '', loadChildren: './features/contacts/contacts.module#ContactsModule' }
    // 2nd Route
    ,{ path: '**', loadChildren: "./features/page-not-found/page-not-found.module#PageNotFoundModule" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [ RouterModule ],
    providers: []
})

export class AppRoutingModule { }