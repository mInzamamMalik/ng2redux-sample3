import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from 'ng2-redux';

import { AppComponent } from './app.component';
import { StoreModule } from './store'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule,
        StoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
