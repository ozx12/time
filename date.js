#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('year', {
    alias: 'y',
    type: 'sring',
    description: 'Текущий год'
  })
  .option('month', {
    alias: 'm',
    type: 'sring',
    description: 'Текущий месяц'
  })
  .option('date', {
    alias: 'd',
    type: 'sring',
    description: 'Дата в календарном месяце'
  })
  .argv;

 if  (argv == "add") {
  console.log('add');
 }
var now = new Date();

console.log( argv.year,  argv.date,  argv.month);




if (argv.date) {
  console.log('Date');
} else
  if (argv.month)
{
    console.log('month');
  } else
    if (argv.year)
{
      console.log('year');
    } else {
      console.log(now);
    }

 