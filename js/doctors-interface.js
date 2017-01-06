var Doctor = require('./../js/doctors.js').weatherModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#get-doctor').submit(function(event) {
    event.preventDefault();
    $("#fix-width").empty();
    var ailment = $('#ailment').val();
    $('#ailment').val("");
    currentDoctorObject.getDoctor(ailment);
  });
});
