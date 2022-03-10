import { Injectable } from '@angular/core';
import {IBookItem} from '../modules/search/interfaces/IBookItem';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistKey = 'booksWishlist';
  wishlistItems: IBookItem[] = [];

  constructor() { }

  update(wish): void {
    if (localStorage.getItem(this.wishlistKey)) {
      this.wishlistItems = JSON.parse(localStorage.getItem(this.wishlistKey));
      localStorage.removeItem(this.wishlistKey);
    }
    if (wish) {
      this.wishlistItems.push(wish);
    }
    localStorage.setItem(this.wishlistKey, JSON.stringify(this.wishlistItems));
  }

  getWishlist(): IBookItem[] {
    if (localStorage.getItem(this.wishlistKey)) {
      return JSON.parse(localStorage.getItem(this.wishlistKey));
    }
  }

  remove(itemTitle: string): void {
    const currentItems = this.getWishlist() ?? [];
    if (currentItems.length) {
      this.wishlistItems = currentItems.filter(item => {
        return item.title !== itemTitle;
      });
    }
    localStorage.setItem(this.wishlistKey, JSON.stringify(this.wishlistItems));
    location.reload(); // iff
  }
}
