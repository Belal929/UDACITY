
const display = document.querySelector('.calculator__display');
let currentInput = '0';
let operator = null;
let prevInput = null;

function updateDisplay() {
    display.textContent = currentInput;
}

// Event listeners for number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = button.textContent;
        } else {
            currentInput += button.textContent;
        }
        updateDisplay();
    });
});

// Event listeners for operator buttons (+, -, *, /)
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (prevInput !== null) {
            // Compute result based on previous input and operator
            switch (operator) {
                case '+':
                    currentInput = (parseFloat(prevInput) + parseFloat(currentInput)).toString();
                    break;
                case '-':
                    currentInput = (parseFloat(prevInput) - parseFloat(currentInput)).toString();
                    break;
                case '*':
                    currentInput = (parseFloat(prevInput) * parseFloat(currentInput)).toString();
                    break;
                case '/':
                    currentInput = (parseFloat(prevInput) / parseFloat(currentInput)).toString();
                    break;
                default:
                    break;
            }
        }
        prevInput = currentInput;
        operator = button.textContent;
        currentInput = '0';
        updateDisplay();
    });
});

// Event listener for "=" button
document.querySelector('.equal').addEventListener('click', () => {
    if (prevInput !== null && operator !== null) {
        // Compute final result
        switch (operator) {
            case '+':
                currentInput = (parseFloat(prevInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(prevInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(prevInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(prevInput) / parseFloat(currentInput)).toString();
                break;
            default:
                break;
        }
        prevInput = null;
        operator = null;
        updateDisplay();
    }
});

// Event listener for "C" button (clear)
document.querySelector('.clear').addEventListener('click', () => {
    currentInput = '0';
    prevInput = null;
    operator = null;
    updateDisplay();
});


const select = document.querySelector("#theme");
const body = document.querySelector("body");

select.addEventListener("change", () => {
  body.classList.remove(...body.classList);
  body.classList.add(select.value);
  }
)