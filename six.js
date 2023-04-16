/* 6) Створити функцію яка повертає сторіччя, функція отримує рік 
а повертає номер сторіччя,( задача на повторення Math властивостей). Наприклад:
1810->19
1700 -> 17
1601 ->17 
2000 -> 20 */


function century () {
    let year = Number(prompt("Enter the year: "));
    let century = Math.ceil(year / 100);
    console.log(`${year} year is a ${century} century`);
}

century();