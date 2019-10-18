const cheerio = require('cheerio')
const request = require('request')
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
function scrape(dom) {
  $ = cheerio.load(dom)
}

request('http://news.python.sc', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  scrape(body)
});

