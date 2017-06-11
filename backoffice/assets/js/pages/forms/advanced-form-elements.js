function initialize(){

    var myLatlng = new google.maps.LatLng(38.712530,-9.140626);
    var mapOptions = {
        zoom: 18,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map;
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker;

    /*var geocoder = new google.maps.Geocoder();
    var infowindow = new google.maps.InfoWindow();
    var autoCompleteInput = document.getElementById('endereco');
    var autoCompleteOpcoes = {types: ['geocode']};
    autocomplete = new google.maps.places.Autocomplete(autoCompleteInput,autoCompleteOpcoes);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        for (var i = 0; i < place.address_components.length; i++) {
            for (var j = 0; j < place.address_components[i].types.length; j++) {
                if (place.address_components[i].types[j] == "postal_code") {
                    console.log( place.address_components[i]);

                }
            }
        }

        for (var i=0; i<results[j].address_components.length; i++)
        {
            if (results[j].address_components[i].types[0] == "locality") {
                //this is the object you are looking for
                city = results[j].address_components[i];
            }
            if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
                //this is the object you are looking for
                region = results[j].address_components[i];
            }
            if (results[j].address_components[i].types[0] == "country") {
                //this is the object you are looking for
                country = results[j].address_components[i];
            }
        }


        var cp = zip[0];
        var codPostal = new Array();
        var codPostal = cp.split("-");
        console.log(region.long_name);
        // console.log(results[0].address_components[3]['long_name']);
        $('#CP4').val(codPostal[0]);
        $('#CP3').val(codPostal[1]);
        // $('#CPDesignacao').val(localidade);
        $('#CPDesignacao').val(city.long_name);
        $('#latitude').val(marker.getPosition().lat());
        $('#longitude').val(marker.getPosition().lng());
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);

        var myLatlng = new google.maps.LatLng(marker.getPosition().lat(),marker.getPosition().lng());

        marker = new google.maps.Marker({
            map: map,
            position: myLatlng,
            draggable: true
        });

    });*/


    marker = new google.maps.Marker({
        map: map,
        position: myLatlng,
        draggable: true
    });

    /*geocoder.geocode({'latLng': myLatlng }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {

                //                  $('#endereco').val(results[0].formatted_address); // Mostra a morada completa rua/nº/codPostal/localidade/pais
                $('#endereco').val(results[0].address_components[1]['long_name']+' nº '+results[0].address_components[0]['long_name']); //Rua
                var x = 0;
                var zip = new Array();
                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var j = 0; j < results[0].address_components[i].types.length; j++) {
                        if (results[0].address_components[i].types[j] == "postal_code") {
                            zip[x] = results[0].address_components[i]['long_name'];

                            x++;
                        }

                    }
                }

                for (var i=0; i<results[j].address_components.length; i++)
                {
                    if (results[j].address_components[i].types[0] == "locality") {
                        //this is the object you are looking for
                        city = results[j].address_components[i];
                    }
                    if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
                        //this is the object you are looking for
                        region = results[j].address_components[i];
                    }
                    if (results[j].address_components[i].types[0] == "country") {
                        //this is the object you are looking for
                        country = results[j].address_components[i];
                    }
                }


                var cp = zip[0];
                var codPostal = new Array();
                var codPostal = cp.split("-");
                console.log(region.long_name);
                // console.log(results[0].address_components[3]['long_name']);
                $('#CP4').val(codPostal[0]);
                $('#CP3').val(codPostal[1]);
                // $('#CPDesignacao').val(localidade);
                $('#CPDesignacao').val(city.long_name);
                $('#latitude').val(marker.getPosition().lat());
                $('#longitude').val(marker.getPosition().lng());
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
            }
        }
    });*/

    /*google.maps.event.addListener(marker, 'dragend', function() {

        geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {

                    //                  $('#endereco').val(results[0].formatted_address); // Mostra a morada completa rua/nº/codPostal/localidade/pais
                    $('#endereco').val(results[0].address_components[1]['long_name']+' nº '+results[0].address_components[0]['long_name']); //Rua
                    var x = 0;
                    var zip = new Array();
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        for (var j = 0; j < results[0].address_components[i].types.length; j++) {
                            if (results[0].address_components[i].types[j] == "postal_code") {
                                zip[x] = results[0].address_components[i]['long_name'];

                                x++;
                            }
                        }
                    }

                    for (var i=0; i<results[j].address_components.length; i++)
                    {
                        if (results[j].address_components[i].types[0] == "locality") {
                            //this is the object you are looking for
                            city = results[j].address_components[i];
                        }
                        if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
                            //this is the object you are looking for
                            region = results[j].address_components[i];
                        }
                        if (results[j].address_components[i].types[0] == "country") {
                            //this is the object you are looking for
                            country = results[j].address_components[i];
                        }
                    }


                    var cp = zip[0];
                    var codPostal = new Array();
                    var codPostal = cp.split("-");
                    console.log(region.long_name);
                    // console.log(results[0].address_components[3]['long_name']);
                    $('#CP4').val(codPostal[0]);
                    $('#CP3').val(codPostal[1]);
                    // $('#CPDesignacao').val(localidade);
                    $('#CPDesignacao').val(city.long_name);
                    $('#latitude').val(marker.getPosition().lat());
                    $('#longitude').val(marker.getPosition().lng());
                    infowindow.setContent(results[0].formatted_address);
                    infowindow.open(map, marker);
                }
            }
        });
    });*/
}
$(document).ready(function () {
    setTimeout(function () {
        initialize();
    } ,1500);

    /*$('#listingTypes').selectpicker({
        style: 'btn-info',
        size: 4
    });*/

    /*$('.colorpicker').colorpicker();*/

    //Dropzone
    /*Dropzone.options.frmFileUpload = {
        paramName: "file",
        maxFilesize: 2
    };*/

    /*//Masked Input ============================================================================================================================
    var $demoMaskedInput = $('.demo-masked-input');

    //Date
    $demoMaskedInput.find('.date').inputmask('dd/mm/yyyy', { placeholder: '__/__/____' });

    //Time
    $demoMaskedInput.find('.time12').inputmask('hh:mm t', { placeholder: '__:__ _m', alias: 'time12', hourFormat: '12' });
    $demoMaskedInput.find('.time24').inputmask('hh:mm', { placeholder: '__:__ _m', alias: 'time24', hourFormat: '24' });

    //Date Time
    $demoMaskedInput.find('.datetime').inputmask('d/m/y h:s', { placeholder: '__/__/____ __:__', alias: "datetime", hourFormat: '24' });

    //Mobile Phone Number
    $demoMaskedInput.find('.mobile-phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });
    //Phone Number
    $demoMaskedInput.find('.phone-number').inputmask('+99 (999) 999-99-99', { placeholder: '+__ (___) ___-__-__' });

    //Dollar Money
    $demoMaskedInput.find('.money-dollar').inputmask('99,99 $', { placeholder: '__,__ $' });
    //Euro Money
    $demoMaskedInput.find('.money-euro').inputmask('99,99 €', { placeholder: '__,__ €' });

    //IP Address
    $demoMaskedInput.find('.ip').inputmask('999.999.999.999', { placeholder: '___.___.___.___' });

    //Credit Card
    $demoMaskedInput.find('.credit-card').inputmask('9999 9999 9999 9999', { placeholder: '____ ____ ____ ____' });

    //Email
    $demoMaskedInput.find('.email').inputmask({ alias: "email" });

    //Serial Key
    $demoMaskedInput.find('.key').inputmask('****-****-****-****', { placeholder: '____-____-____-____' });
    //===========================================================================================================================================
*/
    //Multi-select
   /*$('#listingTypes').multiSelect();*/

    /*//noUISlider
    var sliderBasic = document.getElementById('nouislider_basic_example');
    noUiSlider.create(sliderBasic, {
        start: [30],
        connect: 'lower',
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        }
    });
    getNoUISliderValue(sliderBasic, true);*/

    //Range Example
    var rangeSlider = document.getElementById('rangeValue');

    noUiSlider.create(rangeSlider, {
        connect: true,
        behaviour: 'tap',
        start: [ 0, 1000000 ],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [ 0 ],
            '0%': [ 1000, 1000 ],
            '100%': [ 1000000, 1000 ],
            'max': [ 1000000 ]
        }
    });
    getNoUISliderValue(rangeSlider, false);

    //Range Example
    var rangeTipology = document.getElementById('rangeTipology');

    noUiSlider.create(rangeTipology, {
        connect: true,
        behaviour: 'tap',
        start: [ 0, 6 ],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [ 0 ],
            '0%': [ 0, 1 ],
            '100%': [ 6, 1 ],
            'max': [ 6 ]
        }
    });
    getNoUISliderTipology(rangeTipology, false);
});

function getNoUISliderTipology(sliderT, percentage) {
    sliderT.noUiSlider.on('update', function () {
        var val = sliderT.noUiSlider.get();
        var arrayTip = val.toString().split(',');

        /*if (percentage) {
         val = parseInt(val);
         val += '%';
         }*/

        $(sliderT).parent().find('span.minimoT').text("T"+parseInt(arrayTip[0]));
        $(sliderT).parent().find('span.maximoT').text("T"+parseInt(arrayTip[1]));
    });
}

//Get noUISlider Value and write on
function getNoUISliderValue(slider, percentage) {
    slider.noUiSlider.on('update', function () {
        var val = slider.noUiSlider.get();
        var arrayValue = val.toString().split(',');

        /*if (percentage) {
            val = parseInt(val);
            val += '%';
        }*/
        $(slider).parent().find('span.minimo').text(arrayValue[0] + " €");
        $(slider).parent().find('span.maximo').text(arrayValue[1] + " €");
    });
}

function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}