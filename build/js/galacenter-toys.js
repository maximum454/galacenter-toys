$(function (){
    let optionM = {
        itemSelector: '.category-toys__item',
        columnWidth: '.category-toys__item',
        animate: true,
        percentPosition: true,
        gutter: 20,
    }
    $('.category-toys__body11').masonry(optionM);

    $(window).on('load resize',function () {
        let width = $(document).width();
        if (width < 767) {
            $('.category-toys__body11').masonry('destroy')
        }else{
            $('.category-toys__body111').masonry(optionM);
        }
    });
})