import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarioComponent } from './lista-usuario.component';

describe('ListaUsuarioComponent', () => {
  let component: ListaUsuarioComponent;
  let fixture: ComponentFixture<ListaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
