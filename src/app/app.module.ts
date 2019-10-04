import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimingFunctionComponent } from './timing-function/timing-function.component';
import { CircleAnimationsComponent } from './circle-animations/circle-animations.component';
import { ChangingColorComponent } from './changing-color/changing-color.component';

@NgModule({
  declarations: [
    AppComponent,
    TimingFunctionComponent,
    CircleAnimationsComponent,
    ChangingColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
