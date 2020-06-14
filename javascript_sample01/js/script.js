//SAMPLE 04
$(function(){
    $('#btn01').click(function(){
        $('#warp').slideUp();
    });
    $('#btn02').click(function(){
        $("#warp").slideDown();
    });
});

// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').css("left","200px");
//     });
//     $('#btn02').click(function(){
//         $("#warp").css("top","200px");
//     });
// });


// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').stop().fadeOut();
//     });
//     $('#btn02').click(function(){
//         $("#warp").stop().fadeIn();
//     });
// });




//SAMPLE 03
// $(function() {
//     $("button").on("click",function(){
//         //class가 "content"인 각 요소를 포함하는 새로운 요소를 추가함.
//         $(".content").warp("<div class='warpper'></div>");
//     });
// });

//SAMPLE 02
// $(function(){
//     $("button").on("click", function(){
//         $("#firstRow").before("<tr><td>새로운 행이예요</td></tr>")

//         //after,defore 바로앞, 바로 뒤
//     });
// });

// $(function(){
//     $("button").on("click", function(){
//         $("<td>새로운 셀이에요!</td>").insertBefore("#target");
//         //insertBefore, insertAfter
//     });
// });





// function abc(){
//     document.getElementById("demo").innerHTML=Boolean(10>9);
// }

// $(function(){
//     $('.text').css("color","red").css('fontSize','50px');
// });

// $(function(){
//     var items = $("li");
//     //<li>요소를 모두 선택하여 변수 item에 저장함.
//     $("button").on("click",function(){
//         $("#len").text("저장된 <li>요소의 총 갯누는"+items.length+"개입니다.");
//     });
//   });

// $(function(){
//     var abc= $("li");
//     $('button').click(function(){
//         $('#len').text("저장된 li 요소의 총 갯수는"+abc.length+"개입니다.");
//     });
// });

// $(function(){
//     var abc= $("li");
//     $('button').click(function(){
//         $('#len').append("추가해주세요<br>");

//         //append는 뒤에 추가의 의미
//     });
// });

// $(function(){
  
//     $('button').click(function(){
//         $("#list").append("<li> li요소를 추가하겠습니다. </li>");
//     });
// });


// $(function(){
  
//     $('button').click(function(){
//         $("#list").prepend("<li> li요소를 추가하겠습니다. </li>");
//          //prepend는 앞에 추가의 의미
//     });
// });


