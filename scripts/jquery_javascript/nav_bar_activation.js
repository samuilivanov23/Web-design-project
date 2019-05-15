$(document).ready(function(){
    var path = window.location.href;
    console.log(this.location.href);
    console.log("path: " + path);
    console.log(path == this.location.href);
     $('li a').each(function() {
        if($(this).attr('href').indexOf(path) !== -1){
            $(this).parent().addClass('active');
        }
        else{
            $(this).parent.removeClass('active');
        }
     });
});