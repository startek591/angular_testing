import { Component, OnInit } from '@angular/core';
import { TodeService } from './todo.services';

@Component({
  selector: 'app-my-component',
  template: '',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message: any;

  constructor(private service: TodeService) {}

  ngOnInit(): void {
    this.service.getTodos().subscribe((t) => (this.todos = t));
  }

  add() {
    var newTodo = { title: '...' };
    this.service.add(newTodo).subscribe(
      (t) => this.todos.push(t),
      (err) => (this.message = err)
    );
  }

  delete(id: any) {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }
}
