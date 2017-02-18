import {Component, OnInit} from "@angular/core";

import{ Details } from '../app.details'
import {DetailService} from "../app.detailsService";

@Component({
  selector: 'home',
  templateUrl:'./app/createTask/createTask.html'
})
export  class  CreateTaskComponent implements OnInit {

  todo:Details[];
  todoObj : any;
  dates : Date =  null

  fill : string = ''

  constructor (private  service :  DetailService){

   this.todo=this.service.todos;

  }
  ngOnInit(){
    this.todo=this.service.todos;
  }



  submit(dt: String, title: String, disc: String, priority: String) {


    this.todoObj = {

      date: dt,
    title: title,
    descripition: disc,
    priority: priority,

    }
    this.service.todos.push(this.todoObj);
    this.dates = null
    this.fill = ' '




    //alert(JSON.stringify(this.service.todos));


  }
}
