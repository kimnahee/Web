//varialbe2.js

//배열 선언
let arr = new Array();
arr[0] = 10;

//배열 선언2
arr = [20, 30, 15, 27]; //배열 선언 & 초기화 | 자바스크립트에서는 배열의 크기가 유동적임
arr[arr.length] = 50; //인덱스 4번에 50 추가(배열에 새로운 값 추가)
arr[arr.length] = 60;
arr[arr.length] = 70;

arr[10] = 100; //10번째에 100을 넣고 빈 공간은 empty * n

console.log(arr);
console.log(typeof arr[7]); //empty : undefined 상태

//반복문
for(let i=0; i<arr.length; i++){
    console.log(i + '번째 : ' + arr[i]);
}

//다른 type도 추가는 할 수 있음(권장x)
arr = ['사과', '바나나', '고구마', '수박', 50];

console.clear(); //이전 로그를 clear

document.write('<ul>') //tag 사용가능
for(let val of arr){ 
    console.log(val); //콘솔에 인덱스값 없이 값만 출력
    document.write('<li>' + val + '</li>'); //document에 list로 출력
}
document.write('</ul>')

//배열에 복합적 object를 입력
arr=[
    {name: '홍길동', age: 20, phone: '010-1234-5678'},
    {name: '김민수', age: 24, phone: '010-4312-8768'},
    {name: '박우용', age: 27, phone: '010-7868-1211'},
    {name: '최선식', age: 30, phone: '010-8788-5013'}
]

// document.write('<ul>')
// for(let person of arr){ //arr에서 person을 하나씩 읽어들임
//     document.write('<li>'+ person['name'] + ', ' + person['phone'] +'</li>');
// }
// document.write('</ul>')

let str = '';
str += '<ul>';
for(let person of arr){ //배열의 경우 반복문 for~of 사용
    str += '<li> 이름 : ' + person['name'] + ', 나이 : '+ person['age'] + ', 연락처 : ' + person['phone'] + '</li>';
}
str += '</ul>';

console.log(str);
document.write(str);

// str = '<table border=1>';

// str += '<table>'
// str = '<table border=1>';
// for(let person of arr){
//     str += '<tr><td>' + person.name + '</td><td>' + person.age + '</td><td>' + person.phone +'</td></tr>'
// }
// str += '</table>'

// console.log(str);
// document.write(str);


str += '<table>'
str = '<table border=1>'
for(let person of arr){
    str+='<tr>'
        for(let field in person){
            str += '<td>' + person[field] + '</td>';
        }
    str+='</tr>'
}
str += '</table>'

console.log(str);
document.write(str);


//상수 필드
const v1 = 'hello';
//v1 = 'new';

//원시 데이터 타입 / 참조 데이터 타입
//1(원시)
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);

//2(참조)
let o1 = {name: 'one'};
let o2 = o1; //o1이 참조하는 주소값을 o2에 대입( >> 둘다 name을 참조함)
o2.name = 'two'; //o2의 name 속성을 바꿔줌 >> o1이 참조하는 값도 변경됨
o1.name = 'three';
console.log(o1, o2);


const obj = {
    sno: '22-12345',
    sname: 'Hong'
}

// obj =''; // obj에 새로운 값을 할당하면 error | 상수는 값 변경 불가능
obj.sno = '22-22222'; //obj 상수 변수가 참조하고 있는 속성의 값을 변경하는 것은 가능

//변수 선언 : var 과 let
//var : 변수의 scope / 전역변수(script 내부의 모든 변수), 지역변수

let var1 = 'hello';
{   //let : 블록이 끝나면 변수의 값이 사라짐(블록 레벨/var는 x)
    //지역변수처럼 사용하고 블록을 나가면 없어짐
    let var1 = 'new hello';
    console.log(var1);
}

function localFnc(){
    let var2 = 'nice'; //지역변수(local variable) / 함수 안에서만 유효한 값을 가지고 함수가 종료되면 사라짐
    console.log(var2);
    console.log(var1)
}
localFnc(); //함수 호출

// console.log(var2); >> error
console.log(var1)

//가능하면 let을 사용하는 것이 좋음(var은 중복되는 변수가 있어도 error를 띄우지 않기 때문에)
console.log(l1);
var l1 = 'helloo';
var l1 = 'helloo';

// for(var num of arr){
//     console.log(num);
// }

// console.log(num); var : 전역변수처럼 >> 함수를 벗어나도 값이 유지되는데 

// for(let num of arr){
//     console.log(num);
// }

// console.log(num); let은 함수를 벗어나면 값이 삭제됨