#!/usr/bin/env node
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function questMe() {
    var coin = getRandomInt(99)+1;
    console.log('Угадайте число от 1 до 100');
    rl.on('line', line => {      
  
      if (coin == line) {
        console.log("Правильно!");  
        rl.close();  
      };
  
      if (coin > line) {
        console.log("Вы ввели меньшее число");        
      };

      if (coin < line) {
        console.log("Вы ввели большее число");        
      };  
    });
  
    rl.on('close', () => {
      console.log('Конец игры');
      process.exit(0);
    });
  };

  questMe();