        //variable.js

        // 콘솔 로그로 출력(개발자 도구-console에서 확인)
        console.log('Hello, World!!');
        // document.write() = text 형식으로 값 출력/태그 입력가능
        document.write('<h3>Hello, World!!</h3>');

        // 변수 선언(type x)/할당값에 따라 type 달라짐
        let num = 0;
        num = 'Hello';
        num = 10; //숫자는 number type
        num = 'ten';
        num = true; //boolean type
        num = null; //null = object(class의 인스턴스)
        let num1; //undefined

        //변수의 type 출력
        console.log(typeof num);
        console.log(typeof num1);

        num1 = 100;
        let num2 = 200;
        //num2 = 200; - 변수를 선언하지 않고 사용하면 전역 객체로 선언하여 사용 | 전역객체(wiindow)의 속성에 추가됨

        console.log(num1 + num2);
        console.log(window); // 여러 가지 속성을 가지고 있는 class라고 보면될듯..??

        // 변수 : 학생이름, 학생번호, 영어, 수학
        let student = new Object(); //object 선언
        student.sno = '22-0123' //속성(자바에서는 필드) 추가
        student.sname = '홍길동'
        student.engScore = 90;
        student.mathScore = 80;

        console.log(student);

        let person = { // (=object 선언)
            fname: '김민수',
            age: 20, //속성 : property
            height: 175.5,
            showInfo: function(){ //기능을 담을 수 있음 = 메소드
                return this.fname + ', ' + this.age + ', ' + this.height; //this : person
            }
        };  

        person.weight = '68.5';

        // 속성 값 읽어오기
        console.log(person.fname); //person의 fname만 출력
        console.log(person.showInfo());
        console.log(person.showInfo); //function의 정의를 반환해줌
        console.log(person['age']);

        // 변수 선언으로도 읽어오기 가능
        let field = 'height';
        console.log(person[field]);
        
        //디버깅
        //debugger;
        
        // 전체 필드를 읽어오고 싶을 때
        // for loop .. in
        
        for(let field in person) {
            //person 이라는 object가 가지고 있는 field의 개수만큼 반복
            console.log(field, ' => ', person[field]);
        }
        //for문 안에서의 field는 for문 안에서만 사용되고 소멸
        console.log(field); //처음 선언했던 field 값이 출력됨

        let x = 10; 
        let y = 20;

        // 변수 : me - 속성 : 이름, 취미, 연락처, 주소 | 소개: 이름, 취미 연락처 반환
        let me = {
            name: '가나다',
            hobby: '영화감상',
            phone: '010-1234-5678',
            addr: '대구시',
            introduce: function(){
                return this.name + ', ' + this.hobby + ', ' + this.phone;
            }
        }

        console.log(me);
        console.log(me.introduce());