import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookDescriptionComponent} from '../book-description/book-description.component';
import {IBookItem} from '../../interfaces/IBookItem';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
@Input() bookInfo: IBookItem;
wishlistItem;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showBookDetails(details): void {
    const dialogRef = this.dialog.open(BookDescriptionComponent, {
      data: {
        title: details.title,
        img: details.imageLinks.smallThumbnail,
        description: details.description
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.bookInfo.description) {
        const wishlistIem = {
          title: this.bookInfo.title,
          subtitle: this.bookInfo.subtitle,
          img: this.bookInfo.imageLinks?.smallThumbnail,
          description: this.bookInfo.description.slice(0, 100)
        };

      }
      console.log(`Dialog result: ${JSON.stringify(this.bookInfo)}`);
    });
  }
}
