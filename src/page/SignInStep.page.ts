import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get eMailBox(): ElementFinder {
    return $('#email');
  }
  
  public writeEMail(text): promise.Promise<void> {
    return this.eMailBox.sendKeys(text);
  }
  
  private get passwordBox(): ElementFinder {
    return $('#passwd');
  }

  public writePassword(text): promise.Promise<void> {
    return this.passwordBox.sendKeys(text);
  }

  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public goToSignIn(): promise.Promise<void> {
    return this.signInButton.click();
  }
}
