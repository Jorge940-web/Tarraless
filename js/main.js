jQuery('document').ready(function($){

var menubtn = $('.menu-icon'),
    menu = $('.navegation ul');


menubtn.click(function(){

    if(menu.hasClass('show')){
        menu.removeClass('show');
    } else{
        menu.addClass('show')
    }

    menu.addClass('show');
})
});