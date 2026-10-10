const inputNumber = document.querySelector(`#binary-number`)
const errorMessage = document.querySelector(`#error-message`);
const decimalNumber = document.querySelector('#decimal-number')
console.log("🚀 ~ decimalNumber:", decimalNumber)

inputNumber.addEventListener('input', () => {
    if (/[^01]/.test(inputNumber.value)) {
        errorMessage.textContent = `Only 0 and 1 are allowed.`;
        inputNumber.classList.add('input-error');
        decimalNumber.value = '';
        return;
    } else {
        errorMessage.textContent = '';
        inputNumber.classList.remove('input-error')
    }
    if (!inputNumber.value) {
        decimalNumber.value = '';
    } else {
        decimalNumber.value = convertBinaryToDecimalNumber(inputNumber.value);

    }
})

function convertBinaryToDecimalNumber(num) {
    let result = 0;
    let degree = parseInt(num.length - 1);
    for (let i = 0; i < num.length; i++) {
        let currentNumber = parseInt(num[i]);
        result += currentNumber * Math.pow(2, degree);
        degree--
    }
    return result;

}