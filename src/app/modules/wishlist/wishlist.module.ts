import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { WishItemComponent } from './components/wish-item/wish-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    WishlistComponent,
    WishItemComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class WishlistModule { }
