import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaMujerComponent } from './categoria-mujer.component';

describe('CategoriaMujerComponent', () => {
  let component: CategoriaMujerComponent;
  let fixture: ComponentFixture<CategoriaMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaMujerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
