import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDuenosComponent } from './mostrar-duenos.component';

describe('MostrarDuenosComponent', () => {
  let component: MostrarDuenosComponent;
  let fixture: ComponentFixture<MostrarDuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDuenosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
