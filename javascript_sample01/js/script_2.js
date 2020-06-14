$(function(){
    $('.menu01').mouseenter(function(){
        $(".sub-navi").stop().sildeDown();
    });
    $('.menu01').mouseleave(function(){
        $(".sub-navi").stop().sildeUp();
    });
});

// $(function(){
//     $('.menu01>a').mouseenter(function(){
//         $('.subNav').stop().slideDown();
//     });
//     $('.menu01>a').mouseleave(function(){
//         $('.subNav').stop().slideUp();
//     });
// });


// $(function(){
//     $('.menu01>a').hover(function(){
//         $('.subNav').fadeIn();
//     });
// });
