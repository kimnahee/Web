// calendar_date.js

let today = new Date();
today = new Date(2022, 5, 1); //2022-06-01
today = new Date(2022, 0, 1); //2022-01-01
today = new Date(2022, 5, 0); //2022년 6월의 전일(2022년 5월의 마지막 날)

console.log(`올해는 ${today.getFullYear()}년도`); // getFullYear : 연도를 읽어오는 메소드
console.log(`이번달은 ${today.getMonth()+1}월입니다.`); //month 메소드는 월을 0부터 반환(+1해주기)
console.log(`오늘은 ${today.getDate()}일 입니다.`);
console.log(`오늘은 ${today.getDay()}`); //요일정보(일요일 ~ 0)

console.clear();

//달력 작성, 6월 작성 & 6월 1일의 요일 & 6월의 마지막 날((2022, 6, 0))
let year = 2021; //2021년
let month = 6; //6월달

//공유폴더 확인 & 참고
function makeCalendar(y, m){
    calendar = new Date(y, m-1, 1); //년, 월, 1일
    firstDay = calendar.getDay(); //6월의 첫번째 날의 요일 가져오기
    ld = new Date(y, m, 0); //마지막 날
    lastDate = ld.getDate();
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    let str = `<table border = 1><caption> ${y}년 ${m}월 </caption><tr>`;
    //위쪽 요일 출력
    for(let d of days){ 
        str += '<th>' + d + '</th>';
    }
    str += '</tr><tr>';
    //빈공간 만들기
    for(let i = 0; i<firstDay; i++){
        str += '<td></td>';
    }
    for(let i = 1; i<=lastDate; i++){
        if((firstDay + i - 1) % 7 == 0){
            str += '</tr><tr>';
        }
        str += '<td>' + i + '</td>';
    } 
    str += '</table>';
    document.write(str);
}

makeCalendar(year, month);