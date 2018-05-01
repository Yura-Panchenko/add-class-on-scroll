# add-class-on-scroll
добавить класс на блок при проскроливании определенной высоты


// page init
jQuery(function(){
  initAddClaassScroll(); // добавляет сласс при проскроливании страници на определенную высоту
});

function initAddClaassScroll() {
  var $win = jQuery(window);
  var $body = jQuery('body'); // куда довесить класс
  var offsetHEIGHT = 100; // какую высоту надо проскролить
    function onScroll() {
      $body[$win.scrollTop() > offsetHEIGHT ?'addClass':'removeClass']('donate-active')
    }

    $win.on('scroll resize orientationchange', onScroll);
}
