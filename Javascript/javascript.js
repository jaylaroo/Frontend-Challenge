$(document).ready(function() {
  $('select').change(function() {
    $(this).find('option:selected').each(function() {
      var optionValue = $(this).attr('value');
      if(optionValue) {
        $('.direction').not('.' + optionValue).hide();
        $('.' + optionValue).show();
      }
      else {
        $('.direction').hide();
      }
    });
  }).change();
});
