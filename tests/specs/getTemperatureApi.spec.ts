import { expect, test } from '@playwright/test';
import * as fs from 'fs';

test('test api', async ({request}) => {
    const apiUrl = 'http://api.weatherapi.com/v1/current.json';
    // const apiKey = '4ba30fa8cc474375af2144410240506';
    const apiKey = process.env.API_KEY;
    const location = 'Sydney';
    const aqi = 'no';

    // Construct the full URL with query parameters
    const url = `${apiUrl}?key=${apiKey}&q=${location}&aqi=${aqi}`;

    // Call the GET method with headers
    const resp = await request.get(url, 
    {
        headers:{
            "Accept":"application/json",
        }

    });

    // console.log(request)
    // console.log(resp)
    expect (resp.ok).toBeTruthy;

    // const respJson = await resp.json()
    const stringTemperature = JSON.stringify((await resp.json()).current.temp_c)
    // const stringTemperature = JSON.stringify(respJson.current)
    // console.log(stringTemperature)
    fs.writeFileSync('temperature.txt', stringTemperature)
    
});