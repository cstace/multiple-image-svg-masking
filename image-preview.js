( function ($) {
    var breakpoint;
    $('svg').on('click', function(e){
        setNewCenter(e.offsetX + 'px', e.offsetY + 'px');
    })
    .on('mouseleave', function(){
        breakpoint = setTimeout(function(){
            setNewCenter('50%', '62%');
        }, 1000);
    })
    .on('mouseenter', function(){
        clearTimeout(breakpoint);
    })

    function setNewCenter(x,y){
        $('#mask-top_left > rect').css({'width': x, 'height': y});
        $('#mask-top_right > rect').css({'height': y});
        $('#mask-bottom_left > rect').css({'width': x});
        $('#mover').attr('cx', x).attr('cy', y);
    }
})(jQuery)