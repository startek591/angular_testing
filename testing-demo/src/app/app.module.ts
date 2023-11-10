import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoteComponent } from './03-setup-and-teardown/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
