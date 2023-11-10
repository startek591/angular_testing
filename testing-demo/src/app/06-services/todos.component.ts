import { TodoService } from './todo.service';

export class TodosComponent {
  todos: any[] = [];
  message: any;

  constructor(private service: TodoService) {}

  ngOnInt() {
    this.service.geTodos().subscribe((t) => (this.todos = t));
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
