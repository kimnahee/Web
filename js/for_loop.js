//for_loop.js

//배열관련 반복되는 메소드
//forEach: void
//map: [배열] A 형태를 A'형태로 변환 | filter: [배열] A -> B(조건을 만족하는 값들만) | reduce: 문자열, Number, [배열], {}

let ary = [3, 5, 8, 9, 12]; //배열 객체: new Array();
ary.push(5); //배열 뒷부분에 새로운 값 추가 push() | 배열 뒷부분 값부터 제거 pop()
ary.unshift(7); //배열 첫부분에 새로운 값 추가 unshift() | 배열 앞부분 값부터 제거 shift()
// => ary = [7, 3, 5, 8, 9, 12, 5];
ary.splice(3, 1); //인덱스 3에서 1개만큼 삭제(대체값이 없으므로 삭제 => 8이 없어짐)
// => ary = [7, 3, 5, 9, 12, 5];

//ary.forEach(val => console.log(val));
let newAry = [];
let result = ary.forEach(firstCallBack);

function firstCallBack(elem){
    // console.log(elem); //기능 : console에 들어온 매개값을 출력해 주는 함수
    newAry.push(elem); //new Ary에 elem를 push해서 새로운 배열을 만듬
}

// map: (배열이 새로운 값을 반환하도록 함)
result = ary.map(elem => elem * 2); // A => A'(A*2)

console.log(newAry);

//filter : 조건에 맞는 요소만 새로운 배열에 반환
result = ary.filter((elem, idx, ary) => {
    idx > 3;
}); 

//reduce A => 문자열, Number, [], {}
result = ary.reduce((accum, curr, currIdx, ary) => {    
    console.log(accum, curr, currIdx);
    return accum + curr;
}, 0);

result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
},[]); //map 과 같은 기능(filter, map, 집계함수 구현가능)

//idx 가 3보다 크면 *2 한 값을 배열에 담아주기
result = ary.reduce((accum, curr, currIdx) => {
    if(currIdx > 3){ //12, 5
        accum.push(curr * 2);
    }
    return accum;
}, []); //filter, map

console.log(result);