// table.js,

//테이블 만들기
let data = [
    {sname: 'Hong', age: 15, height: 167.3, weight: 64.5},
    {sname : 'Hwang', age: 20, height: 175.7, weight: 72.3}
];

class Table{
    //생성자
    constructor(ary){
        this.aryData = ary;
    }
    //메소드
    createTable(){
        //this.tag에 계속 데이터를 담아줌..
        this.tag = '<table border = 1><tr>';
        
        //헤더정보 ㅣ <thead>...</thead>
        for(let field in this.aryData[0]){ //sname과 age를 가져옴(필드명)
            this.tag += '<th>' + field +'</th>'
        }
        //this.tag += '<th>이름</th><th>나이</th>';
        this.tag+='</tr>';

        //바디정보 <tbody>...</tbody>
        this.aryData.forEach((val, idx) =>{
            this.tag += '<tr>';
            for(let field in val){
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });

        return this.tag;
    }
}

let table = new Table(data); //생성자의 ary = data
let str = table.createTable();
document.write(str);


//----------------

console.log('Hongkildong'.length); //11(문자열의 길이를 반환)

let names = ['Hong', 'Hwang', 'Kim', 'Park'];

//find 메소드 : 매개값을 함수로 받음
let searchName = names.find(function(val){
    //return val == 'Hwang'; //val = '값' 이 true : 값을 searchName에 담아서 반환 | 없으면(false) undefined 반환
    return val.length == 4; //val 길이가 4인 값을 반환(조건에 만족하는 즉시 반환이라 뒤에 있는 park는 반환하지 않는다)
}); 

console.log(searchName);

//----교재 99쪽~101쪽

//unit : param

class Estimate{
    constructor(param){
        //생성자
        this.unit = param;
    }
    //견적가 얻기 메소드
    //getEstimate = unittype, width, height를 인자로 가짐
    getEstimate(unittype, width, height){ 
        // let priceInfo = this.unit.find(function(val, idx, ary){ //배열 function은 가져오는 인자값이 고정되어있음 | 첫번째 val, 두번째 인덱스, 세번째 배열값
        //     return val.type == unittype; 
        // })
        let priceInfo = this.unit.find(item => item.type == unittype); //화살표 함수로 간소화
        return priceInfo.price*width*height; //find 로 찾은 값의 price, width, height를 곱해서 반환
    }
    //배열에 요소 추가 메소드
    addUnit(unit){ 
        this.unit.push(unit); //push : 배열에 새로운 요소를 추가할 때 사용
    }
}

let unitinfo = [{type: "wood", price: 100}, {type: "iron", price: 300}, {type: "plastic", price: 200}];
const estimator = new Estimate(unitinfo); //생성자의 매개값 param 에 unitinfo 가 초기값으로 대입
estimator.addUnit({type:'glass', price: 500}); //glass 요소 추가
let result = estimator.getEstimate('glass', 20, 20); //estimator 의 getEstimate 메소드 : glass, 20, 20의 값을 받아서 
console.log(result);


// ++ object 타입으로 기능
let obj = {
    // unit: unitinfo,
    // getEstimate: function() {},
    // addUnit: function() {}
    //obj안에 바로 선언해도 됨
}; 

obj.unit = unitinfo; //unit 에 unitinfo를 담아준다

obj.getEstimate = function(unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}

obj.addUnit = function(unit){
    this.unit.push(unit);
}

let result1 = obj.getEstimate('iron', 20, 20);
console.log(result1);