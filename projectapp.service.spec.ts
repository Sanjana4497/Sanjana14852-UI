import { TestBed } from '@angular/core/testing';

import { ProjectappService } from './projectapp.service';

describe('ProjectappService', () => {
  let service: ProjectappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
