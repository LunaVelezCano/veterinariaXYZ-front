import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarDuenoComponent } from './ingresar-dueno.component';

describe('IngresarDuenoComponent', () => {
  let component: IngresarDuenoComponent;
  let fixture: ComponentFixture<IngresarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarDuenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
