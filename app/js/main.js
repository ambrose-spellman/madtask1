$(document).ready(function () {
	$(".promo_slider").slick({
		slidesToShow:1,
		slidesToScroll:1,
        dots: false,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 2000
    });
        // ******gallery slider 
    $('.p_gallery_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.p_gallery_slider-nav',
        autoplay: true
    });
    $('.p_gallery_slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.p_gallery_slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });   
       
    $('[data-fancybox="images"]').fancybox({
        idleTime  : false,
        baseClass : 'fancybox-custom-layout',
        margin    : 0,
        gutter    : 0,
        infobar   : false,
        thumbs    : {
          hideOnClose : false,
          parentEl    : '.fancybox-outer'
        },
        touch : {
          vertical : false
        },
        buttons : [
          'close',
          'thumbs'
        ],
        animationEffect   : "fade",
        animationDuration : 300,
        onInit : function( instance ) {
          // Create new wrapping element, it is useful for styling
          // and makes easier to position thumbnails
          instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
        },
        caption : function(instance, item) {
          return '<h3>Жилой комплекс " Ак-Кеме" <br /> 1-2-3-4-5 комнатные квартиры \'\'.</p>';
        }
    });
    // *****select2***
    $('.main_menu_link').click(function() {
        $('.main_menu_link').css({"background":"","color":""}); // обнуляем для всех ссылок стиль
        $(this).css({"background":"#a2112a","color":"#fff"}); // устанавливаем при нажатии
    });
    $('.sub_menu_link').click(function() {
        $('.sub_menu_link').css({"background":"","color":"","border-bottom":""}); // обнуляем для всех ссылок стиль
        $(this).css({"background":"#a2112a","color":"#fff","border-bottom":"2px solid #a2112a"}); // устанавливаем при нажатии
    });
    $('.js-example-basic-single').select2(); // инициализация плагина select2
    // показываем моб меню
    var menu = $(".main_menu");
    var exit = $(".mob_menu_exit");
    var ham = $(".mob_menu_ham");
    $('.mob_menu_link').on('click', function () {
        menu.css("display", "block");
        ham.css("display","none");
        exit.css("display","block");

    });
    exit.on('click', function () {
        menu.css("display", "none");
        ham.css("display","block");
        exit.css("display", "none");

    });
    $(window).resize(function(){
        if($(window).width() > 1200){
            menu.show();
        }
    });
    // ******textarea max lenght 
    $('#maxlenght').keyup( function() {
        var $this = $(this);
        if($this.val().length > 400)
            $this.val($this.val().substr(0, 400));           
    });
        // ******review form flip******
    $('.flip').click(function(){
        $('.cont-flip').toggleClass('flipped');
        return false;
    });
    // *******popup*****
    $('.pack_button').click(function () {
        $(".notif_popup").css('display','block',  "overflow-x", "hidden",
        "overflow-y", "auto");
    });
    $('.notif_popup_close').click(function () {
        $('.notif_popup').fadeOut();
    });
    $('#popup-open, #popup-open-down, .pack_more').click(function () {
        $(".call_popup").css('display','block',  "overflow-x", "hidden",
        "overflow-y", "auto");
    });
    $('#call_popup_close, .call_popup_wrap, .plan_popup_wrap').click(function () {
        $('.call_popup').fadeOut();
    });
    // *********order-popup**************
    $('#order-popup-open').click(function () {
        $(".order_popup").css('display','block',  "overflow-x", "hidden",
        "overflow-y", "auto");
    });
    $('#order_popup_close, .order_popup_wrap').click(function () {
        $('.order_popup').fadeOut();
    });
    var validation = $('#registration-form').validate({
        rules: {
            userEmail: {
                minlength:6,
                required:true,
                error: true
                
            },
            userPhone: {
                number: true
            }
        },
    });
    $('#phone').mask('+(999)99-99-99');
    // ********objectmap*********
    $("#map_opener").click(function() {
        $("#object_popup").css("display","block");
        $(".object_popup_close").css("transform","none");
      });
    $('.object_popup_close').click(function () {
        $('#object_popup').css("display", "none");
    });
    //   *****floorslider***********
    $( "#slider-range" ).slider({
        range: true,
        min: 1,
        max: 24,
        values: [ 2, 24 ],
        step: 1,
        slide: function( event, ui ) {
            $( "#price" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
        }
    });
    $( "#price" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
        " - " + $( "#slider-range" ).slider( "values", 1 ) );
        // *****area slider***
    $( "#slider-square" ).slider({
            range: true,
            min: 20,
            max: 300,
            values: [ 20, 300 ],
            step: 1,
            slide: function( event, ui ) {
                $( "#square" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            }
    });
    $( "#square" ).val( " " + $( "#slider-square" ).slider( "values", 0 ) +
            " - " + $( "#slider-square" ).slider( "values", 1 ) );
    // *****get apart plan*****
    // *****corpus opener 
    $('.select-opener').click(function () {
        $('.hidden').css("display", "block");
        $('.select-closer').css("display", "block");
        $('.select-opener').css("display", "none");
    });
    $('.select-closer').click(function () {
        $('.hidden').css("display", "none");
        $('.select-closer').css("display", "none");
        $('.select-opener').css("display", "block");
    });
    $(".apart").mousemove(
       
        function (pos) {  
        $('.apart_info').html($(this).attr('description-data'));
        $('.apart_info').show(); 
        $('.apart_info').css('left',(pos.offsetX+10)+'px').css('top',(pos.offsetY+10)+'px'); 	
        }   
       
       ).mouseleave(function() {
        $(".floor_info").hide();  
    }); 
       
    $(".floor_hover").mousemove(
       
        function (pos) {  
        $('.floor_info').html($(this).attr('floor-data'));
        $('.floor_info').show(); 
        $('.floor_info').css('right',(pos.offsetX+20)+'px').css('top',(pos.offsetY+10)+'px'); 	
        }   
       
       ).mouseleave(function() {
        $(".floor_info").hide();  
    }); 
       
    // ******floor opener******
    $('.floor_hover').click(function () {
        $('.visual_plan').css("display", "block");
    });
     $('#plan_close, .visual_plan_wrap').click(function () {
        $('.visual_plan').fadeOut();
    });
    $('#plan_order').click(function () {
        $('.order_popup').css("display", "block");
    });
    $('#single_order').click(function () {
        $('.order_popup').css("display", "block");
    });
    $('.visual_single_link').click(function () {
        $('.visual_single').css("display", "block");
    });
    $('#single_close, .visual_single_wrap').click(function () {
        $('.visual_single').fadeOut();
    });

  
});
