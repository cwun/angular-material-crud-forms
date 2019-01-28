import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
