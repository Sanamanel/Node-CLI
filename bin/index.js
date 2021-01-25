#!/usr/bin/env node

const chalk = require("chalk");
const { getCode } = require("contry-list");
const axios = require("axios");
const figlet = require("figlet");
const ora = require("ora");

let argsInput = process.argv.slice(2);
let CountryInput = ArgsInput[0];

console.log(CountryInput);

let CountryCode = getCode(CountryInput);
consol.log(CountryCode);

let currentYear = new Date().getFullYear();
console.log(currentYear);

let urlAPI =
  "https://date.nager.at/api/v2/PublicHolidays/" +
  currentYear +
  "/" +
  CountryCode;
console.log(urlAPI);

axios.get(urlAPI).then(function (response) {
  let items = response.data;
  items.forEach((item, index) => {
    consol.log(
      "${index + 1} : ${item.date} . ${item.name} (${item.localName})"
    );
  });
});
