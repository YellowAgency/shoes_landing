/**
 * Created by sp41mer on 04.10.16.
 */
$(document).ready(function () {
    // говнокод на говнокод - кек, Санёк
    // ЛОООООООООООООООЛ
    var static_prefix = 'static/shoes/';

    //наведения на кнопку
    $('.genuino__big_button__call').hover(
        function() {
            $(".genuino__big_button__call__text").hide();
            $("#genuino__big_button__call__onlynumber").css('display', 'inline-block');
        },
        function(){
            $("#genuino__big_button__call__onlynumber").css('display', 'none');
            $(".genuino__big_button__call__text").show();
        }
    );

    //подчеркивания - прям вот уверен, что можно было сделать проще
    $("#first_screen").hover(
        function(){
            $("#js__navbar__about").find("span").addClass('underlined');
        },
        function(){
            $("#js__navbar__about").find("span").removeClass('underlined');
    });
    $("#second_screen").hover(
        function(){
            $("#js__navbar__individual").find("span").addClass('underlined');
        },
        function(){
            $("#js__navbar__individual").find("span").removeClass('underlined');
    });
    $("#third_screen").hover(
        function(){
            $("#js__navbar__order").find("span").addClass('underlined');
        },
        function(){
            $("#js__navbar__order").find("span").removeClass('underlined');
    });
    $("#fourth_screen").hover(
        function(){
            $("#js__navbar__order").find("span").addClass('underlined');
        },
        function(){
            $("#js__navbar__order").find("span").removeClass('underlined');
    });
    $("#fifth_screen").hover(
        function(){
            $("#js__navbar__contacts").find("span").addClass('underlined');
        },
        function(){
            $("#js__navbar__contacts").find("span").removeClass('underlined');
    });

    //открываем первую шнягу
    var firstLoadOpening = $(".fivesteps_header[data-number='1']");
    $(".fivesteps__boots__img__circle[data-number='1']").attr('src', static_prefix + 'img/circles_1_1.png');
    firstLoadOpening.parent().find(".fivesteps_info").show("slow");
    firstLoadOpening.find(".fivesteps_header__span").addClass('fivesteps_header__span__active');
    firstLoadOpening.find(".fivesteps_header__img").attr("src", static_prefix + 'img/screen3_answer.png');

    $(".fivesteps_header").click(function () {
        var number = $(this).data('number');
        //вот тут всем картинкам тащим версию без кружочка - ГАВНОКОД :(
        var oldpictures = $(".fivesteps__boots__img__circle");
        $.each(oldpictures, function (el) {
            $(this).attr('src', static_prefix + 'img/circles_' + $(this).data('number') + '.png');
        });
        //потом с кружочком
        $(".fivesteps__boots__img__circle[data-number='" + number + "']").attr('src', static_prefix + 'img/circles_' + number + '_1.png');
        //возвращаем все назад
        $(".fivesteps_header__span").removeClass('fivesteps_header__span__active');
        $(".fivesteps_header__img").attr("src", static_prefix + 'img/screen3_question.png');
        $(".fivesteps_info").hide();
        //а вот тут уже открываем
        $(this).parent().find(".fivesteps_info").show("slow");
        $(this).find(".fivesteps_header__span").addClass('fivesteps_header__span__active');
        $(this).find(".fivesteps_header__img").attr("src", static_prefix + 'img/screen3_answer.png');
    });
    $(".fivesteps__boots__img__circle").click(function () {
        var number = $(this).data('number');
        //вот тут всем картинкам тащим версию без кружочка - ГАВНОКОД :(
        var oldpictures = $(".fivesteps__boots__img__circle");
        $.each(oldpictures, function (el) {
            $(this).attr('src', static_prefix + 'img/circles_' + $(this).data('number') + '.png');
        });
        $(this).attr('src', static_prefix + 'img/circles_' + number + '_1.png');
        //возвращаем все назад
        $(".fivesteps_header__span").removeClass('fivesteps_header__span__active');
        $(".fivesteps_header__img").attr("src", static_prefix + 'img/screen3_question.png');
        $(".fivesteps_info").hide();
        //а вот тут уже открываем
        var targetElement = $(".fivesteps_header[data-number='" + number + "']");
        targetElement.parent().find(".fivesteps_info").show("slow");
        targetElement.find(".fivesteps_header__span").addClass('fivesteps_header__span__active');
        targetElement.find(".fivesteps_header__img").attr("src", static_prefix + 'img/screen3_answer.png');

    });
    $(".four_steps__li__styles").click(function () {
        var picture = $(this).data('img');
        $('.ol__circle__radius').removeClass('ol__circle__radius_clicked');
        $(this).find('.ol__circle__radius').addClass('ol__circle__radius_clicked');
        $(".img__styles__div").find('img').attr("src", static_prefix + 'img/second_screen_' + picture + '.png');
    });

    //Вот тут перехватываю сабмит формы
    $(".js_formsubmit").submit(function(e){
        e.preventDefault();
        var myForm = $(this);
        if (!myForm.find(".jsFormSubmitName").val()){
            alert('Enter name');
        }
        if (!myForm.find(".jsFormSubmitNumber").val()){
            alert('Enter phone');
        }
        if (myForm.find(".jsFormSubmitName").val() && myForm.find(".jsFormSubmitNumber").val()){
            //Почистить поля
            //Swal - успех
        }
    });

    $(".jsFormSubmitNumber").mask("+7 (999) 999 99 99")
                            .on("blur", function() {
        var last = $(this).val().substr( $(this).val().indexOf("-") + 1 );

        if( last.length == 3 ) {
            var move = $(this).val().substr( $(this).val().indexOf("-") - 1, 1 );
            var lastfour = move + last;
            var first = $(this).val().substr( 0, 9 );

            $(this).val( first + '-' + lastfour );
        }
    });



    //Здесь смув-скрол
    //$(".js__navbar__button").click(function() {
    //    $('a[href*="#"]:not([href="#"])').click(function () {
    //        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //            var target = $(this.hash);
    //            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //            if (target.length) {
    //                $('html, body').animate({
    //                    scrollTop: target.offset().top
    //                }, 500);
    //                return false;
    //            }
    //        }
    //    });
    //});

});
