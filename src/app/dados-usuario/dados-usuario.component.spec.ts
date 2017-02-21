import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosUsuarioComponent } from './dados-usuario.component';

describe('DadosUsuarioComponent', () => {
  let component: DadosUsuarioComponent;
  let fixture: ComponentFixture<DadosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
