//string_literal.js

let str = 'Hello'; //'' = ""
str = `Hello`; //문자열(기능 추가) 표현 방식

let person = {
    name: "hong",
    age: 20,
    showInfo: function(){
        // = return '이름은 ' + this.name + ', 나이는 ' + this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`; //${} : 표현식
    }
}
console.log(person.showInfo());
console.log(`나의 이름은 ${person.name}`); //변수와 문자열을 같이 사용할 수 있다.
console.log(`${person.age >= 20 ? '성인' : '청소년'}`);

let strings = 'This\nis\na\nboy'; // ''를 사용하면 줄바꿈에 \n 사용, ``를 사용하면 그대로 입력
strings = `This
is
a
boy`;
console.log(strings);

let jm = '950101-1234567';
//6번 인덱스에 하이픈이 있으면 인덱스 +1 / 하이픈이 없으면 그 자리의 숫자를 확인
//switch~case
// --(1)
function checkGender(num){
    if(jm.charAt(6) == '-'){
        if(jm.charAt(7) == 1 || jm.charAt(7) == 3){
            return '남자';
        } else if(jm.charAt(7) == 2 || jm.charAt(7) == 4){
            return '여자';
        }
    } else{
        if(jm.charAt(6) == 1 || jm.charAt(6) == 3){
            return '남자';
        } else if(jm.charAt(6) == 2 || jm.charAt(6) == 4){
            return '여자';
        }
    }
}

// --(2)
// function checkGender(num){
//     let jnum = num.replace('-', ''); // -을 '' 로 대체
//     jnum = num.substr(-7, 1); //1,2 / 3,4 중 하나 가져옴
//     console.log(jnum);

//     switch(jnum){
//         case '1':
//         case '3':
//             return '남자';
//         case '2':
//         case '4':
//             return '여자';
//     }
// }

console.log(jm.charAt(6));
let result = checkGender(jm);
console.log(result);