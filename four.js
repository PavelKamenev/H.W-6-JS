/* 4) Отримати від користувача через promt  значення name  вивести в консоль, першу і останню літеру з name */

let name = prompt('Please type your name');
let firstLetter = name.slice(0,1);
let lastLetter = name.slice(-1);
console.log(` First letter ${firstLetter} and last letter ${lastLetter}`)
