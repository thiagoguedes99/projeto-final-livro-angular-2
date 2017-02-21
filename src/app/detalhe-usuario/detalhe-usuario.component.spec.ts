import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheUsuarioComponent } from './detalhe-usuario.component';

describe('DetalheUsuarioComponent', () => {
  let component: DetalheUsuarioComponent;
  let fixture: ComponentFixture<DetalheUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
