//exception.js

//교재 페이지 94쪽
//getElementById = id값으로 어떠한 element를 가져오는 메소드
let fname = document.getElementById('selectFile');
let data = '';
try{
    const reader = new FileReader(); //파일을 읽어들이는 객체
    reader.addEventListener('load', function(){ //load 이벤트가 발생하면 function 함수를 실행
        data = reader.result;
        console.log('파일 내용 : ' + data);
    })
    reader.addEventListener('error', function(){
        throw '파일 읽기 에러';
    })
    fname.addEventListener('change', function(){
        reader.readAsText(fname.files[0], 'utf-8');
    })
} catch (err){
    console.log(err.message);
    console.log('정상 진행');
}