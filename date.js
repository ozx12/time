#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

var now = new Date();

const argv = yargs(hideBin(process.argv))
  .command('$0', 'по умолчанию выводит текущую дата', () => { }, (argv) => {
    console.log(now);
  })
  .command('current', 'текущая дата', () => { }, (argv) => {
    if (argv.date) {
      console.log(now.getDate());
    } else
      if (argv.month) {
        console.log(now.getMonth());
      } else
        if (argv.year) {
          console.log(now.getFullYear());
        } else
          console.log(now);
  })
  .command('add', 'получаем дату из будущего', () => { }, (argv) => {
    if (argv.date) {
      now.setDate(now.getDate());
      console.log(now.getDate());
    } else
      if (argv.month) {
        now.setMonth(now.getMonth() + argv.month);
        console.log(now.getMonth());
      } else
        if (argv.year) {
          now.setFullYear(now.getFullYear() + argv.year);
          console.log(now.getFullYear());
        } else
          console.log(now);
  })
  .command('sub', 'получаем дату из прошлого', () => { }, (argv) => {
    if (argv.date) {
      now.setDate(now.getDate() + argv.month);
      console.log(now.getDate());
    } else
      if (argv.month) {
        now.setMonth(now.getMonth() + argv.month);
        console.log(now.getMonth());
      } else
        if (argv.year) {
          now.setFullYear(now.getFullYear() + argv.year);
          console.log(now.getFullYear());
        } else
          console.log(now);
  })
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





