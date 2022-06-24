//object_constructor.js

//객체 생성
function Student(sno, sname, age) {
    //함수에서 this : 전역 객체 window
    this.sno = sno;
    this.sname = sname;
    this.age = age;
    this.showInfo = function () {
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}

//new 사용 : 새로운 객체 생성
//Student~ 의 값을 가지는 객체 s1
//new를 쓰지않으면 window에 값이 들어감 (this를 사용해서 선언했기 때문에)
//s1은  new Student('22-1111', '홍길동', 19);에 의해 만들어진 객체를 참조하고 있기 때문에
let s1 = new Student('22-1111', '홍길동', 19);
let s2 = s1;
//s2의 값을 변경하면 s1의 값도 변경됨..
s2.sno = '22-2222';
console.log(s1, s2);
console.log(s1.showInfo());

console.clear();
//-------------------------------------------------

function Table(param) {
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function () {
        this.tag += '<table border = 1>';
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }
    //<thead> <tr> <th> 값 </th> </tr> </thead>
    this.createHead = function () {
        this.tag += '<thead><tr>'
        this.fields.forEach(hname => { //필드 이름 가져오기
            this.tag += '<th>' + hname + '</th>';
        });
        this.tag += '</tr></thead>';
    }

    // 화살표 함수 사용
    // this.createBody = function () {
    //     this.tag += '<tbody>'
    //     this.data.forEach(val =>{ 
    //         this.tag += '<tr>'
    //         for(fields in val){
    //             this.tag += '<td>' + val[fields] + '</td>';
    //         }
    //         this.tag += '</tr>'
    //     })
    //     this.tag += '</tbody>'
    // }

    //화살표 함수 사용 x
    this.createBody = function() {
        this.tag += '<tbody>';
        let str = this.tag;
        this.data.forEach(function(val) {
            str += '<tr>'
            for(fields in val){ //function에 넣으면 this.tag가 window 객체에 들어가버리므로 변수를 따로 선언해서 반환해줘야함(화살표 함수는 관계x)
                str += '<td>' + val[fields] + '</td>';
            }
            str += '</tr>'
        })
        this.tag = str;
        this.tag += '</tbody>'
    }
}

// function() { this : window } | new 함수 this :  객체(object) | 이벤트 this : 이벤트의 대상 >> ** 구분 **
// this 가 함수 안에서 사용이 되면 전역객체(window)가 되고 
// 교재 111쪽 예제 확인

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

let t1 = new Table(data);
table = t1.createTable();
console.log(table);
document.write(table);