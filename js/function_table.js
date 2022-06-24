//function_table.js

//table 생성함수
function createTable(aryData){
    //<table>...</table>
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border = 1>';

    let head = createHead(fields); //<thead><tr><th>...</th></tr></thead>
    tag += head;

    let body = createBody(aryData);
    tag += body; //<tbody><tr><td> 값 </td></tr></tbody>

    return tag;
}

//header부분 함수
//<thead><tr> || <th> sname </th> <th> age </th> <th> height </th> <th> weight </th> </tr></thead>
function createHead(headName){ 
    let str = '';
    str += '<thead><tr>'
    //for~in문 : 배열에 사용하면 배열의 index 값만 반환함
    //foreach :  배열의 모든 요소 순환
    //name 배열 : 단일 배열이므로 foreach OR for~of 사용
    //1. for ~ of 사용
    // for(let fields of headName){
    //     str += '<th> '+ fields +' </th>'
    // }
    
    //2. forEach문 사용
    headName.forEach(val => str += '<th> '+ val +' </th>')
    str += '</tr></thead>'
    return str;
}

//body부분 함수
//<tbody><tr><td> 값 </td></tr></tbody>
function createBody(bodyData){
    let str = '';
    str += '<tbody>';
        //1. for ~ of문 사용
        for(let val of bodyData){
            str += '<tr>'
            for(let fields in val){
                str += '<td>' + val[fields] +'</td>';
            }
            str += '</tr>'
        }

        //2. forEach문 사용
        //bodyData.forEach : bodyData의 모든 요소 val을 받아옴
        // bodyData.forEach(val => { 
        //     str += '<tr>'
        //     //forEach문 내부에서 for~in 사용 : 배열의 index값을 fields로 가져옴
        //     //val[0](sname), val[1](age), val[2](height), val[3](weight)
        //     for(let fields in val){
        //         str += '<td>' + val[fields] +'</td>';
        //     }
        //     str += '</tr>'
        // });
    str += '</tbody>';
    return str;
}

let data = [{
        sname: '홍길동',
        age: 15,
        height: 167.3,
        weight: 64.5
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175.7,
        weight: 72.3
    },
    {
        sname: '김민수',
        age: 24,
        height: 182.3,
        weight: 79.8
    }
];

let str = createTable(data);
console.log(str);
document.write(str);

// let str = createBody(data);
// console.log(str);
// document.write(str);