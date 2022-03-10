import { Component, OnInit } from '@angular/core';
import {WishlistService} from '../../services/wishlist.service';
import {IBookItem} from '../search/interfaces/IBookItem';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: IBookItem[];
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

}
