import {Component, Input, OnInit} from '@angular/core';
import {WishlistService} from '../../../../services/wishlist.service';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss']
})
export class WishItemComponent implements OnInit {
@Input() data;
  constructor(public wishlistService: WishlistService) { }

  ngOnInit(): void {
  }
}
