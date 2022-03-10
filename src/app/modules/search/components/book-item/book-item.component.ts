import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookDescriptionComponent} from '../book-description/book-description.component';
import {IBookItem} from '../../interfaces/IBookItem';
import {WishlistService} from '../../../../services/wishlist.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() bookInfo: IBookItem;
  wishlistItem;

  constructor(
    public dialog: MatDialog,
    private wishlistService: WishlistService) {
  }

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
    dialogRef.afterClosed().subscribe(addWish => {
      if (addWish) {
        if (this.bookInfo.description) {
          const partialDescription = this.bookInfo.description.slice(0, 100);
          const wishlistIem = {
            title: this.bookInfo.title,
            subtitle: this.bookInfo.subtitle,
            img: this.bookInfo.imageLinks?.smallThumbnail,
            description: partialDescription
          };
          this.wishlistService.update(wishlistIem);
        } else {
          this.wishlistService.update(this.bookInfo);
        }
      }
    });
  }
}
