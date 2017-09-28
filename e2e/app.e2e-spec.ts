import { FactAppPage } from './app.po';

describe('fact-app App', () => {
  let page: FactAppPage;

  beforeEach(() => {
    page = new FactAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
