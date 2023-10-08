import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusViewComponent } from './status-view.component';

describe('StatusViewComponent', () => {
  let component: StatusViewComponent;
  let fixture: ComponentFixture<StatusViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StatusViewComponent]
    });
    fixture = TestBed.createComponent(StatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
