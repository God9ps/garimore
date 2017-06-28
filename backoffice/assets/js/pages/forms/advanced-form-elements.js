function fixCoord(coord) {

    var matches, strMin;
    matches = coord.toString().split('.');

    var deg = matches[0];
    var min = matches[1];

    var sign = parseInt(deg) < 0 ? "-" : "";

    deg = Math.abs(deg);

    if (isNaN(deg) || isNaN(min)) {
        return NaN;
    }

    if (deg < 10) {
        deg = "0" + deg;
    }

    if (min.toString().length < 6) {
        strMin = min.toString() + "000000";
        strMin = strMin.substring(0, 6);
    } else {
        strMin = min.toString().substring(0, 6);
    }
    return sign + deg + "." + strMin;
}

function getJson(lat, long) {
    latGlobal = fixCoord(lat);
    longGlobal = fixCoord(long);
    $.ajax({
        url: 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long + '&addressdetails=1',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            if (data['error']){
                var lat = 38.711877;
                var long = -08.140721;
                map.panTo(new L.LatLng(lat, long));
                marker.setLatLng([lat, long]).update();
                swal(
                    'Oops...',
                    'Morada ou coordenadas inválidas!',
                    'error'
                );

                $("#address").val('');

            }else{
                if (data['address']){
                    $("#address").val(data['address']['road']);
                    map.panTo(new L.LatLng(lat, long));
                    marker.setLatLng([lat, long]).update();
                }else{
                    swal(
                        'Oops...',
                        'Morada ou coordenadas inválidas!',
                        'error'
                    );
                }

            }

        }
    });
}



function vermapa(lat, long) {

    morada = null;

    icon = L.icon({

        iconUrl: 'assets/leaflet/marker-icon-blue.png',
        shadowUrl: 'assets/leaflet/marker-shadow.png',

        iconSize: [28, 45], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [12, 54], // point of the icon which will correspond to marker's location
        shadowAnchor: [10, 72],  // the same for the shadow
        popupAnchor: [2, -56] // point from which the popup should open relative to the iconAnchor
    });

    var autocomplete_map = new autoComplete({
        selector: '#address',
        minChars: 3,

        source: function(term, response) {
            fetch('http://nominatim.openstreetmap.org/search?format=json&addressdetails=3&limit=10&q=' + term)
                .then(function(response) {

                    return response.text();
                }).then(function(body) {

                var json = JSON.parse(body);
                var new_json = json.map(function(el) {
                    return {
                        label: el.display_name,
                        value: el.display_name,
                        lat: el.lat,
                        lon: el.lon,
                        boundingbox: el.boundingbox
                    }
                });
                response(new_json);
            });
        },
        renderItem: function(item, search) {
            search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
            var bbox = [item.boundingbox[2], item.boundingbox[0], item.boundingbox[3], item.boundingbox[1]];
            return '<div class="autocomplete-suggestion" data-bbox="' + bbox.join(',') + '" data-lon="' + item.lon + '" data-lat="' + item.lat + '" data-val="' + item.label + '">' + item.label.replace(re, "<b>$1</b>") + '</div>';
        },
        onSelect: function(e, term, item) {
            if (item.getAttribute('data-bbox') && (item.getAttribute('data-bbox').split(',')).length > 0) {
                var extent = item.getAttribute('data-bbox').split(',');
                if (extent.length > 0) {
                    extent = extent.map(function(el) {
                        return parseFloat(el);
                    });
                }
                getJson(item.getAttribute('data-lat'), item.getAttribute('data-lon'));
                map.panTo(new L.LatLng(item.getAttribute('data-lat'),item.getAttribute('data-lon')));
                marker.setLatLng([item.getAttribute('data-lat'),item.getAttribute('data-lon')]).update();

            } else {
                var lat = item.getAttribute('data-lat');
                var long = item.getAttribute('data-lon');
                map.panTo(new L.LatLng(lat,long));
                marker.setLatLng([lat,long]).update();
                getJson(lat, long);
            }
        }
    });

    getJson(lat, long);

    marker = L.marker([lat, long], {icon: icon, draggable: true}).addTo(map);

    marker.on('dragend', function (e) {
        console.log(e['target']);
        var lat = e['target']['_latlng']['lat'];

        var long = e['target']['_latlng']['lng'];

        $("input[name='geo']").val("POINT(" + lat + " " + long + ")");
        getJson(lat, long);

    });

}

$(document).ready(function () {
    var lat = 38.711877;
    var long = -08.140721;

    blue = '../../mapa/marker-icon-blue.png';
    shadow = '../../mapa/marker-shadow.png';

    map = L.map('map').setView([lat, long], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    vermapa(lat, long);

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