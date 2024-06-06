import { expect, type Locator, type Page } from '@playwright/test';

export class EnergyPage {
  readonly page: Page;
  readonly getEnergyLogo: Locator;
  readonly getSwitchNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getEnergyLogo = page.getByRole('link', { name: 'Retail Energy' });
    this.getSwitchNowButton = page.locator('a').getByText('SWITCH NOW').first();
    }

  
  async goToSwitchNow() {
    await this.getEnergyLogo.click();
    await this.getSwitchNowButton.click();
  }

  
}