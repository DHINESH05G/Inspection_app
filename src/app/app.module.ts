import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionMainScreenComponent } from './inspection-main-screen/inspection-main-screen.component';
import { SubQuestionScreenComponent } from './sub-question-screen/sub-question-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionMainScreenComponent,
    SubQuestionScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
