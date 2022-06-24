//function3.js

function sumNumber() {
    console.log(arguments); //매개값을 보여줌(arguments) | 함수가 호출되면 arguments 객체를 보여줌
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        //arguments.length >> 매개값의 개수만큼 처리하겠다
        result += arguments[i];
    }
    return result;
}


sumNumber(1, 2, 3, 4, 5);
// sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

//나머지 파라미터
//... : 여러가지 개수의 매개값을 받아오겠다(가변적으로 처리되도록) & 배열
function sumParam(...args) {
    {
        let result = 0;
        //args의 개수만큼 foreach문 실행
        args.forEach(val => {
            result += val;
        }); //callback : 배열 값이 정해지면 함수가 실행되므로
        return result;
    }
}

console.log(sumParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//커링(curing)함수
//매개값을 하나만 받아오는 함수

//매개변수가 2개인 orderSet 함수
function orderSet(burger, beverage) {
    console.log('버거 : ' + burger + ', 음료 : ' + beverage);
}

orderSet('치즈버거', '콜라');

function orderSet_curring(burger) {
    //return 값을 함수로
    return function (beverage) {
        console.log('버거 : ' + burger + ', 음료 : ' + beverage);
    }
}

//orderSet_curring('치즈버거') : 함수 정의문
//orderSet_curring('치즈버거')() : 함수 호출

//매개값은 1개임
// orderSet_curring('치즈버거')('콜라');

let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); //()함수실행
beverageFnc('환타'); //()함수실행

function orderSet(burger) {
    return function orderBeverage(beverage) {
        return function orderSide(side) {
            return function orderKetchup(yn) {
                return function orderChicken(count) {
                    console.log("세트 : " + burger + ', ' + beverage + ', ' + side + ', ' + beverage + ', ' + '조각치킨 : ' + count + '개');
                }
            }
        }
    }
}

// 커링 : 책 참고하기 --

//펼침 연산자 ...
let args = [1, 3, 5];
function anyFnc(...args){

}
let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2]; //args를 붙여 반환 >> 두 배열요소를 합쳐 새로운 배열 생성됨
console.log(otherArgs);
console.log(args.concat(another)); //concat : 연결(1,3,5에 4,5,6 합쳐줌 | 펼침 연산자와 동일한 결과

let obj1 = {name: 'Hong', age: 20, weight: 64.7}
let newObj = {name: 'Choi', age: 15, height: 165.5};
let obj3 = {sno: '12345'};

//똑같은 값(name, age)은 바뀌지 않고 없었던 속성 height, weight가 추가됨 >> merge
let obj2 = { ...newObj, ...obj1, ...obj3}; //new Object(); | 펼침 연산자로 newobj와 obj1을 연결

console.log(obj1, obj2);

//complex object
let comObj = {
    sno: '22-010101',
    sname: 'Hong',
    score: 80,
    hobby: ['reading', 'eating'],
    pet: [{cname:'야옹이', age: 2}, {dname: '멍멍이', age: 3}]
}

comObj.sname; //이름
comObj.hobby[0]; //hobby의 첫번째 값(reading)
comObj.pet[0]; //pet의 첫번째 값
comObj.pet[0].age; //2
console.log(comObj.pet[1].dname); //멍멍이

console.clear();

//05. 나머지 파라미터의 활용
//(1)

function restparams(...args){
    console.log(args);
}

restparams(1, 2, 3, 4);

//(2) 나머지 파라미터는 배열에 담아져서 넘어감
const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}

rest2(1, 2, 3, 4); //[3,4]는 배열로 args로
rest2(1, 2);
rest2(1);

//(3) 나머지 파라미터로 합계 구하기
function sum(a, b, ...args){
    let result = 0;
    if(a != undefined){ //a가 undefined가 아니면
        result = a; //result = a
    } else{ //a가 undefined이면
        return 0; //0반환
    }
    if(b != undefined){
        result += b;
    }
    //화살표 함수로도 변경해보기
    args.forEach(function(args){ 
        result+=args;
    })
    return result;
}

console.log(sum(1,2,3,4));
console.log(sum(1,2));
console.log(sum(1));

//(3-1)
const sum1 = (a, b, ...args) => {
    let result = 0;
    if(a != undefined){
        result = a;
    } else{
        return 0;
    }
    if(b!=undefined){
        result+=b;
    }
    result += args.length>0 ? args.reduce((subsum, arg)=>subsum+=arg) : 0;
    return result;
}

console.log(sum1(1,2,3,4));
console.log(sum1(1,2));
console.log(sum1(1));


//06. 화살표 함수 기초
//(1)나머지 파라미터로 곱하기 구하기 예
let multiply = (a, b, ...args) => {
    let result = a * b;
    for(let i=0; i<multiply.length; i++){
        result *= args[i];
    }
    return result;
}

console.log(multiply(1, 2, 3, 4));

//07. 고차함수의 이해
const arr = [1, 2, 3, 4, 5];
// const arr2x = []; //배열 값*2
// for(let i=0; i<arr.length; i++){
//     arr2x.push(arr[i]*2);
// }

const arr2x = arr.map(item => item*2);
console.log(arr2x);

//--** 교재 85쪽 : hoisting 의 개념 **--
var a = 1;
var b = 5;

function outerFunc(){
    function innerFunc(){
        a=b;
    }
    console.log(a);
    a=3;
    b=4;
    innerFunc();
    console.log(a);
    var b =2; //로컬변수 b
    console.log(b); //2
}
outerFunc();
console.log(b); //5
