var apiKey = require('./../.env').apiKey;

Doctor = function(){
}

Doctor.prototype.getDoctor = function(ailment) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&skip=0&limit=12&user_key=' + apiKey).then(function(response) {
    for (i = 0; i < 11; i++) {
      console.log(response.data);
      var doctorImage = response.data[i].profile.image_url;
      var doctorFirstName = response.data[i].profile.first_name;
      var doctorLastName = response.data[i].profile.last_name;
      $("#fix-width").append("<div class='doctor-wrap col-xs-6 col-sm-6 col-md-3'><div class='doctor-box'><div class='doctor-img-wrap'><img src='" + doctorImage + "' alt=''></div><div class='doctor-info-wrap'><div class='doctor-name'>Doctor " + doctorFirstName + " " + doctorLastName + "</div></div></div></div>");
    }

  }).fail(function(error) {
    $('#showError').text(error.responseJSON.message);
  });
}

exports.weatherModule = Doctor;
