#!/usr/bin/env node

/*const chalk = require ('chalk');*/
const { getCode } = require("country-list");
const axios = require("axios");
/*const figlet = require ('figlet');
const ora = require ('ora');*/

let argsInput = process.argv.slice(2);
let countryInput = argsInput[0];
let YearInput = argsInput[1];

console.log(countryInput);

let countryCode = getCode(countryInput);
console.log(countryCode);

/*let currentYear = new Date().getFullYear()*/
console.log(YearInput);

let urlAPI =
  "https://date.nager.at/api/v2/PublicHolidays/" +
  YearInput +
  "/" +
  countryCode;
console.log(urlAPI);

axios.get(urlAPI).then(function (response) {
  let items = response.data;
  items.forEach((item, index) => {
    console.log(
      ` ${index + 1} : ${item.date} . ${item.name} (${item.localName})`
    );
  });
});
