//function2.js

//함수 정의문
function sumArr(arr){ 
    //Arr:매개변수(parameter)-어떤 값이 들어올지 알수가 x **매개값과 구분필수, type 상관없음
    let result = 0;
    for(let i=0; i<arr.length;i++){
        result += arr[i];
    }
    return result;
}

//const sumArr = function(arr) {} 과 동일하기 때문에 console.log로 확인해도
console.log(sumArr);
//일반변수처럼 콘솔로그로 확인해도 함수 구문의 정의가 나옴(함수정의문 > 함수표현식 처리)

let array = [1, 2, 3, 4, 5]; //*매개값(실제 들어가는 값)
sumArr(array); //실행문 호출

let arrNum = [1, 2, 3];
sumArr(arrNum);

//함수 표현식
//const : 상수
const sum = function(num1, num2) { //두 숫자를 더해서 반환
    if(!num1){ //undefined = false를 의미(null, 0, '' 포함)
        //num1에 값이 없는 경우에는
        num1 = 0; //num1을 0으로
    }
    //삼항연산자(num2가 undefined 이면 0 대입)
    num2 = num2 == undefined ? 0 : num2;
    return num1 + num2;
}

console.log(sum());

const sum2 = sum; //sum이 가지는 함수정의문을 sum2도 참조하겠다
console.log(sum2(10, 20));

//함수 표현식

//화살표함수
//매개변수가 하나면 () 생략가능, 실행문이 한줄이면 {} block 생략가능 | 간단하게 표현할 수 있음
const sayHello = name => 'Hello ' + name;

// 동일한 함수
// const sayHello = function(name){
//     return 'Hello ' + name;
// }

//메소드의 매개값이 함수일 때 이를 콜백함수라고 부름
console.log(sayHello('홍길동'));

let arr = ['홍길동', '김영수', '최민식'];
//사용하지 않으면 인덱스, 배열값은 생략ok
arr.forEach((val, idx, ary) => console.log(sayHello(val)));


//foreach, 화살표 함수를 사용해서 만들어보기
arrNumber = [29, 34, 12, 55, 29, 42];

//1. 배열의 각 요소 중에 짝수의 값만 더하는 sumEven(args)
function sumEven(array){
    let result = 0;
    array.forEach(val => {
        if(val % 2 == 0) 
            result += val;
    })
    return result;
}
//2. 배열의 각 요소 중에 홀수 번째 요소의 합만 더하는 sumOdd(args)
function sumOdd(array){
    let result = 0;
    array.forEach((val, idx) => {
       if(idx % 2 == 0){
           result += val;
       }
    })
    return result;
}

console.log(sumEven(arrNumber));
console.log(sumOdd(arrNumber));


