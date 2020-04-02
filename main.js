// DESCRIZIONE:
// parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
// cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi (quindi come abbiam fatto questa mattina sulla correzione EX che era di ieri).



$ (document).ready(function(){

  // per i drop-down menù
  $(".menu-due>ul>li").on({
    mouseenter: function(){
      $(this).children().show();
    }
  });

  $(".menu-due>ul>li").on({
    mouseleave: function(){
      $(this).children().hide();
    }
  });



  // per hamburger menù quando compare
  $('.fa-bars').click(
    function(){
      $('.hamburgerMenu').hide().toggle();
    }
  );

  $('.fa-times').click(
    function(){
      $('.hamburgerMenu').hide();
    }
  );
});
