var display = document.getElementById('display');
var resultValue = 0;
var tempValue = 0;    //use just for calculate
var isDisplayResult = true;
var isDatClicked = false;
var countDatDegree = 0;
var operateSymbol = '';

document.getElementById('ac').addEventListener('click', clear);    //after click ac button, clear all data in computer
document.getElementById('sign').addEventListener('click', changeSign);    //after click sign button, change temp or result value's sign
document.getElementById('dat').addEventListener('click', clickDat);    //after click dat button, turn isDatClicked flag to true
document.getElementById('modulus').addEventListener('click', function(){operate('%')});    //Operate function handle arithmatic operation
document.getElementById('plus').addEventListener('click', function(){operate('+')});
document.getElementById('subtrate').addEventListener('click', function(){operate('-')});
document.getElementById('multiple').addEventListener('click', function(){operate('x')});
document.getElementById('divide').addEventListener('click', function(){operate('/')});
document.getElementById('equalTo').addEventListener('click', function(){operate('=')});

document.getElementById('1').addEventListener('click', function(){changeValue(1)});    //after click 0 to 9, temp or result value will change
document.getElementById('2').addEventListener('click', function(){changeValue(2)});
document.getElementById('3').addEventListener('click', function(){changeValue(3)});
document.getElementById('4').addEventListener('click', function(){changeValue(4)});
document.getElementById('5').addEventListener('click', function(){changeValue(5)});
document.getElementById('6').addEventListener('click', function(){changeValue(6)});
document.getElementById('7').addEventListener('click', function(){changeValue(7)});
document.getElementById('8').addEventListener('click', function(){changeValue(8)});
document.getElementById('9').addEventListener('click', function(){changeValue(9)});
document.getElementById('0').addEventListener('click', function(){changeValue(0)});

function clear(){
    resultValue = 0;
    tempValue = 0;
    showResult();
    isDisplayResult = true;
    isDatClicked = false;
    countDatDegree = 0;
}

function changeSign(){
    if(isDisplayResult){
        resultValue *= -1;
	showResult();
    }else{
        tempValue *= -1;
        showTemp();
    }
}

function operate(str){
    calculate();
    showResult();
    if(str == '='){
        isDisplayResult = true;
        operateSymbol = '';
    }else{
        operateSymbol = str;
        isDisplayResult = false;
        isDatClicked = false;
        countDatDegree = 0;
    }
}

function calculate(){
    switch(operateSymbol){
        case '+': resultValue += tempValue;break;
        case '-': resultValue -= tempValue;break;
	case 'x': resultValue *= tempValue;break;
        case '/': resultValue /= tempValue;break;
	case '%': resultValue %= tempValue;break;
        default:break;
    }
    tempValue = 0;
}

function clickDat(){
    isDatClicked = true;
}

function  showResult(){
    display.innerHTML = resultValue;
}

function showTemp(){
    display.innerHTML = tempValue;
    isDisplayResult = false;
}

function changeValue(number){
    if(isDisplayResult){
        if(isDatClicked){
	    countDatDegree++;
	    resultValue += Number(number)/Math.pow(10, countDatDegree);
            resultValue = (resultValue.toFixed(12)*Math.pow(10,12))/Math.pow(10,12);
        }else{
  	    resultValue = resultValue*10 + Number(number);
        }
        showResult();
    }else{
	if(isDatClicked){
	    countDatDegree++;
	    tempValue += Number(number)/Math.pow(10,countDatDegree);
            tempValue = (tempValue.toFixed(12)*Math.pow(10,12))/Math.pow(10,12);
	}else{
	    tempValue = tempValue*10 + Number(number);
	}
        showTemp();
    }
}
