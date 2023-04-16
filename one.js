/*1) Створити функцію конструктор яка створює обєкт юзер 
(з даними імя, прізвище, вікв функції конструкторі повиний бути метод виводу інформації про юзера. 
  Метод повинен бути винесений в прототип. */
  /* 2)Створити метод на прототайп для оновлення значень обєкту юзер наприклад змінити імя або вік користувача*/
/* 3)Створити функцію сорт яка  отримує  массив з створеними обєктами юзер і сортує їх по віку ( в порядку зростання) */
 function UserConstructor (name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  
}

UserConstructor.prototype.returnUserInfo = function() {
  return `This name ${this.name}, this surmane ${this.surname}, this Age ${ this.age}`;
}
UserConstructor.prototype.updateUserName = function(newName) {
  this.name = newName;
}
UserConstructor.prototype.updateUserAge = function(newAge) {
  this.age = newAge;
}

let firstUser = new UserConstructor ('Palvo', 'Kameniev', 26 );
let secondUser = new UserConstructor ('Kiril', 'Smith', 30 );
let thirdUser = new UserConstructor ('Kris', 'Calager', 18 );

console.log(firstUser.returnUserInfo());
console.log(secondUser.returnUserInfo());
console.log(thirdUser.returnUserInfo());

let users = [firstUser, secondUser, thirdUser];

console.log(users.sort(function(a,b){return a.age - b.age}));