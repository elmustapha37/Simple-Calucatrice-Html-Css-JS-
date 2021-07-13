//var seven = document.getElementById("seven").value;
//var aff = document.getElementById("aff");
var Clr = document.getElementById("Clear");
/*function nbr(n){
    document.getElementById("aff").value += n;
    console.log(n);
}*/


var exp = '', number , opertor, equal , decimal , allloSR = true;
var textView = document.getElementById("textView");
function insertNbr(nbr){
    if(equal){
        exp=nbr;
        textView.value=exp;
        number=true;
        equal=false;
    }
    else{
        exp = textView.value+nbr;
        textView.value=exp;
        number=true;
    }
    if(opertor){
        decimal=false;
    }
}
function insertOp(op){
    textView.value = exp + op;
    opertor = true;
    equal = false;
    allloSR = false;
}
function insertDec(){
    if(number && !decimal){
        textView.value = exp + '.';
        decimal = true;
        opertor = false;
    }
}
function equalToNbr(){
    if(exp){
        exp=eval(exp);
        textView.value=exp;
        allloSR = true;
        equal = true;
        decimal = false;
        number=false;
    }
}
function backNbr(){
    exp=textView.value;
    exp=exp.substring(0,exp.length-1);
    textView.value=exp;
}

function sqrtNbr(){
    exp = Math.sqrt(exp);
    textView.value=exp;
}
function powNbr(){
    exp = Math.pow(exp,2);
    textView.value=exp;
}

function ClcNbr(o){
    if(o =='S'){
        exp = Math.sqrt(exp);
        textView.value=exp;
    }
    else if(o == 'P'){
        exp *= exp;
        textView.value=exp;
    }
}

Clr.addEventListener("click",function clear(){
    textView.value = null;
});



