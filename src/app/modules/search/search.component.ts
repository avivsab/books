import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs';
import {BookService} from '../../services/book.service';
import {IBooksVolumes} from './interfaces/IBooksVolumes';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  username: string;
  searchControl = new FormControl();
  booksVolumes$: Observable<IBooksVolumes>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          if (this.route.snapshot.queryParams.username) { }
          this.username = params.username;
        }
      );
  }

  searchBooks(): void {
    this.searchControl.valueChanges.subscribe(value => {
        this.booksVolumes$ = this.bookService.search(value);
      });
  }
}
