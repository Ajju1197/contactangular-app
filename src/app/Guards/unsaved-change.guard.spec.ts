import { TestBed } from '@angular/core/testing';

import { UnsavedChangeGuard } from './unsaved-change.guard';

describe('UnsavedChangeGuard', () => {
  let guard: UnsavedChangeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsavedChangeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
