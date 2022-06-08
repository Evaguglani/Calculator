let currentResult=0;
let logEntries=[];


function createAnsWriteOutput(mathOperator,resultBeforeCalc,calcNumber)
{
    const calDesc=`${resultBeforeCalc} ${mathOperator} ${calcNumber}`;
    outputResult(currentResult,calDesc);
}



function calculateResult(calculationType)
{
    const enteredNumber=parseInt(userInput.value);
    const initialResult=currentResult;
    let mathOperator;
    if(calculationType==='ADD')
    {
        currentResult+=enteredNumber;
        mathOperator='+';
    }
    else if(calculationType==='SUBTRACT')
    {
        currentResult-=enteredNumber;
        mathOperator='-';
    }
    if(calculationType==='MULTIPLY')
    {
        currentResult*=enteredNumber;
        mathOperator='*';
    }
    if(calculationType==='DIVIDE')
    {
        currentResult/=enteredNumber;
        mathOperator='/';
    }
    createAnsWriteOutput(mathOperator,initialResult,enteredNumber);

}

function add()
{
    calculateResult('ADD');
}

function subtract()
{
    calculateResult('SUBTRACT');
}
    
function multiply()
{
   calculateResult('MULTIPLY');
}
function divide()
{
    calculateResult('DIVIDE');
}



addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);


