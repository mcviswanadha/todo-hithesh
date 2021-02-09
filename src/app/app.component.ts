import { Component } from '@angular/core';

import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';

  todoValue: string;
  list: any[] = [];

  constructor(){
    this.todoValue = "";
  }

  ngoninit(){
    this.list = [];
    this.todoValue = "";
  }

  addItem(){
    if(this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue="";
  }

  delItem(id:number){
    this.list = this.list?.filter(item => item.id !== id);
  }

}
