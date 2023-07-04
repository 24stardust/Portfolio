$(function(){
    // const header = $('header')
    // const pageOffsetTop = header.offset().top;

    // 반응형일 때 리사이즈시 top 값을 다시 계산
    // $(window).resize(function(){
    //     pageOffsetTop = header.offset().top;
    // })

    // 스크롤 했을 때 변하도록 하기

    // // 값이 true일때 addClass false 일때 remove
    // $(window).scroll(function(){
    //     const scrolled = $(window).scrollTop() >= pageOffsetTop;
    //     if(scroll = true){
    //         header.stop().addClass('down', scrolled)
    //     }else{
    //         header.removeClass('down', scrolled)
    //     }
    //     console.log(scrolled);
    //     // 스크롤된 상태 true
    // })

    $('.family').click(function(){
        $('.drop').stop().slideDown();
        $('.family img').css({'transform': 'rotate(180deg)'})
    })
    $(".familysite").mouseleave(function(){
        $('.drop').stop().slideUp();
        $('.family img').css({'transform': 'rotate(0deg)'})
    })

    $('.fixed').mouseenter(function(){
        $(".fixed").stop().addClass('down');
        $('.depth2, .headerBG').stop().slideDown(200);
    })
    $('.fixed').mouseleave(function(){
        $(".fixed").stop().removeClass('down');
        $('.depth2, .headerBG').stop().slideUp();
    })


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
        $(".fixed").stop().addClass('down');
        }
        else{
        $(".fixed").removeClass('down');   
        }
        console.log(scroll);
    })

    $('.cookies').animate({
        'opacity': '1'
    })
})

var originalID, cloneID; //인터벌 포인터
window.addEventListener('DOMContentLoaded', function(){

    //롤링 배너 복제본 생성
    let roller = document.querySelector('.mySwiper');
    roller.id = 'roller1';

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    // document.querySelector('.roller-wrap').appendChild(clone); //부착

    //원본, 복제본 배너 위치 지정
    document.querySelector('#roller1').style.left = '0px';
    // document.querySelector('#roller2').style.left = document.querySelector('.swiper-wrapper').offsetWidth+'px';

    //클래스 할당
    roller.classList.add('original');
    // clone.classList.add('clone');

    //인터벌 메서드로 애니메이션 생성
    let rollerWidth = document.querySelector('.swiper-wrapper').offsetWidth;//회전 배너 너비값
    let betweenDistance = 1;//이동 크기 - 정수여야 함

    //롤링 시작
    function startRoller(){
        originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller1'));
        // cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector('#roller2'));
    }

    //롤링 정지
    function stopRoller(){
        clearInterval(originalID);
        clearInterval(cloneID);
    }

    //마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
    document.getElementById('roller1').addEventListener('mouseover',()=>{stopRoller()});
    // document.getElementById('roller2').addEventListener('mouseover',()=>{stopRoller()});
    document.getElementById('roller1').addEventListener('mouseout',()=>{startRoller()});
    // document.getElementById('roller2').addEventListener('mouseout',()=>{startRoller()});

    //인터벌 애니메이션 함수(공용)
    function betweenRollCallback(d, roller){
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d)+'px';//이동
        //조건부 위치 리셋
        if(rollerWidth + (left - d) <= 0){
            roller.style.left = rollerWidth+'px';
        }
    }

    startRoller();//롤링 초기화
});