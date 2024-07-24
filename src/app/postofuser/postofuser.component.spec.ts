import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostofuserComponent } from './postofuser.component';

describe('PostofuserComponent', () => {
  let component: PostofuserComponent;
  let fixture: ComponentFixture<PostofuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostofuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
