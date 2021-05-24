import {  data } from './Model/User'
import * as dotenv from 'dotenv'
import CONFIG from './config'
const puppeteer = require('puppeteer');
dotenv.config();



(async () => {
   try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage()  
    await page.setViewport({ width: 1280, height: 1800 })
    await page.goto(data.url)   
    // await browser.waitForTarget(() => false);
    
    await page.type(data.email,'eshunpaul1@gmail.com',{delay:200})
    await page.type(data.password,CONFIG.password,{delay:200})
    
    await Promise.all([
        page.waitForNavigation(),
        page.click(data.submitBtn),
        page.screenshot({ path: "page.png",fullPage:true })
       
    ],)
    await browser.close();   //close browser
   } catch (error) {
       console.error(error)
   }
    
})();



