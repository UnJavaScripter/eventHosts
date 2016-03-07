/// <reference path="../typings/main.d.ts" />

import { EventHostsPage } from './app.po';

describe('event-hosts App', function() {
  let page: EventHostsPage;

  beforeEach(() => {
    page = new EventHostsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('event-hosts Works!');
  });
});
