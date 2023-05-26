import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoVeterinarioComponent } from './medico-veterinario.component';

describe('MedicoVeterinarioComponent', () => {
  let component: MedicoVeterinarioComponent;
  let fixture: ComponentFixture<MedicoVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoVeterinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
