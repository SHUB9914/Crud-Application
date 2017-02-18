import {Component, OnInit} from "@angular/core";
import{ Details } from '../app.details' ;
import {DetailService} from "../app.detailsService";
import {CreateTaskComponent} from "../createTask/createTask";
@Component({
  selector: 'home',
  template:`

<div class ="container" *ngIf="flag1">
 <table class="table table-striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let information of todo ; let i = index">
        <td>{{information.date}}</td>
        <td>{{information.title}}</td>
         <td>{{information.descripition}}</td>
        <td>{{information.priority}}</td> 
         <td><span  (click)="delete(i)" class="delete-icon"><button type="button" class="btn btn-primary">Done</button></span></td>
          <td><span  (click)="edit(i)" class="delete-icon"><button type="button" class="btn btn-primary">Edit</button></span></td>
        
      </tr>
      </tbody>
      </table>
      </div>
      
      
   <div class="container" *ngIf="flag">   
   <form>


  <div class="form-group">
    <label for="date">Date:</label>
    <input type="date" class="form-control" id="date" #date placeholder="Enter date" value="{{indexedData.date}}">
  </div>
  <div class="form-group">
    <label for="title">title:</label>
    <input type="text" class="form-control" id="title" #title placeholder="Enter title" value="{{indexedData.title}}">
  </div>
  <div class="form-group">
    <label for="des">Description:</label>
    <input type="text" class="form-control" id="des" #desc placeholder="Enter title" value="{{indexedData.descripition}}">
  </div>
  <div class="form-group">
    <label for="pri">Priority:</label>
    <input type="text" class="form-control" id="pri" #priority placeholder="Enter title" value="{{indexedData.priority}}">
  </div>

  <button   (click)="updateData(date.value,title.value,desc.value,priority.value)" type="submit" class="btn btn-default">Submit</button>
  <button   (click)="back()"  class="btn btn-default">Back</button>


  </form>
  </div> `
  ,

})
export  class  ShowTaskComponent implements OnInit {

  todo: Details[];
   flag= false
    flag1 = true
    index : number
   indexedData : Details


  constructor(private  service: DetailService) {

    this.todo = this.service.todos;


  }



  ngOnInit() {
    this.todo = this.service.todos;

  }

  delete(index:number){

    this.service.todos.splice(index,1)


  }
  edit(index:number){
     this.flag = true
    this.flag1 = false
    this.index = index

    this.indexedData = this.service.todos[index]

  }

  updateData(dt: Date, title: string, disc: string, priority: string) {
    this.service.todos[this.index].date = dt
    this.service.todos[this.index].title = title
    this.service.todos[this.index].descripition = disc
    this.service.todos[this.index].priority = priority
    this.flag = false
    this.flag1 = true

  }
  back(){

    this.flag= false
    this.flag1 = true
  }

}



