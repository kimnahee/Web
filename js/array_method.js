//array_method.js

//some, every, find method

//filter, map : 조건에 만족하는 요소를 찾아 배열에 반환
//find : 조건에 만족하는 요소를 찾아줌(1건)
//every : 모든 요소가 조건을 만족하면 true 반환, 아니면 false 반환
//some : 조건을 만족하는 요소가 하나라도 있으면 true, 아니면 false
//sort : 정렬
//split : 구분자
//join : 구분자 사용 = 배열 합치기(문자열로)

let idx = "This is a story".indexOf("is");
idx = [1, 2, 3, 4, 5].indexOf(8); //찾고자 하는 문자열이 없으면 -1 반환

let str =`All samples shall be properly labeled in order to ensure that the results can be traced back to the location from which it was collected.`
let strAry = str.split(' '); //공백을 기준으로 문장을 나눔(반환타입이 배열)
idx = strAry.indexOf('back');
//내가 찾고자 하는 값이 있을 때 indexof 사용
let names = ['박은지', '윤정은', '박지혜', '김나희'];
//찾고자 하는 값이 없으면 -1 반환함
idx = names.indexOf('김나희s');

let result = names.find(function (elem, idx, ary) {
    return elem == '김나희';
}); //매개값 : 함수
// 첫번째(elem): 요소의 값 출력 | 두번째(idx): 인덱스 값 | 세번째(ary): 배열

result = [6, 4, 3, 21, 14].find(elem => { //배열 안에 든 값이 어떤 값인지 모를때 사용
    return elem > 100; //find : 찾는값이 없으면 undefined, findIndex : -1
});
result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
    // console.log(elem, idx, ary); //21 을 찾은 뒤에 종료됨(14 x)
    return elem > 20; //some : 만족하는 요소(값)가 하나라도 있으면 true 반환
})

result = [6, 4, 3, 21, 14].every((elem, idx, ary)=>{
    console.log(elem, idx, ary);
    return elem % 2 == 0;
})
console.log(result); //배열에 있는 문자열 1개를 가지고옴 >> result에 넣어서 출력

//=======================================================================================================

let tempAry = [];
for(let i = 0; i< 5; i++){
    //임의의 값을 만들어주는 math 객체 사용
    let temp = parseInt(Math.random() * 10) + 1; //math.random() : 0<= x < 1범위의 랜덤 난수 출력
    console.log(temp);
    tempAry.push(temp);
}

console.clear();
console.log(tempAry);

// 1.tempAry 배열의 값이 다 짝수인지 확인 : every 사용

result = tempAry.every((elem, idx, ary) => {
    return elem % 2 == 0;
})
console.log(result);

// 2.tempAry 배열의 값 중에서 3의 배수가 존재하는지 확인 : some
result = tempAry.some(elem =>{
    return elem % 3 == 0;
})
console.log(result);

// 3. 5보다 큰 값이 있으면 그 값을 반환 : find(1개 반환), **filter(여러개 반환) 사용
result = tempAry.filter(elem => {
    return elem > 5;
});
console.log(result);
console.clear();

//=======================================================================================================

// sort
//return -1(-) : 오름차순, return 1(+) : 내림차순
result =  [6, 4, 3, 21, 14].sort(function(a, b){
    return a-b; //음의 값 : 오름차순 정렬
});
console.log(result);

let objAry = [
    {
        name : '홍길동', 
        age : 18
    }, 
    {
        name : '김민수', 
        age : 20
    }, 
    {
        name : '박세민', 
        age : 19
    }];

console.clear();
console.log('홍'<'박'); // a b c
result = objAry.sort(function(a, b){
    // if(a.name < b.name){
    //     return -1;
    // } else {
    //     return 1;
    // }
    // return a.name<b.name ? -10 : 10; //이름 오름차순
    return a.age < b.age ? -1 : 1; //나이 오름차순
});

result = ['홍길동', '백민규', '김상우'].join('-'); // - 로 연결
// result = result.join(); //구분자를 비워두면 ,(자동)

// = > 권소정, 김가윤', 김하은', 유선희' 로 연결하기
names = '권소정, 김하은, 유선희, 김가윤';
nameAry = names.split(', '); //이름 배열 생성 | 공백:우선순위가 높음(*주의)
// sort 로 정렬
newnames = nameAry.sort(function(a, b){
    return a > b ? 1 : -1;
})

result = newnames.join(', ')
// join으로 연결
console.log(result);

//=======================================================================================================

strAry = 'Littering'.split(''); //문자를 하나씩 배열 형식으로 잘라옴
let cnt = 0;
strAry.forEach((elem) => {
    cnt += elem == 't' ? 1 : 0; //strAry의 모든 요소 elem에 대해 -> elem가 't'이면 1을 반환, 계속 cnt에 누적
    // console.log(cnt);
});

cnt = strAry.reduce((accum, curr) => {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0);
// console.log(`cnt : ${cnt}`);




