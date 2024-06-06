import { test, expect } from '@playwright/test';
import jdata from '../../hars/availablePlans.json';

test('search avaiable plans at given locations', async ({ page}) => {
    await page.goto('https://energy.ampol.com.au/sign-up/postcode');
    await page.routeFromHAR('./hars/availablePlans.json', {
        url: 'https://api.ampolenergy.com.au/onboarding/v1.0/lead',
        update: true,
        updateContent: 'embed'
      });

    await page.getByTestId('postcode-input').click();
    await page.getByTestId('postcode-input').fill('4011');
    await page.getByText('Clayfield 4011 QLD').click();
    await page.getByTestId('Button').click();
    await expect(page.getByRole('heading', { name: '/year' })).toBeVisible({timeout: 5000});
    
    await page.screenshot({ path: 'tests/specs/searchLocationPlan.spec.ts-snapshots/4011-chromium-darwin.png' });
    
    await page.goBack({waitUntil: 'domcontentloaded'});
    await expect(page.getByTestId('postcode-input')).toBeVisible({timeout: 5000});
    
    await page.getByTestId('postcode-input').click();
    await page.getByTestId('postcode-input').fill('4018');
    await page.getByText('Fitzgibbon 4018 QLD').click();
    await page.getByTestId('Button').click();
    await expect(page.getByRole('heading', { name: '/year' })).toBeVisible({timeout: 5000});
    await expect.soft(page).toHaveScreenshot('4011.png');
    
    const text = JSON.parse(jdata.log.entries[0].response.content.text)
    const newUrl =  'https://energy.ampol.com.au/sign-up/agent?leadid='+text.leadId

    await page.goto(newUrl)
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible({timeout:5000})
 
});