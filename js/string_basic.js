//string_basic.js

//모르는거 있으면 mdn 사이트 가서 찾아보기
//p154
let str = 'Hello'; //문자열(객체x)
let str1 = new String('Hello'); //문자열 객체

console.log(str == str1); //값만 비교하겠다 - true
console.log(str === str1); //타입&값을 비교하겠다 - false

console.log((123).valueOf()); //valueof : 객체를 기본데이터 타입으로 변환
console.log('123');

let num = new Number(123); //Number object
let num1 = 123; //number type
console.log(num.valueOf() === num1) //객체 >> 기본데이터타입으로 변환

//원시 타입 : string, number, boolean, undefined
//객체 타입 : 함수, object( {name: ?, age: ?}), 배열, null
//console(typeof ~~) 로 확인가능

//"Hello".substring(0, 3);
console.log(" Hello ".trim()); //좌우 공백 제거 후 출력
console.log(" Hello ".trimStart()); //좌 공백 제거 후 출력
console.log("This is the only story".slice(10, 15)); //10번째 ~ 14번째 반환

console.clear();

//교재 p.160 => 문자열 자르기
//slice
const string1 = 'This is the only one story';
console.log(string1.slice(8, 11)); //the
console.log(string1.slice(-8, 11)); //시작 인덱스 : 음수이면 빈 문자열을 반환
console.log(string1.slice(11, 8)); //시작 인덱스가 끝 인덱스보다 크면 빈 문자열을 반환
console.log(string1.slice(8)); //파라미터 1개 : 시작 인덱스(8부터 끝까지 반환 : 끝 인덱스는 문자열 길이값)
console.log(string1.slice(30)); //빈 문자열
console.log(string1.slice(0, -10)); //끝 인덱스에 마이너스 값 : 문자열 + 마이너스값이 끝 인덱스 값 | this is the only
console.log(string1.slice(8, 100)); //the only one story
console.log(string1.slice()); 

//substring
console.log(string1.substring(8, 11));
console.log(string1.substring(11, 8));
console.log(string1.substring(11, -8));
console.log(string1.substring(10, 4));
console.log(string1.substring(30));
console.log(string1.substring(0, -10));
console.log(string1.substring(8, 100));
console.log(string1.substring());

//substr
console.log(string1.substr(8, 11));
console.log(string1.substr(11, 8));
console.log(string1.substr(11, -8));
console.log(string1.substr(-10, 8));
console.log(string1.substr(10));
console.log(string1.substr(0, -10));
console.log(string1.substr(8, 100));
console.log(string1.substr());
console.clear();

//04. 문자열이 아닌 데이터를 문자열로 변환하기
//toString()

const number1 = 123;
const number2 = 123.45;
const bool = true;
const string = '문자열타입';
const arr = [1, 2, 'a', 'b', 3];
const obj = { key: 'data', value: 15 };

console.log(number1.toString());
console.log(number2.toString());
console.log(bool.toString());
console.log(string.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

console.clear();
//05. 문자열 찾기
//1. 찾은 문자열의 시작 위치 얻기
const string2 = 'good morning, good afternoon, good evening, and good night';
console.log(string2.indexOf('even'));
console.log(string2.lastIndexOf('good'));
console.log(string2.lastIndexOf('dawn'));
//문자열 찾기 시작 위치 지정 >> 15번째 이후부터 찾기
console.log(string2.indexOf('good', 15));
//특정 위치의 문자 1개를 얻기
console.log(string2.charAt(30));
console.log(string2.charAt(100));
//특정 문자열이 포함되었는지 알기
//includes()
console.log(string2.includes('even'));//true
console.log(string2.includes('dawn'));//false
console.log(string2.includes('EVEN'));//false : 대소문자 구분함
//대소문자 구분 없이 문자열 위치 찾기
const string3 = 'good morning, good afternoon, GOOD EVENING, AND GOOD NIGHT';
console.log(string3.toLowerCase().indexOf('good'));
console.log(string3.toUpperCase().indexOf('GOOD'));
console.log(string3.search('GOOD'));
console.log(string3.search(/GOOD/i)); //대소문자 구분 x | 정규 표현식 사용

//match() + 정규표현식
console.clear();
const string4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
console.log(string4.match(/good\s\w+/gi));
console.log(string4.match(/bad\s\w+/gi));
console.log(string4.match(/none\s\w+/gi));
console.log(string4.match('good'));

// let ary = [];
// let oby = {};
// let reg = /good/; //new RegExp();   
// let regStr = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
// console.log(regStr.replace(/good\s/gi, 'bad ')); //g : 문장 내에 있는 모든 단어를 찾아 변경(global), i : 대소문자 구분 x

console.clear();
//06.문자열 바꾸기와 대소문자 변환
//문자열 1개 바꾸기 - replace()
const string5 = 'GOOD MORNING, GOOD AFTERNOON, good evening, and good night';
console.log(string5.replace('good', 'bad'));
//대소문자 구분없이 문자열 바꾸기
console.log(string5.toLowerCase().replace('good', 'bad'));

// ** 정규 표현식 사용
console.log(string5.replace(/good/i, 'bad'));
console.log(string5.replace(/good/gi, 'bad'));

//07.문자열 합치기
//concat()
const str2 = '문자열1';
const str3 = '문자열2';
console.log(str2.concat(str3));

console.log(''.concat(str2, str3));

let strarr = ['good', ' ', 'morning', '!'];
console.log(''.concat(...strarr));










