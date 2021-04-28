var numberClicked = false;

function add(char) {
    if (numberClicked == false) {
        if(isNaN(char) == true) {
          document.getElementById('display').value ='';   
        } else {
            document.getElementById('display').value = display.value + char;
        } 
    } else {
        document.getElementById('display').value = display.value + char;
    }
   
    if (isNaN(char) == true) {
        numberClicked = false;
    }  else {
        numberClicked = true;
     } 
}
function calculate() {
     if(numberClicked == false) {
       document.getElementById('result').value ='';  
     } else {
         var display = document.getElementById('display');
        var result = eval(display.value);
        document.getElementById('result').value = result; 
     }
     
}




function reset() {

    document.getElementById('display').value ='';
    document.getElementById('result').value ='';
}

