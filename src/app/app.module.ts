import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { TheProfileComponent } from './the-profile/the-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TheProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
