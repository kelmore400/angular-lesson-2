import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSlideComponent } from './third-slide.component';

describe('ThirdSlideComponent', () => {
  let component: ThirdSlideComponent;
  let fixture: ComponentFixture<ThirdSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
