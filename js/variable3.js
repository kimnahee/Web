//variable3.js

//테이블 만들기
//tr은 가로줄, td는 셀

//(1)
let str = '';
let num = 9;
str += '<table>';
str = '<table border = "1"><caption>' + num + '단</caption>'
for (let i = num; i <= num; i++) {
    for (let j = 1; j <= 9; j++) {
        str += '<tr>' + '<td>' + i + '</td>' + '<td>' + '*' + '</td>' + '<td>' + j + '</td>' + '<td>' + '=' + '</td>' + '<td>' + i * j + '</td>' + '</tr>'
    }
}
str += '</table>';

document.write(str);
document.write('<br>');

//(2-1) + 조건문

//달력(6월)
let days = ['일', '월', '화', '수', '목', '금', '토'];
let mon = 5;

function showCalendar(month){
    str = '';
    str += '<table>'
    str = '<table border = "1"><caption>' + month + '월 달력</caption>'
    str += '<tr>'
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>'
    let vtd = getFirstDay(month); //4
    for (let i = 1; i < vtd; i++) { //3개의 빈공간 생성
        str += '<td></td>';
    }
    for (let i = 1; i <= getLastDate(month); i++) {
        str += '<td>' + i + '</td>';
        if ((vtd - 1 + i) % 7 == 0) {
            str += '</tr><tr>'
        }
    }
    str += '</table>'
    document.write(str);
}

function getFirstDay(mon) { //매개변수 mon - 첫 번째 날의 위치를 반환
    switch (mon) {
        case 1:
        case 10:
            return 7;
        case 2:
        case 3:
        case 8:
            return 2;
        case 6:
            return 4;
        case 4:
        case 7:
            return 6;
        case 5:
            return 1;
        case 9:
        case 12:
            return 5;
        case 11:
            return 3;
    }
}

function getLastDate(mon) {
    //1, 3, 5, 7, 8, 10, 12 : 31일
    //2 : 28일
    //4, 6, 9, 11 : 30일
    switch (mon) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            0;
    }
}

showCalendar(1);
showCalendar(2);
showCalendar(3);