import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyPostModalComponent } from './reply-post-modal.component';

describe('ReplyPostModalComponent', () => {
  let component: ReplyPostModalComponent;
  let fixture: ComponentFixture<ReplyPostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyPostModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
