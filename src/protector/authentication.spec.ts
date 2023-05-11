import { browser, by, element } from 'protractor';

describe('Authentication', () => {
  beforeEach(() => {
    browser.get('/login'); // replace with the correct route to your login page
  });

  it('should display the login form', () => {
    expect(element(by.css('app-login form')).isDisplayed()).toBeTruthy();
  });

  it('should log in with valid credentials', async () => {
    await element(by.css('input[type="email"]')).sendKeys('test@example.com'); // replace with a valid email
    await element(by.css('input[type="password"]')).sendKeys('testpassword'); // replace with a valid password
    await element(by.css('button[type="submit"]')).click();

    expect(browser.getCurrentUrl()).toContain('/blogs'); // replace '/blogs' with the route to your blog page
  });

  // Add more tests for Google sign-in and registration, as needed.
});
