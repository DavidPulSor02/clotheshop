import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaNinosComponent } from './categoria-ninos.component';

describe('CategoriaNinosComponent', () => {
  let component: CategoriaNinosComponent;
  let fixture: ComponentFixture<CategoriaNinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaNinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaNinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
