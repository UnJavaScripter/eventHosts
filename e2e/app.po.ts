export class EventHostsPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('EventHosts-app p')).getText(); }
}
