import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOnComponent } from './save-on.component';

describe('SaveOnComponent', () => {
  let component: SaveOnComponent;
  let fixture: ComponentFixture<SaveOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
