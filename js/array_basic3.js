// array_basic3.js

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

let gender = prompt('Male of Female을 입력');
console.log(gender);
// console.log(objAry); //배열 array 마다 객체로 들어가있음

//표(table) 형태로 출력
let result = objAry.reduce(function(accum, curr, currIdx){
    if(currIdx == 0){
        accum += '<table border =1><tr>'
    }
    if(curr.gender == gender){
        accum += '<tr>';
        for(let fields in curr){
            accum += '<td>' + curr[fields] + '</td>';
        }
        accum += '</tr>';
    }
    if(currIdx == objAry.length - 1){
        accum += '</table>'
    }
    return accum;
}, '');

console.log(result);
document.write(result);

// 확인용
// let result1 = objAry.reduce(function(accum, curr, currIdx){
//     if(currIdx ==0){
//         accum += '<table border=1>'
//     }
//     if(curr.gender == gender){
//         accum+='<tr>';
//         for(let field in curr){
//             accum += `<td>${curr[field]}</td>`;
//         }
//         accum += '</tr>';
//     }
//     if(currIdx == objAry.length - 1){
//         accum += '</table>';
//     }
//     return accum;
// }, '');
