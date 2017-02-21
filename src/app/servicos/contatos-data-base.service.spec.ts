import { TestBed, inject } from '@angular/core/testing';
import { ContatosDataBaseService } from './contatos-data-base.service';

describe('ContatosDataBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatosDataBaseService]
    });
  });

  it('should ...', inject([ContatosDataBaseService], (service: ContatosDataBaseService) => {
    expect(service).toBeTruthy();
  }));
});
