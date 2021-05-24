"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require('puppeteer');
var express = require("express");

var app = express();

app.listen(port, function () {
    // if (err )return console.error(err)
    return console.log("Server running on port " + process.env.PORT);
});
// const data:{
//     firstName: String,
//     lastName: String,
//     emailAddress: String,
//     phoneNumber: String,
//     countryOfResidence: String,
//     sasscoName: String,
//     date:String,
//     timeFrame:String,
//     message:String,
//     submitBtn:String,
// } = {
//     firstName: 'input[name:"First Name"]',
//     lastName:'input[name:"Last Name"]',
//     emailAddress:'input[name:"Email address"]',
//     phoneNumber:'input[name:"Phone number"]',
//     countryOfResidence:'select[name:"Country of residence"]',
//     sasscoName:'input[name:"SACCO name"]',
//     date:'select[name="Choose a prefered date"]',
//     timeFrame:'select[name:"Choose a prefered timeframe"]',
//     message:'textarea[name:"Your message (optional)"]',
//     submitBtn:'input[name:"form__input"]'
// };
// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage()  
//     await page.goto("https://kwara.com/",)   
//     // await page.screenshot({ path: "page.png" });   
//     await browser.waitForTarget(() => false);
//     await page.waitForSelector(data.submitBtn)
//     await page.click(data.submitBtn)
//     await page.waitForSelector(data.firstName)
//     await page.type(data.firstName,"Kwame")
//     await page.type(data.lastName,"Boateng")
//     await page.type(data.emailAddress,"kwameagyenimboateng64@gmail.com")
//     await page.type(data.phoneNumber,"0208956935")
//     await page.type(data.countryOfResidence,"Lnodon, UK")
//     await page.type(data.sasscoName,"I'm Ready")
//     await page.type(data.date,"26 May 2021",{delay:100})
//     await page.type(data.timeFrame,"26 May 2021")
//     await page.type(data.message,"Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch()")
//     await browser.close();   //close browser
// })();
