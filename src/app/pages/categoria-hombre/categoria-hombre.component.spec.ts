import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaHombreComponent } from './categoria-hombre.component';

describe('CategoriaHombreComponent', () => {
  let component: CategoriaHombreComponent;
  let fixture: ComponentFixture<CategoriaHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaHombreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
