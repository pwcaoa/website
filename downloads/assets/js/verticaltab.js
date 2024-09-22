$(document).ready(function() {    
    vert_tabs();
    });
    
    $(window).resize(function(){
        if($('.vertical-tabs').innerWidth() > 608) {
            if($('div.selected').length){
            }else{
                $('div.box:first').addClass('selected');    
            }
        }
    });

function vert_tabs(){
    $('ul.checklist-select li').click(function() {
        var selectID = $(this).attr('id');
        $('ul.checklist-select li').removeClass('active');
        $(this).addClass('active');
        $('div.box').removeClass('selected');
        $('.' + selectID + '-box').addClass('selected');
    });    
}
