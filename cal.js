function sumar (){  

let num1=document.getElementById('val1').value;
let num2=document.getElementById('val2').value ; 
let resultado; 
num1=parseFloat(num1); 
num2=parseFloat(num2);
resultado=num1+num2;
alert ("el resultado fue"+num1+"+"+num2+"="+resultado); 
} 
 
function restar (){  

    let num1=document.getElementById('val1').value;
    let num2=document.getElementById('val2').value ; 
    let resultado; 
   
    resultado=num1-num2;
    alert ("el resultado fue"+num1+"-"+num2+"="+resultado); 
    }  
     

    function multiplicar (){  

        let num1=document.getElementById('val1').value;
        let num2=document.getElementById('val2').value ; 
        let resultado; 
       
        resultado=num1*num2;
        alert ("el resultado fue"+num1+"*"+num2+"="+resultado); 
        }  


        function dividir (){  

            let num1=document.getElementById('val1').value;
            let num2=document.getElementById('val2').value ; 
            let resultado; 
          
           
           
            if (num2==0){ 
                alert("no puedes");
            } else { 
                resultado=num1/num2; 
                alert ("el resultado fue"+num1+"/"+num2+"="+resultado); 
            }
            
            } 
