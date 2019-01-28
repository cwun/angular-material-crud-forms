import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material/material.module';

import { InMemoryDataService } from './database/in-memory-data.service';
import { Logger } from './logger/logger.service';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastService } from './toast/toast.service';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        RouterModule
    ],
    declarations: [
        MainLayoutComponent,
        NavbarComponent,
        ToolbarComponent 
    ],
    exports: [
        MainLayoutComponent
    ],
    providers: [
        Logger,
        ToastService
    ]
})

export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}