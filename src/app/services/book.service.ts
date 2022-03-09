import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../environments/environment';
import {IBooksVolumes} from '../modules/search/interfaces/IBooksVolumes';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  readonly key = environment.apiKey;
  readonly resultsAmount = 20;
  constructor(private http: HttpClient) { }

  search(term: string): Observable<IBooksVolumes> {
    if (!term) {
      return;
    }
    return this.http.get<IBooksVolumes>(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=${this.resultsAmount}&key=${this.key}`);
  }
}
