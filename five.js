/* 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину 
більше 10 символів то відрізає все після 10 символа і додає 3 крапки до стрінга */
let promptUser = prompt(' Please type ten letter')
function checkStringFn (promptUser) {
    let trimStr = promptUser.trim();
    if(trimStr.length > 10) {
        return `${trimStr.slice(0, 10)}...`;
    } else {
        return trimStr;
    }
}

console.log(checkStringFn(promptUser));
