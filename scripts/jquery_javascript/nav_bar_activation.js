$(document).ready(function(){
    var path = window.location.href;
     $('li a').each(function() {
        if($(this).attr('href').indexOf(path) !== -1){
            $(this).parent().addClass('active');
        }
        else{
            $(this).parent.removeClass('active');
        }
     });
});