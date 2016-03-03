$(function(){
    $('a').on('click', function(){
        $(this).parent().addClass('current').siblings().removeClass('current');
             });
        });

// Current menu active js
$(function(){
    $('a.menu').click(function(){
        $('a.menu').removeClass("active");
            $(this).addClass("active");
                                });
            });