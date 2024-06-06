import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { EVChargerPage } from '../pages/ev-charger-page';
import { EnergyPage } from '../pages/energy-page';

test('search avaiable chargers at given locations', async ({page}) => {
    const homePage = new HomePage(page)
    const evChargerPage = new EVChargerPage(page)
    const energyPage = new EnergyPage(page)
    
    await homePage.goto('https://www.ampol.com.au/')
    await homePage.goToEVCharging()
    await expect(page).toHaveURL('https://ampcharge.ampol.com.au/');

    await evChargerPage.clickFindChargingLocation();
    await evChargerPage.selectEVChargingLocation('Sydney NSW');
    await evChargerPage.verifyAvailableChargersAt('Sydney');
    
    await evChargerPage.selectEVChargingLocation('Melbourne VIC');
    await evChargerPage.verifyAvailableChargersAt('Melbourne', 'find-unavailable-also');

    await energyPage.goToSwitchNow();
    await expect (page).toHaveURL('https://energy.ampol.com.au/sign-up/postcode');

    
});