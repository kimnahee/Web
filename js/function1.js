//function1.js

function sum(n1, n2){
    return n1 + n2;
}

console.log(sum(10, 20));
console.log(sum('10', '20')); //문자열 ~ sum : 두 문자열을 연결(1020 출력)

function minus(v1, v2){
    return v1 - v2;
}

console.log(minus('20', '10')); //문자열을 숫자형으로 변환해서 처리해줌(자동 형 변환 지원/ 곱하기, 나누기도 ok)

function sumArr(arr){ 
    //배열 타입의 매개변수 ~ 배열에 있는 모든 값을 더해서 반환
    let total = 0;
    for(let number of numArr){
       total += number;
    }
    return total;
}

let numArr = [20, 27, 33, 19, 44];
let result = sumArr(numArr);
console.log('배열의 합 : ' + result);

//foreach : 배열 전용 메소드
//메소드의 매개값으로 함수가 들어올 수 있음 | 콜백함수
numArr.forEach(function () {
    console.log('hi'); 
}); 
//foreach ~ numArr 배열의 각 인자에 대해 함수를 실행하라는 의미
//배열의 숫자가 5개이므로 'hi'를 5번 출력

result = 0;
numArr.forEach(function(val, idx, arr){
    //console.log(val, idx, arr);
    if(val % 2 != 0){
        result = result + val;
    }
})

console.log('홀수 배열의 합 : ' + result);

result = 0;
numArr.forEach(function(val, idx, arr){
    if(val % 2 == 0){
        result += val;
    }
})

console.log('짝수 배열의 합 : ' + result);