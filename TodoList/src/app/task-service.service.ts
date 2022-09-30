import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: Task[] =[];
  
  constructor(private http:HttpClient){}

  dataRequest(){
    this.http.get<Task[]>('assets/mock-task.json').subscribe((res:Task[]) => {
      for(let i=0;i<res.length;i++){
        let task:Task = new Task( res[i]);
        this.tasks.push(task)
      }
    });
  }

  addData(id:number, name: string, time: string, completed:boolean){
    let task:Task = new Task(<Task>{id,name,time,completed});

    this.tasks.push(task)
  }

  getData(){
    return this.tasks;
  }

  updateData(id:number,name:string,time:string){
    this.tasks.map(item=>{
      if(item.id===id){
        console.log(item)
        item?.updatename(name);
        item?.updatetime(time);
      }
    });
  }

  completechecked(id:number, completed:boolean){
    this.tasks.map(item=>{
      if(item.id===id){
        item.updatecomplete(completed);
        console.log(item)
      }
    });
  }




}


