$(document).ready(function() {
//Global Variables
var currentNumber = "";
var num1, num2;
var operation;
var result;


//Functions
function numCapture () {
  $('#currentNumber').val(currentNumber);
}

function resultCapture () {
  $('#currentNumber').val(result.toFixed(2));
}
//Record Numbers
  $("button[id=btn-1]").click(function(){
    currentNumber = currentNumber + '1';
    numCapture(); 
  });

  $("button[id=btn-2]").click(function(){
    currentNumber = currentNumber + '2';
    numCapture(); 
  });
    
  $("button[id=btn-3]").click(function(){
    currentNumber = currentNumber + '3';
    numCapture(); 
  });
  $("button[id=btn-4]").click(function(){
    currentNumber = currentNumber + '4';
    numCapture(); 
  });
  $("button[id=btn-5]").click(function(){
    currentNumber = currentNumber + '5';
    numCapture(); 
  });
  $("button[id=btn-6]").click(function(){
    currentNumber = currentNumber + '6';
    numCapture(); 
  });
  $("button[id=btn-7]").click(function(){
    currentNumber = currentNumber + '7';
    numCapture(); 
  });
  $("button[id=btn-8]").click(function(){
    currentNumber = currentNumber + '8';
    numCapture(); 
  });
  $("button[id=btn-9]").click(function(){
    currentNumber = currentNumber + '9';
    numCapture(); 
  });
  $("button[id=btn-0]").click(function(){
    if (currentNumber != '') {
      currentNumber = currentNumber + '0';
      numCapture(); 
    };
  });
      
  $("button[id=btn-point]").click(function(){
    if(currentNumber.indexOf('.') === -1){
      if (currentNumber != '') {
        currentNumber = currentNumber + '.';
        numCapture(); 
      }else{
        currentNumber = '0.'
        numCapture(); 
      };
      
    }  
  });

//restart calculator.
  $("button[id=btn-ac]").click(function(){
    currentNumber = '';
    num1 = '';
    num2 = '';
    operation = '';
    numCapture(); 
  });

//delete current number.
  $("button[id=btn-ce]").click(function(){
    currentNumber = '';
    numCapture();
  });

//Select current operation.
  $("button[id=btn-plus]").click(function(){
    if (operation == '') {
      currentNumber = parseFloat(currentNumber);
      num1 = currentNumber;
      operation = 'add';
      currentNumber = '';
    }else{
      ejecutar();
      num1 = currentNumber;
      operation = 'add';
      currentNumber = '';
    };
      
  });

  $("button[id=btn-minus]").click(function(){
    if (operation == '') {
      currentNumber = parseFloat(currentNumber);
      num1 = currentNumber;
      operation = 'subtract';
      currentNumber = '';
      
    } else{
      ejecutar();
      num1 = currentNumber;
      operation = 'subtract';
      currentNumber = '';
    };
  });

  $("button[id=btn-x]").click(function(){
    if (operation == '') {
      currentNumber = parseFloat(currentNumber);
      num1 = currentNumber;
      operation = 'multiply';
      currentNumber = '';
    } else{
      ejecutar();
      num1 = currentNumber;
      operation = 'multiply';
      currentNumber = '';
    };
      
  });

  $("button[id=btn-division]").click(function(){
    if (operation == '') {
      currentNumber = parseFloat(currentNumber);
      num1 = currentNumber;
      operation = 'divide';
      currentNumber = '';
    } else{
      ejecutar();
      num1 = currentNumber;
      operation = 'divide';
      currentNumber = '';
    };
      
  });

  $("button[id=btn-percentage]").click(function(){
    if (operation == '') {
      currentNumber = parseFloat(currentNumber);
      num1 = currentNumber;
      operation = 'percentage';
      currentNumber = '';
    } else{
      ejecutar();
      num1 = currentNumber;
      operation = 'percentage';
      currentNumber = '';
    };
      
  });

//Calculate the result of the operation
  function ejecutar(){ 
    currentNumber = parseFloat(currentNumber);
    num2 = currentNumber;
    if (operation == 'add') {
      add();  
    }else if(operation == 'subtract'){
      subtract();
    }else if(operation == 'divide'){
      divide();
    }else if(operation == 'multiply'){
      multiply();
    }else if(operation == 'percentage'){
      percentage();
    };
  };

  $("button[id=btn-equal]").click(ejecutar);

  function add () {
    currentNumber = num1 + num2;
    currentNumber = currentNumber.toFixed(2);
    numCapture();
  };

  function subtract () {
    currentNumber = num1 - num2;
    currentNumber = currentNumber.toFixed(2);
    numCapture();
  };


  function multiply () {
    currentNumber = num1 * num2;
    currentNumber = currentNumber.toFixed(2);
    numCapture();
  };


  function divide () {
    currentNumber = num1 / num2;
    currentNumber = currentNumber.toFixed(2);
    numCapture();
  };

  function percentage () {
    currentNumber = (num1 / 100)*num2;
    currentNumber = currentNumber.toFixed(2);
    numCapture();
  };
});
