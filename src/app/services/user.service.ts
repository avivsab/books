import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser = {
    username: ''
  };

  constructor() { }

  set(name): void {
    this.user.username = name;
  }

  get username(): string {
    return this.user.username;
  }
}
