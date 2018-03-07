(function($){
  var Aerotek = {
    accordionStateIcon: function(){
    $('.accordion__title').on('click', function(){
      $('.accordion__title.active').removeClass('active');
      $(this).addClass('active');
    })
    }
  }
  
  $(document).ready(function(){
    Aerotek.accordionStateIcon();
  });
}(jQuery))