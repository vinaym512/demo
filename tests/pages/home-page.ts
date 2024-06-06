import { expect, type Locator, type Page, errors } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly getYourVehicle: Locator;
  readonly getEVCharging: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getYourVehicle = page.getByRole('link', { name: 'Your Vehicle' });
    this.getEVCharging = page.getByRole('link', { name: 'EV Charging', exact: true });
    }

  async goto(url:string) {
    await this.page.goto(url, {waitUntil: 'load'});

  }

  async goToEVCharging() {
    
    await this.getYourVehicle.first().hover();
    await this.getYourVehicle.first().hover();
    try {
      await expect(this.getEVCharging).toBeVisible({timeout:30000});
      
    } catch (error) {
      if (error instanceof errors.TimeoutError)
        console.log('Timeout!');
      await this.getYourVehicle.first().hover();
    }
    // await expect(this.getEVCharging).toBeVisible({timeout:30000});
    await this.getEVCharging.click();
  }

  
}