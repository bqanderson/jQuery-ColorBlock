$('document').ready (function() {
  $('#container').append('<div class="box one"></div>\n' +
                          '<div class=" box two"></div>\n' +
                          '<div class="box three"></div>\n' +
                          '<div class="box four"></div>');

  $('body').on('click', '.one', function() {
    $('.footer').empty();
    $('.footer').append('<h2>You win! You\'ve click the burlywood box!');
  });

  $('body').on('click', '.two', function() {
    $('.footer').empty();
    $('.footer').append('<h2>You\'ve click the burgundy box, try again!');
  });

    $('body').on('click', '.three', function() {
      $('.footer').empty();
      $('.footer').append('<h2>You\'ve click the grey box, try again!');
    });

  $('body').on('click', '.four', function() {
    $('.footer').empty();
    $('.footer').append('<h2>You\'ve click the light blue box, try again!');
  } );
});
