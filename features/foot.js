$(".footinput_email").focus(function(){
                
    $(".socialfoot").addClass( "off" );
    
});
$(".footinput_email").focusout(function(){
                
    $(".socialfoot").removeClass( "off" );
    
});