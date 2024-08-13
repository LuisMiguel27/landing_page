$(function(){


    $('a').click(function(){

        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop': offSetTop});
            

        return false
    })


    $(document).ready(function() {
        $('.nav-menu-mobile').hide(); // Garantir que o menu comece oculto
        abriMenu();
    });
    
    function abriMenu() {
        $('.menu').click(function() {
            $('.nav-menu-mobile').slideToggle(100);
        });
    }

    fecharProjeto();

    function fecharProjeto(){

        $('main, .cardapio, .nav-item-mobile, .navi-item-mobile, a').click(function(e){

            $('.nav-menu-mobile').fadeOut();
            e.stopPropagation();

            $('.nav-menu-mobile').click(function(a){

                a.stopPropagation();

            })

        })

    }
    
})