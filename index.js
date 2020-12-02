const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const URL = "http://127.0.0.1:5500/puppeteer-html/index.html";

  await page.goto(`${URL}`, {
    waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"],
  });

  const frequencys = await page.$$(".frequency");

  for (let frequency of frequencys) {
    await frequency.click();
    await frequency.click();
  }

  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
