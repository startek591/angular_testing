import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  add(todo: any) {
    return this.http.post('...', todo).pipe(map((r: any) => r.json()));
  }

  getTodos() {
    return this.http.get('...').pipe(map((r: any) => r.json()));
  }

  getTodosPromise(): Promise<any> {
    return this.http
      .get('...')
      .pipe(map((r: any) => r))
      .toPromise();
  }

  delete(id: any) {
    return this.http.delete('...', id).pipe(map((r: any) => r.json()));
  }
}
