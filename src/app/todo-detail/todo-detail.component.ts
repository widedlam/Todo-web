import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo = new Todo();
  id: String;
  isUpdated = false;
  todoForm: FormGroup;
  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isUpdated = false;
    this.getTodo(this.id);
  }
  createForm() {
    this.todoForm = new FormGroup({
      id: new FormControl(),
      description: new FormControl(),
    });
  }
  updateFormValues() {
    this.todoForm.setValue({
      description: this.todo.description,
      id: this.todo.id
    });
  }

  get description() {
    return this.todoForm.get('description');
  }
  getTodo(id: String) {
    this.todoService.getTodo(id)
      .subscribe(
        data => {
          this.todo = data;
          this.updateFormValues();
        },
        error => console.log(error));
  }
  updateTodo(todo) {
    this.todo.description= this.description.value;
    this.todoService.updateTodo(this.todo).subscribe(
      data => {
        this.todo = data;
        this.isUpdated = true;
      },
      error => console.log(error));
  }

}
