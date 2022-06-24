// 2022-06-20 복습

// 1. 년, 월을 입력받아서 달력 만들기
function makeCalendar(y, m){
    calendar = new Date(y, m-1); //연도와 달을 입력받아서 날짜 반환, month는 -1 해줘야함
    //ex 2022년 6월 1일 달력만들기
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    let firstDay, lastDay;
    //firstDay- 첫 번째 날짜의 요일, lastDay - 마지막 날짜의 일수 필요
    firstDay = calendar.getDay(); //요일 반환(숫자로)
    ld = new Date(y, m, 0);
    lastDay = ld.getDate();
    console.log(firstDay); //3
    let str = '<table border = 1><tr>';
    for(let day of days){ //for~of days의 모든 요소를 가져옴
        //table 생성
        //요일 줄 만들기
        str += '<td>'+ day + '</td>'
    }
    str += '</tr>';
    //빈 공간 만들기~ 
    
    for(let i = 0; i<firstDay; i++){ //3개
        str += '<td></td>'
    }
    for(let i = 1; i<=lastDay; i++){
        if((firstDay + i - 1) % 7 == 0){
            str += '</tr><tr>';
        }
        str += '<td>'+ i + '</td>'
    }
    document.write(str);
}
res = new makeCalendar(2022, 6);

//array_basic.js
console.clear();

let arr = [];
arr[0] = 'Hello';
arr[1] = '100';
arr[2] = true;

delete arr[1]; //배열의 값을 delete : empty
console.log(arr.length);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.clear();
//확장 for
for(let val of arr){ //arr의 모든 value를 얻는 for문
    console.log(val);
}
//forEach
arr.forEach((val, idx)=>{
    console.log(`${idx} => ${val}`); //배열의 값이 undefined(empty)이면 제외하고 출력함
});
console.clear();
arr.push('Apple'); //idx 3에 'Apple' 삽입(가장 뒤쪽)
arr.unshift('Banana'); //idx 0에 'Banana'삽입(가장 앞쪽)
arr.pop(); //가장 뒤쪽부터 삭제
arr.shift(); //첫 번째부터 삭제
arr.splice(0, 1, 'Apple'); //추가, 수정, 삭제

arr.forEach((val, idx)=>{
    console.log(`${idx} => ${val}`);
});

console.clear();
//array_basic1.js
let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현'); //unshift = 제일 앞에 추가
names.splice(1, 0, '오지민'); 
// 1 = 배열을 추가할 index 위치, 0 = 배열에서 제거할 요소의 수, '요소' : 추가할 요소(생략시 제거만)
names.splice(2, 0, '김가윤', '박경아');
console.log(names);
console.clear();

//names = {'박소현', '오지민', '김가윤', '박경아', '이희수', '인은지'}
let newNames = [];
names.forEach((val, idx) => { //names의 모든 요소에 대해서
    if(idx % 2 == 0){ //짝수 index이면
        newNames.push(val); //val을 newnames에 push
        //idx 0, 2, 4만 출력
    }
});
console.log(newNames);
console.clear();

let mapAry = names.map(function(val, idx, arr){
    if(idx % 2 == 0)
    return val;
}); //undefined 값이 그대로 나옴..
console.log(mapAry); //['박소현', undefined, '김가윤', undefined, '이희수', undefined]

let filAry = mapAry.filter(function(val, idx){
    return val;
});
console.log(filAry); //undefined를 제거하고 나옴
//조건을 만족하는 값들만 새로운 배열 요소로 사용함
let resultAry = names.map((val, idx) => {
    if(idx % 2 == 0){
        return val;
    }
}).filter((val, idx) => {
    return val;
})
console.log(resultAry); //map + filter