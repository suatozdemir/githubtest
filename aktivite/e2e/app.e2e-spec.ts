import { AktivitePage } from './app.po';

describe('aktivite App', function() {
  let page: AktivitePage;

  beforeEach(() => {
    page = new AktivitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
