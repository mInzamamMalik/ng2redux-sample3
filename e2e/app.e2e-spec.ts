import { Ng2reduxSample3Page } from './app.po';

describe('ng2redux-sample3 App', function() {
  let page: Ng2reduxSample3Page;

  beforeEach(() => {
    page = new Ng2reduxSample3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
