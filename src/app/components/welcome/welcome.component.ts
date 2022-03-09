import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ErrorState } from '../../utils/error-state';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  matcher = new ErrorState();
  constructor(
    private router: Router,
    public user: UserService
  ) { }

  ngOnInit(): void {
  }

  loginLibrary() {
    if (this.username.valid) {
      this.user.set(this.username.value);
      this.router.navigate(['/search'], { queryParams: { username: this.username.value } }).then();
    }
  }
}

