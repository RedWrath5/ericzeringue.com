import { EriczeringueNodePage } from './app.po';

describe('ericzeringue-node App', () => {
  let page: EriczeringueNodePage;

  beforeEach(() => {
    page = new EriczeringueNodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
