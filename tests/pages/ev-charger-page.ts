import { expect, type Locator, type Page } from '@playwright/test';

export class EVChargerPage {
  readonly page: Page;
  readonly findCharginLocLink: Locator;
  readonly getLocationSelectorBox: Locator;
  readonly enterLocationSelectortext: Locator;
  readonly selectFirstChargingStation: Locator;
  readonly getChargerName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.findCharginLocLink = page.getByRole('link', { name: 'FIND A CHARGING LOCATION pin' });
    this.getLocationSelectorBox = page.getByTestId('Input').locator('span').nth(1);
    this.enterLocationSelectortext = page.locator('#rc_select_0');
    this.selectFirstChargingStation = page.getByRole('button', { name: 'EV Charging (AmpCharge)' }).first();
    this.getChargerName = page.locator('section > div > div > div > span')
    }

  
  async clickFindChargingLocation() {
    await this.findCharginLocLink.click();
  }    

  async selectEVChargingLocation(loc: string) {
    await this.getLocationSelectorBox.click();
    await this.enterLocationSelectortext.fill(loc);
    await this.page.getByText(loc, { exact: true }).click();
    await this.selectFirstChargingStation.click();

    
  }

async verifyAvailableChargersAt(loc: string, param1?: string) {
    const chargerTypes: string[] = [];
    const expectedChargers = ["CCS 1 (125 kW)", "CCS 2 (150 kW)", "CHAdeMO (125 kW)"]
    const elems = await this.getChargerName.all();
    let found = false;
    let availableCharger = '';
    for (const elem of elems){
        availableCharger = await elem?.textContent() ?? 'NO-CHARGER-FOUND';
        if (expectedChargers.includes(availableCharger))
            found = true;
            chargerTypes.push(availableCharger);
        }
    if (found){
        console.log(`${loc} has following chargers => `+chargerTypes);
      if(typeof param1 !== 'undefined') {      
          const missingCharger = expectedChargers.filter( charger => !chargerTypes.includes(charger));
          console.log(`${loc} does not have following chargers => `+missingCharger);
      }
    }
    await this.selectFirstChargingStation.click();
  }
  
}