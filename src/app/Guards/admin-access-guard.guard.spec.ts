import { TestBed } from '@angular/core/testing';

import { AdminAccessGuardGuard } from './admin-access-guard.guard';

describe('AdminAccessGuardGuard', () => {
  let guard: AdminAccessGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAccessGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
