// creates object to keep track of values
const Calculator = {
    // displays 0 on the screen
    Display_Value: '0',
    // this will hold the first operand for any expressions
    First_Operand: null,
    // checks whether or not second has been input
    Wait_Second_Operand: false,
    // will hold operator
    operator: null,
};

// modifies value each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    // checking if wait-second is true and setting display value to the key that was clicked
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // overwrites Display_Value if the current value is 0 otherwise adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//handles decimal points
function Input_Decimal(dot) {
    // ensures that accidental clicking of the decimal point doesn't cause bug in operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        // saying that if Display_Value doesnt contain decimal we want to add a decimal
        Calculator.Display_Value += dot;
    }
}

// handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    // when operator key pressed, convert current num displayed to a num and then store result in calculator.first-operand if it doesnt already exist
    const Value_of_Input = parseFloat(Display_Value);
    // checks if operator already exists and if wait-second-operand is true then updates operator and exits function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // check if operator already exists
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup if performed for operator in perform-calculation object and function that matches is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // add a fixed amount of numbers after decimal
        result = Number(result).toFixed(9)
        // removes any trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//updates screen with the contents of display-value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// moinotrs button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // target variable is object that reps the element that was clicked
    const { target } = event;
    // if element that was clicked is not on button, exit function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures AC clears nums from calc
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})