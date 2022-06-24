//array_basic2.js

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

//salary가 3000 이상인 사람들의 name, salary를 출력하는 over3000 (filter 사용)
let over3000 = objAry.filter((val, idx)=>{
    return val.salary >= 3000;
}).map((val, idx)=>{
    let obj = {}; //새로 저장할 object
    obj.name = `${val.last_name} + ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);
console.clear();

//여사원의 급여 평균값을 나타내는 함수
// let sum, avg, count;
// let salary = objAry.filter((val, idx)=>{
//     return val.gender == 'Female';
// }).map((val, idx)=>{
//     let salary = {};
//     salary.sal = val.salary;
//     return salary;
// }); //gender = female 인 사원들의 월급을 객체 형식으로 출력

// sum = 0;
// count = 0;
// salary.forEach(val => {
//     for(let fields in val){
//         sum += val[fields];
//         count++;
//     }
// });

// console.log(sum);
// avg = sum/count;
// console.log(`여사원의 급여 평균 : ${avg}`);

let avg, sum, count;
sum = 0;
count = 0;
objAry.filter(val => val.gender == 'Female')
    .forEach(val => { //filter로 거른 모든 항목의 배열.을 foreach한것
        sum += val.salary;
        count++;
    });
avg = sum / count;
console.log(`여사원의 급여 평균 : ${avg}`);

//오름차순 정렬하는 함수
function sortAscend(ary) {
    //오름차순 정렬하는 함수 -- 가능하면 집에가서 해보기,,,
    let newAry = [];

    return newAry;
}
// sortAscend(salaries);

console.clear();
//reduce 메소드
let pr = [1, 2, 3, 4];
result = pr.reduce(function(accum, curr){
    console.log(`누적 ${accum}, current 값 ${curr} => 두 수의 합 : ${accum + curr}`);
    return curr + accum;
}, 0);
console.log(`최종 결과 : ${result}`);
console.clear();
result = pr.reduce(function(accum, curr){
    if(curr % 2 == 0) accum.push(curr);
    return accum;
}, []);

result = pr.map(val=>val);
result = pr.filter(val => {
    if (val % 2 == 0){
        return val;
    }
})
console.log(result);