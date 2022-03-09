import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    title: string,
    img: string,
    description: string
  }) { }

  ngOnInit(): void {
  }

}
