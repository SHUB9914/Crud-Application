import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {CommonModule} from "@angular/common";
import {routes} from './app.routes'
import {RouterModule} from "@angular/router";
import {CreateTaskComponent} from "./createTask/createTask";
import {ShowTaskComponent} from "./showTask/showTask";
import {DetailService} from "./app.detailsService";

@NgModule({
  imports:      [ BrowserModule, FormsModule ,CommonModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent ,CreateTaskComponent,ShowTaskComponent],
   bootstrap:    [AppComponent ],
  providers: [DetailService]
})
export class AppModule { }
