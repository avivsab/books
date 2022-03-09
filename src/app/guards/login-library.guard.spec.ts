import { TestBed } from '@angular/core/testing';

import { LoginLibraryGuard } from './login-library.guard';

describe('LoginLibraryGuard', () => {
  let guard: LoginLibraryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginLibraryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
