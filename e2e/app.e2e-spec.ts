import { AngulahMonstahPage } from './app.po';

describe('angulah-monstah App', () => {
  let page: AngulahMonstahPage;

  beforeEach(() => {
    page = new AngulahMonstahPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
