import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { AppServiceService } from './app-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // try to remove interceptors
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    ViewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
