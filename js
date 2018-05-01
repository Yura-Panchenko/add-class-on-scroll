// page init
jQuery(function(){
  initAddClassScroll(); // добaвляет сласс при проскроливании страници на определенную высоту
});

function initAddClassScroll() {
  var $win = jQuery(window);
  var $body = jQuery('body'); // куда довесить класс
  var offsetHEIGHT = 100; // какую высоту надо проскролить
    function onScroll() {
      $body[$win.scrollTop() > offsetHEIGHT ?'addClass':'removeClass']('donate-active')
    }

    $win.on('scroll resize orientationchange', onScroll);
}
