const inputNumber = document.querySelector(`#binary-number`)
const errorMessage = document.querySelector(`#error-message`);
const decimalNumber = document.querySelector('#decimal-number')
console.log("🚀 ~ decimalNumber:", decimalNumber)

inputNumber.addEventListener('input', () => {
    if (/[^01]/.test(inputNumber.value)) {
        errorMessage.textContent = `Only 0 and 1 are allowed.`;
        inputNumber.classList.add('input-error');
    } else {
        errorMessage.textContent = '';
        inputNumber.classList.remove('input-error')
    }
})