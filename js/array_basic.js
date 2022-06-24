// array_basic.js

let arr = []; //new Array(); new Object()/ {}
arr[0] = 'Hello';
arr[1] = '100';
arr[2] = true;

delete arr[1]; //배열의 값이 지워져서 empty 상태가 됨

console.log(arr.length);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//확장 for
for(let val of arr){
    console.log(val);
}

//forEach
arr.forEach((val, idx) =>{
    console.log(`${idx} => ${val}`); //배열의 값이 undefined이면 제외하고 출력
});

console.clear();
arr.push('Apple');
arr.unshift('Banana');
arr.pop(); //제일 마지막부터 삭제
arr.shift(); //첫번째부터 삭제
arr.splice(0, 1, 'Apple'); //추가, 수정, 삭제
//대체할 값을 안 넣으면 삭제
//중간의 크기 인자에 따라 차지하는 값이 달라짐

arr.forEach((val, idx) =>{
    console.log(`${idx} => ${val}`); //배열의 값이 undefined이면 제외하고 출력
});
