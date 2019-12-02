$(function() {
  $('#gif-1').hide();
  $('#pic-1').click(function() {
    //$('.click').hide();
    $('#gif-1').show();
    $('#pic-1').hide();
  });

  if ($('#pic-1').data("clicked", true)) {
    $('#gif-1').click(function() {
    //  $('.click').show();
      $('#gif-1').hide();
      $('#pic-1').show();
    });
  }

  $('#gif-2').hide();
  $('#pic-2').click(function() {
    //$('.click').hide();
    $('#gif-2').show();
    $('#pic-2').hide();
  });

  if ($('#pic-2').data("clicked", true)) {
    $('#gif-2').click(function() {
    //  $('.click').show();
      $('#gif-2').hide();
      $('#pic-2').show();
    });
  }

  $('#gif-3').hide();
  $('#pic-3').click(function() {
    //$('.click').hide();
    $('#gif-3').show();
    $('#pic-3').hide();
  });

  if ($('#pic-3').data("clicked", true)) {
    $('#gif-3').click(function() {
    //  $('.click').show();
      $('#gif-3').hide();
      $('#pic-3').show();
    });
  }

});
