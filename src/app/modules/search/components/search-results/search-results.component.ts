import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IBooksVolumes} from '../../interfaces/IBooksVolumes';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() books: Observable<IBooksVolumes>;

  constructor() { }

  ngOnInit(): void {
  }
}
