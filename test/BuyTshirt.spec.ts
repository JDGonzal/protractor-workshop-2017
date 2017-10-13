import { $, browser } from 'protractor';
import { MenuContentPage, 
  ProductListPage, 
  ProductDetailPage, 
  ProductAddedModalPage,
  SummaryStepPage ,
  SignInStepPage} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.goToTShirtImage();
    await(browser.sleep(3000));
    await productDetailPage.goToAddToCart();
    await(browser.sleep(3000));
    await productAddedModalPage.goToModal();
    await(browser.sleep(3000));
    await summaryStepPage.goToProceedToCheckoutButton();
    await(browser.sleep(3000));

    await signInStepPage.writeEMail('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();
    await(browser.sleep(3000));

    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));

    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
