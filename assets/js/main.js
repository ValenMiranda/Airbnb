/*Aquí está el JS de la primera parte del filtro*/

$(document).ready(function() {

 	  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

    $('select').material_select();

    $("#example_id").ionRangeSlider({
    min: 150,
    max: 15000,
    from: 500,
    to: 150000,
    type: 'double',
    prefix: "$",
    grid: true,
    grid_num: 10
});
     

  });

/*Aquí termina el JS de la primera parte del filtro*/
