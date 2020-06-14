// $(function(){
//     $("#clickBtn").on("click",function(){
//         //id가 "clickBtn"인 요소를 클릭했을 때 실행됨.
//         $("#text").append("버튼을 클릭했어요!<br>");
//         });
//         $("#removedBtn").on("click".function(){
//             $("#clickBtn").off("click");
//             //id가 "clickbTN"인 요소의 클릭 이벤트와의 연결을 제거함.
//         });
// });
//-------off 메소드 끝

$(function(){
    $('#test1').on('click',function(){
        //클릭시 경고창을 출력하는 이벤트 등록

alert('clicking!');
    });
});

function helloWorld(){
    $(".helloworld").toggleClass('border');
}


function helloWorld(){
    $("button").addClass('border');
}

// $(function(){
//     $("ul a").on("click",function(event){
//     // ul요소의 자식 요소 중 모든 a 요소를 클릭했을 때,
//     event.preventdefalt();
//     // a 요소의 클릭시 기본 동작인 링크의 작동을 중지시킴.
//     $("#text2").append("이 링크는 동작하지 않습니다!<br>");
//     });
// });

