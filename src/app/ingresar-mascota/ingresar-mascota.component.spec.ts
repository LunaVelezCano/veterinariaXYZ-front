import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarMascotaComponent } from './ingresar-mascota.component';

describe('IngresarMascotaComponent', () => {
  let component: IngresarMascotaComponent;
  let fixture: ComponentFixture<IngresarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
