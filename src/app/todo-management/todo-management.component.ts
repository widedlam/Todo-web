import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Todo } from '../models/todo';
@Component({
  selector: 'app-todo-management',
  templateUrl: './todo-management.component.html',
  styleUrls: ['./todo-management.component.css']
})
export class TodoManagementComponent implements OnInit {
  todo : Todo = new Todo();
  todos:Array<Todo>[];
  isupdated = false;
  isCollapsed=false;
  todoForm:FormGroup;
  constructor(private todoService:TodoService) {
    this.createForm();
  }
  ngOnInit(): void {
    this.isupdated = false;
    this.isCollapsed = false;
    this.getAllTodos();
  }
  createForm(){
    this.todoForm= new FormGroup({
      id:new FormControl(),
      description:new FormControl(),
    });
  }

  deleteTodo(id){
    this.todoService.deleteTodo(id).subscribe(data =>{
      this.getAllTodos();
      })
  }
  getAllTodos(){
    this.todoService.getAllTodos().subscribe(data =>{
      this.todos = data;
      })
  }
  get description  (){
    return this.todoForm.get('description');
 }
  addTodo(){
    this.todo.description = this.description.value;
    this.todoService.createTodo(this.todo)
    .subscribe(
      data => {
       this. getAllTodos();
       this.todoForm.reset();
      },
      error => console.log(error));
  }

  collapse(){
     this.isCollapsed = !this.isCollapsed
  }
}
