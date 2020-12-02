import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getTasks(): any[] {
    return [
      { name: 'name 1', description: 'd1 ' },
      { name: 'name 2', description: 'd2 ' },
    ];
  }
}
