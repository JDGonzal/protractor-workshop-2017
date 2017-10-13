import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get selectModal(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public goToModal(): promise.Promise<void> {
    return this.selectModal.click();
  }
}
