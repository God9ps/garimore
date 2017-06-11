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
                    'Morada ou coordenadas inválidas! Devem corresponder a território nacional!',
                    'error'
                );
                /*alert("Morada ou coordenadas inválidas! Devem corresponder a território nacional.");*/
                $("#endereco").val('');
                $("#latitude").val('');
                $("#longitude").val('');
                $("#CP4").val('');
                $("#CP3").val('');
                $("#CPDesignacao").val('');
                $("#codDestrito").val('');
                $("#codConcelhos").val('');
                $("#codFreguesia").val('');
            }else{
                if (data['address']){
                    if (data['address']['country_code'] == 'pt') {
                        var cp, cpNumbers;

                        country = data['address']['country_code'];
                        $("#endereco").val(data['address']['road']);

                        if (data['address']['postcode'].length > 8){
                            cp = data['address']['postcode'].split(' ');
                            cpNumbers = cp[0].split('-');
                            $("#CP4").val(cpNumbers[0]);
                            $("#CP3").val(cpNumbers[1]);
                            $("#CPDesignacao").val(cp[1]);
                        }else{
                            cpNumbers = data['address']['postcode'].split('-');
                            $("#CP4").val(cpNumbers[0]);
                            $("#CP3").val(cpNumbers[1]);
                            $("#CPDesignacao").val(data['address']['county']);
                        }

                        $("#codDestrito").val(data['address']['state']);
                        $("#codConcelhos").val(data['address']['county']);
                        $("#codFreguesia").val(data['address']['city']);
                       /* if (moradaX == ''){
                            $("#endereco").val(data['display_name']);
                        }else{
                            $("#endereco").val(moradaX);
                            moradaX = '';
                        }*/


                    } else {
                        var lat = 38.711877;
                        var long = -08.140721;
                        map.panTo(new L.LatLng(lat, long));
                        marker.setLatLng([lat, long]).update();
                        swal(
                            'Oops...',
                            'Morada ou coordenadas inválidas! Devem corresponder a território nacional!',
                            'error'
                        );
                        $("#endereco").val('');
                        $("#latitude").val('');
                        $("#longitude").val('');
                        $("#CP4").val('');
                        $("#CP3").val('');
                        $("#CPDesignacao").val('');
                        $("#codDestrito").val('');
                        $("#codConcelhos").val('');
                        $("#codFreguesia").val('');
                    }
                }else{

                }

            }

        }
    });
}


function vermapa(lat, long) {
    country = null;
    morada = null;

    icon = L.icon({

        iconUrl: 'leaflet/marker-icon-blue.png',
        shadowUrl: 'leaflet/marker-shadow.png',

        iconSize: [28, 45], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [12, 54], // point of the icon which will correspond to marker's location
        shadowAnchor: [10, 72],  // the same for the shadow
        popupAnchor: [2, -56] // point from which the popup should open relative to the iconAnchor
    });

    var autocomplete_map = new autoComplete({
        selector: '#endereco',
        minChars: 3,

        source: function(term, response) {
            fetch('http://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=pt&limit=50&q=' + term)
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
        // console.log(e['target']);
        var lat = e['target']['_latlng']['lat'];
        $("#latitude").val(e['target']['_latlng']['lat'] + '00000');
        var long = e['target']['_latlng']['lng'];

        var longSplit = long.toString().split('.');
        var sign = parseInt(longSplit[0]) < 0 ? '-' : '';
        longSplit[0] = longSplit[0].toString().replace("-", "");
        var graus = (parseInt(longSplit[0]) < 10) ? '0' + longSplit[0] : longSplit[0];
        var fullLong = sign + graus + '.' + longSplit[1] + '00000';
        $("#longitude").val(fullLong);
        /*$("input[name='geo']").val("POINT(" + lat + " " + fullLong + ")");*/
        getJson(lat, long);
        $("#gd").addClass('active').attr('disabled', 'disabled');
        $("#gmd").removeAttr('disabled');
        $("#latitude").mask("99.999999");
        $("#longitude").mask("-99.999999");

        var padrao = 1;
        $("#padrao").val(padrao);
    });

}

function staticvermapa(lat, long) {

    icon = L.icon({

        iconUrl: 'leaflet/marker-icon-blue.png',
        shadowUrl: 'leaflet/marker-shadow.png',

        iconSize: [28, 45], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [12, 54], // point of the icon which will correspond to marker's location
        shadowAnchor: [10, 72],  // the same for the shadow
        popupAnchor: [2, -56] // point from which the popup should open relative to the iconAnchor
    });

    marker = L.marker([lat, long], {icon: icon, draggable: false}).addTo(map);

}
