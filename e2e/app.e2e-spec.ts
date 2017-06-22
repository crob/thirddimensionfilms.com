import { Thirddimensionfilms.ComPage } from './app.po';

describe('thirddimensionfilms.com App', () => {
  let page: Thirddimensionfilms.ComPage;

  beforeEach(() => {
    page = new Thirddimensionfilms.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
