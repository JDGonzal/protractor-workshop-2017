import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get eMail(): ElementFinder {
    return $('#email');
  }

  public writeEMail(text): promise.Promise<void> {
    return this.eMail.sendKeys(text);
  }
}
