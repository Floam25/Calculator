function add(a, b) {
    return a + b;
};

function sub(a, b) {
    return a - b;
};

function mul(a, b) {
    return a * b;
};

function div(a, b) {
    if (b != 0) {
        return a / b;
    }
    return 0;
};

const metods = {
    '+': add,
    '-': sub,
    '/': div,
    'x': mul
};

function operate(operand, a, b) {
    return metods[operand](parseInt(a, 10), parseInt(b, 10));
};


let numberA = "";
let curOperand = "";
let numberB = "";
const exprBlock = document.querySelector('.expr');

function writeExpression() {
    let firstNum = parseInt(numberA);
    let secondNum = parseInt(numberB);
    if (numberA == "") {
        exprBlock.innerText = '0';
    } else if (curOperand == "") {
        exprBlock.innerText = firstNum;
    } else  if (numberB == "") {
        exprBlock.innerText = `${firstNum} ${curOperand}`;
    } else {
        exprBlock.innerText = `${firstNum} ${curOperand} ${secondNum}`;
    }
}


const numButtons = document.querySelectorAll('.num-btn');
const operandButtons = document.querySelectorAll('.oper-btn');

numButtons.forEach(
    (item) => item.addEventListener('click',
        function() {
            let num = item.innerText;
            if (curOperand == "") {
                numberA += num;
            } else {
                numberB += num;
            }
            writeExpression();
        }
    )
);

operandButtons.forEach(
    (item) => item.addEventListener('click',
        function() {
            let op = item.innerText;
            if (numberB != "") {
                if  (op == '=') {
                    let result = operate(curOperand, numberA, numberB);
                    numberA = result;
                    curOperand = "";
                    numberB = "";
                }
            } else {
                if (op != "=" && numberA != "" && numberB == "") {
                    curOperand = op;
                }
            }
            writeExpression();
        }
    )
);
