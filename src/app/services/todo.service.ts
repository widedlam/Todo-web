import { Injectable } from '@angular/core';
import{Todo} from '../models/todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8080/todos';
  constructor(private http:HttpClient) { }

  getAllTodos(): Observable< any> {
    return this.http.get(`${this.baseUrl}`);
  }
  createTodo(todo: Todo): Observable< object> {
    return this.http.post(`${this.baseUrl}`, todo);
  }
  updateTodo(todo: Todo): Observable< Todo> {
    return this.http.put< Todo>(`${this.baseUrl}`, todo);
}
deleteTodo(id: number): Observable< any> {
  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}
getTodo(id:String):Observable< any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}
}
