import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {IBooksVolumes} from '../../interfaces/IBooksVolumes';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() books: Observable<IBooksVolumes>;

  constructor() { }

  ngOnInit(): void {
    this.formatData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('hhhhhhhhhhhhh' , changes);
  }

  formatData(): any {
    console.log(this.books);
  }
}
