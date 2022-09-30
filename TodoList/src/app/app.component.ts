import { TaskServiceService } from './task-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import moment from 'moment';

import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Todo List';
  mocks: any;

  private _tasker = 'New Task';
  private _now = new Date();

  public get now() {
    return moment(this._now).format('DD-MM-YYYY h:mma');
  }
  public set now(value) {
    this._now = new Date(value);
  }
  public get tasker() {
    return this._tasker;
  }
  public set tasker(value) {
    this._tasker = value;
  }

  constructor(public taskService: TaskServiceService){}

  ngOnInit(): void {
    this.taskService.dataRequest();
  }

  add(){
    let name = this.tasker;
    let id:number = this.taskService.tasks.length +1;
    let time = this.now;
    let completed = false;
    if (!name){
      return;
    }
    this.taskService.addData(id, name, time, completed);
  }

  get(){
    this.taskService.getData();
  }
  

  update(id:number){
    let taskname = <HTMLInputElement>document.getElementById("update-name-"+id);
    let x = taskname.value;

    let tasktime = <HTMLInputElement>document.getElementById("update-time-"+id);
    let y = tasktime.value;

    this.taskService.updateData(id,x,y);
  }

  complete(id:number){
    let taskcomplete = <HTMLInputElement>document.getElementById("idcheck-"+id);
    let p = false;

    let b = <HTMLInputElement>document.getElementById("idlabel-"+id)??alert("ERRO!!, Contactar o Zé mais perto!!");
  

    console.log(b);
    if (taskcomplete !=null && taskcomplete.checked ) {
      p = true;
      b.innerHTML = "Completed";

    }else{
      
      b.innerHTML = "Not Completed";  

    }

    this.taskService.completechecked(id,p);

    console.log(p);
  }

}