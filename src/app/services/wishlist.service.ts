import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistKey: string;

  constructor() { }

  update(wishlist): void {
    localStorage.removeItem(this.wishlistKey);
    localStorage.setItem(this.wishlistKey, wishlist);
  }

  getWishlist(): string {
    return localStorage.getItem(this.wishlistKey);
  }
}
