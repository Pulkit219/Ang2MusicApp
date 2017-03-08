import { Ang2MusicAppPage } from './app.po';

describe('ang2-music-app App', function() {
  let page: Ang2MusicAppPage;

  beforeEach(() => {
    page = new Ang2MusicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
