import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroissanceComponent } from './croissance.component';

describe('CroissanceComponent', () => {
  let component: CroissanceComponent;
  let fixture: ComponentFixture<CroissanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CroissanceComponent]
    });
    fixture = TestBed.createComponent(CroissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
