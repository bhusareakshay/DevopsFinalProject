import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponentComponent } from './add-component/add-component.component';
import { AppComponent } from './app.component';
import { ViewComponentComponent } from './view-component/view-component.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
