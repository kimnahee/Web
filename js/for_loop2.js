//for_loop2.js

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

let ary = JSON.parse(data); //JSON.parse() : 문자열을 오브젝트로 변환
console.log(ary);

//forEach
ary.forEach(elem => {
    if(elem.gender == 'Female')
    console.log(elem);
});

// 조건을 만족하는 새로운 배열 만들기(filter 사용)
//gender 값이 'Female' 인 조건을 만족하는
let femaleAry = ary.filter(val => {
    return val.gender == 'Female';
})
console.log(femaleAry);

//maping : A => A'의 모양으로 만들어준다
let newCompany = ary.map(elem => {
    let newElem = {}; //A'
    newElem.nId = elem.id;
    newElem.name = `${elem.first_name} ${elem.last_name}`;
    newElem.salary = elem.salary * 1.5; 
    newElem.isNew = elem.salary > 3000 ? false : true; //salary가 3000보다 크면 false, 작으면 true
    return newElem;
})
.filter(elem => elem.isNew); //true값인 요소만 새로운 배열에 담아주겠다
// .forEach(elem => console.log(elem));

console.log(newCompany);

//reduce로 급여의 합계 구하기

let result = newCompany.reduce((accum, curr) => {
    accum += curr.salary;
    return accum;
}, 0);

console.log(`급여의 합계 : ${result}`);