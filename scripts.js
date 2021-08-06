jQuery('document').ready(function($){ /* hacemos apertura y cierre de jquery */

    var menuBtn=$('.menu-icon'), /*esta variable va a ser el elemnto de menuicon*/
        menu=$('.navigation ul'); /*esta variable va a ser el elemnto de navegation ul*/
    
    menuBtn.click(function(){ /*cuando la persona haga click en menuBtn se activa la funcion*/

        if (menu.hasClass('show')){ /*vamos agregarle la clase show*/
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });
});