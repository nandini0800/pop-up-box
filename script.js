
$(document).ready(function(){
    var check= false;
    $('.clicks').on('click',function(){
        if(check==false){
            $('#box').addClass('show');
            check=true;
        }
        else{
            $('#box').removeClass('show');
            check=false;
        }
    });
    $('.submission').on('click',function(){
        $('#box').removeClass('show'); //remove popup after submission
        check=false;
    });
    $('.close_popup').on('click',function(){
        $('#box').removeClass('show');
        check=false;
    });

});




