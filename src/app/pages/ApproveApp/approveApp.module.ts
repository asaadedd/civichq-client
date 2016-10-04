import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


import { ApproveAppComponent } from './components/approve-app/approve-app.component';

import { ApproveAppRouting } from './config/approve-app.routing';

import {LoggedInGuard} from './../../services/login-guard';


@NgModule({
    imports: [
        ApproveAppRouting,
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        ApproveAppComponent,
    ],
    providers: [LoggedInGuard],
    exports: [
        ApproveAppComponent
    ]
})

export class ApproveAppModule { }