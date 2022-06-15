//function.js
//java의 메소드와 비슷함

// public int sum(int a, int b)와 같은 의미
function sum(number1, number2){
    let result = number1 + number2;
    console.log(result); //undefined
    return result;
}

console.log(sum(10,20));

function makeTd(val){ //val 값을 받아 td를 만든 후 반환
    return '<td>' + val + '</td>';
}

function makeTr(val){
    return '<tr>' + val + '</tr>';
}

let values = ['Hong','Hwang','Choi'];

let str ='<table border = 1>';
for(let val of values){
    let td = makeTd(val)
    str += makeTr(td);
}
str += '</table>'

document.write(str);