import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Results {
  id: string;
    isActive: boolean;
    age: number;
    name: string;
    gender: string;
    company: string;
    email: string;
    phone: string;
    disabled?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _gitHubAccountsCache = new Map<string, []>();

  constructor(private http: HttpClient) {
  }

  getResults(term: string = null): Observable<Results[]> {
      let items = getdbResults();
      if (term) {
          items = items.filter(x => x.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
      }
      return of(items).pipe(delay(500));
  }
}

function getdbResults() {
  return []
}
