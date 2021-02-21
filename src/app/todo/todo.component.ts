import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  

  constructor() { }

  
  
  ngOnInit(): void {
  }
  todo:any[]=[]
  task:string=''
  addtask(event:any){
  this.task=(event.target as HTMLInputElement).value
  }
  add(){
  this.todo.push(this.task)
  console.log(this.todo)
}

}
