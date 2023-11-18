import { TodosComponent } from './todos.component';
import { TodeService } from './todo.services';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodeService;

  beforeEach(() => {
    service = new TodeService(null as any);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned form the server', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });
});
