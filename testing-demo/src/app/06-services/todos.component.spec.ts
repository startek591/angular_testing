import { TodosComponent } from './todos.component';
import { TodeService } from './todo.services';
import { from, empty, throwError } from 'rxjs';

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

  it('should call the server to save the changes whne a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake((t) => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo return from the server', () => {
    let todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server returns an error when adding a new todo', () => {
    let error = 'error from the server';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });
});
