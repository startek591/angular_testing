import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodeService {
  constructor(private http: HttpClient) {}

  add(todo: any) {
    return this.http.post('...', todo).pipe(map((r: any) => r.json()));
  }

  getTodos() {
    return this.http.get('...').pipe(map((r: any) => r.json()));
  }

  delete(id: any) {
    return this.http.delete('...', id).pipe(map((r: any) => r.json()));
  }
}
