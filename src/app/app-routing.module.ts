import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoManagementComponent } from './todo-management/todo-management.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
const routes: Routes = [
  {path: '', redirectTo: 'ManageTodo', pathMatch: 'full'},
  { path: 'ManageTodo', component: TodoManagementComponent },
  { path: 'ManageTodo/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
