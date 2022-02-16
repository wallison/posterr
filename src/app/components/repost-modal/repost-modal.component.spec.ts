import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostModalComponent } from './repost-modal.component';

describe('RepostModalComponent', () => {
  let component: RepostModalComponent;
  let fixture: ComponentFixture<RepostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepostModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
