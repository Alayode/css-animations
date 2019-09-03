import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimingFunctionComponent } from './timing-function/timing-function.component';

@NgModule({
  declarations: [
    AppComponent,
    TimingFunctionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
