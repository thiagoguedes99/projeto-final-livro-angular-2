import { ProjetoFinalPage } from './app.po';

describe('projeto-final App', () => {
  let page: ProjetoFinalPage;

  beforeEach(() => {
    page = new ProjetoFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
