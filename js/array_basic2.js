// array_basic2.js

let data = `[{"id":1,"first_name":"Row","last_name":"Illwell","email":"rillwell0@infoseek.co.jp","gender":"Female","salary":3945},
{"id":2,"first_name":"Eva","last_name":"Kenvin","email":"ekenvin1@qq.com","gender":"Female","salary":1385},
{"id":3,"first_name":"Grange","last_name":"Marklew","email":"gmarklew2@sbwire.com","gender":"Male","salary":3865},
{"id":4,"first_name":"Mikkel","last_name":"Itzkin","email":"mitzkin3@patch.com","gender":"Male","salary":1187},
{"id":5,"first_name":"Lydie","last_name":"Leibold","email":"lleibold4@wufoo.com","gender":"Female","salary":3136},
{"id":6,"first_name":"Reggie","last_name":"Haquin","email":"rhaquin5@deviantart.com","gender":"Female","salary":2152},
{"id":7,"first_name":"Jacob","last_name":"Vasentsov","email":"jvasentsov6@istockphoto.com","gender":"Male","salary":3446},
{"id":8,"first_name":"Dirk","last_name":"Chapelhow","email":"dchapelhow7@technorati.com","gender":"Male","salary":1024},
{"id":9,"first_name":"Lesley","last_name":"Kidman","email":"lkidman8@so-net.ne.jp","gender":"Male","salary":2898},
{"id":10,"first_name":"Anabal","last_name":"Simchenko","email":"asimchenko9@cafepress.com","gender":"Female","salary":3754},
{"id":11,"first_name":"Teddie","last_name":"Chandler","email":"tchandlera@netscape.com","gender":"Male","salary":2547},
{"id":12,"first_name":"Willi","last_name":"Burges","email":"wburgesb@uol.com.br","gender":"Non-binary","salary":3084},
{"id":13,"first_name":"Renell","last_name":"Gready","email":"rgreadyc@telegraph.co.uk","gender":"Female","salary":2232},
{"id":14,"first_name":"Porty","last_name":"Schuchmacher","email":"pschuchmacherd@mayoclinic.com","gender":"Male","salary":1433},
{"id":15,"first_name":"Cy","last_name":"Keech","email":"ckeeche@tmall.com","gender":"Male","salary":2087}]`;

let objAry = JSON.parse(data); //JSON.parse() : 문자열을 오브젝트로 변환
console.log(data);
console.log(objAry);
console.clear();

//salary가 3000 이상인 사람들을 filter로 걸러서 over3000 에 넣음
let over3000 = objAry.filter((val, idx) => {
    return val.salary >= 3000; //필터링 처리
}).map((val, idx) => { //A형태의 data를 B형태로 변환(타입변환)
    let obj = {};
    obj.name = `${val.last_name}, ${val.first_name}`; //value 의 lname, fname만 가지고 옴
    obj.sal = val.salary;
    //name + sal 항목만 가진 object type으로 바뀜
    return obj;
});

console.log(over3000);
console.clear();
// Female >> 급여 평균값을 기능
// let avg, sum, cnt;
// sum = 0;
// cnt = 0;
// objAry.filter(val => val.gender == 'Female')
//     .forEach(val => {
//         sum += val.salary;
//         cnt++;
//     });
// avg = sum / cnt;

// console.log(`여사원의 급여 평균 ${avg}`);

// ++ map 써서 하던거 다시 출력해보기 ++

// let sal = objAry.filter(val => {
//     return val.
// })


//forEach, map 사용해서 salary 만 출력
// let avg, sum;
// let fSal = objAry.filter(val => {
//     return val.gender == 'Female';
// }).map(val => {
//     let obj = {};
//     obj.salary = val.salary;
//     return obj;
// });

// console.log(fSal);

// sum = 0;
// let result = 0;
// fSal.forEach((val, idx) => {
//     for(let fields in val){
//         result += val[fields];
//     }
// });

// console.log(result);


//forEach와 push 사용
let sals = [];
objAry.forEach(val => {
    sals.push(val.salary);
});
console.log(sals);

//map 사용
let salaries = [];
salaries = objAry.map(val => {
    let obj = {};
    obj.sal = val.salary;
    return obj;
})

console.log(salaries);

//배열 요소에서 가장 큰 값을 반환하는 함수
let max = 0;
function getMaxValue(ary) {
    ary.forEach(val => {
        for(let fields in val){
            if(val[fields] > max){
                max = val[fields];
            }
        }
    })
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`);

function sortAscend(ary) {
    //오름차순 정렬하는 함수 -- 가능하면 집에가서 해보기,,,
    let newAry = [];

    return newAry;
}

// sortAscend(salaries);

console.clear();
//reduce 메소드
let pr = [1, 2, 3, 4];
result = pr.reduce(function(accum, curr, curIdx, ary){
    console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합 : ${accum + curr}`);
    return curr + accum;
}, 0);

console.log(`최종 결과 : ${result}`);

console.clear();
result = pr.reduce(function(accum, curr) {
    if(curr % 2 == 0) accum.push(curr); //짝수만 배열에 추가
    return accum;
}, []); // accum = [1], [1, 2], [1, 2, 3], [1, 2, 3, 4]

result = pr.map(val=>val);
result = pr.filter(val=>{
    if(val%2 == 0){
        return val;
    }
})
console.log(result);

console.clear();
//<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul> 형태로 만들기
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if(currIdx == 0){ //가장 첫 번째에는 <ul>태그 추가
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if(currIdx == ary.length-1){
        accum += '</ul>';
    }
    // console.log(accum);
    return accum; //return 값 : 다음의 누적 초기값으로 사용됨(없으면 undefined 나옴)
    //누적값을 계속 리턴해줌
}, '');
console.log(result);
document.write(result);

//배열 요소들에 대해 ~ max 값을 반환하는 function을 구성
result = [3, 2, 4, 1, 5].reduce((accum, curr) => { 
    if(accum > curr){ //accum이 curr보다 크면 accum을 리턴하고 curr보다 작으면 curr을 반환
       return accum; 
    } else{
        return curr;
    }
}, 0); //Number 객체의 ~ safe | 0 사용해도 됨(max값을 구하기 때문)

// console.log(Number.MIN_SAFE_INTEGER); //자바스크립트에서 정수로 쓸 수 있는 가장 안전한 상수값
console.log(result); //5출력

//배열 요소들에 대해 ~ min 값을 반환하는 function을 구성
result = [3, 2, 4, 1, 5].reduce((accum, curr) => { 
    if(accum > curr){ //accum이 curr보다 크면 accum을 리턴하고 curr보다 작으면 curr을 반환
       return curr; 
    } else{
        return accum;
    }
}, Number.MAX_SAFE_INTEGER); //Number 객체의 ~ safe 
console.log(result);

//배열 각 요소의 합을 구하기
result = [3, 2, 4, 1, 5].reduce((accum, curr)=>{
    return accum + curr;
}, 0);
console.log(result);

//배열 각 요소의 평균을 구하기

// result = [3, 2, 4, 1, 5, 7].reduce((accum, curr, currIdx, ary)=>{
//     accum += (curr / ary.length);
//     return accum;
// }, 0);

result = [3, 2, 4, 1, 5, 7].reduce((accum, curr, currIdx, ary)=>{
    if(currIdx == ary.length -1){ //마지막 인덱스의 경우
        return(accum + curr) / ary.length;
    }
    return accum + curr;
}, 0); 

console.log(result);
