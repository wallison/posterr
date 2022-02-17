import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostErrorModalComponent } from './post-error-modal.component';

describe('PostErrorModalComponent', () => {
  let component: PostErrorModalComponent;
  let fixture: ComponentFixture<PostErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostErrorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
