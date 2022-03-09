import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BookDescriptionComponent } from './components/book-description/book-description.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultsComponent,
    BookItemComponent,
    BookDescriptionComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class SearchModule { }
