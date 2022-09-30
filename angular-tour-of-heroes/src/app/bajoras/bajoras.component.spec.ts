import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajorasComponent } from './bajoras.component';

describe('BajorasComponent', () => {
  let component: BajorasComponent;
  let fixture: ComponentFixture<BajorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
