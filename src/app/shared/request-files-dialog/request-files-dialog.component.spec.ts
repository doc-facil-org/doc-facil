import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFilesDialogComponent } from './request-files-dialog.component';

describe('RequestFilesDialogComponent', () => {
  let component: RequestFilesDialogComponent;
  let fixture: ComponentFixture<RequestFilesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RequestFilesDialogComponent]
    });
    fixture = TestBed.createComponent(RequestFilesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
