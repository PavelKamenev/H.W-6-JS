/*7) Створити функцію яка повертає інформацію який сьогодні день, місяць рік Наприклад getDayInfo() 
-> Сьогодні вівторок 11 квітня 2023 */

function getDayInfo() {
    let todayDate = new Date();
    console.log(`Today is: ${todayDate.toDateString()}`)
}
getDayInfo();