<script type="text/javascript" src="jss/jquery.maskedinput.js"></script>

            <script type="text/javascript" src="/leaflet/geopoint.js"></script>

            <script>

                $(document).ready(function () {

                    var lat = $("#latitude").val();
                    var long = $("#longitude").val();

                    moradaX = $("#endereco").val();

                    blue = '../../mapa/marker-icon-blue.png';
                    shadow = '../../mapa/marker-shadow.png';

                    map = L.map('map_canvas').setView([lat, long], 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

                    vermapa(lat, long);
                    

                    $(function(){
                        $("#gd").addClass('active');
                        $("#gd").attr('disabled','disabled');

                        $("#latitude").mask("99.999999");
                        $("#longitude").mask("-99.999999");
                        var lat;
                        var long;
                        var padrao = 1;
                        $("#padrao").val(padrao);
                        padraoGlobal = padrao;

                        $("#gd").click(function () {

                            $("#gmd").removeClass('active');
                            $(this).addClass('active');
                            $(this).attr('disabled','disabled');
                            $("#gmd").removeAttr('disabled');

                            if ($("#padrao").val() == 0){
                                var padrao = 1;
                                $("#padrao").val(padrao);
                                lat = $("#latitude").val();
                                long = $("#longitude").val();

                                padraoGlobal = padrao;
                                latGlobal = fixCoord(lat);
                                longGlobal = fixCoord(long);

                                var point = new GeoPoint(long, lat);

                                $("#latitude").mask("99.999999");
                                $("#longitude").mask("-99.999999");

                                $("#latitude").val(point.getLatDec());
                                $("#longitude").val(point.getLonDec());

                                $("input[name='geo']").val("POINT("+point.getLatDec()+" "+point.getLonDec()+")");
                            }else{



                            }
                        });

                        $("#gmd").click(function () {

                            $("#gd").removeClass('active');
                            $(this).addClass('active');
                            $(this).attr('disabled','disabled');
                            $("#gd").removeAttr('disabled');
                            var aspas="'";
                            var padrao = 0;
                            $("#padrao").val(padrao);
                            lat = parseFloat($("#latitude").val()+"0000");
                            long = parseFloat($("#longitude").val()+"0000");

                            padraoGlobal = padrao;
                            latGlobal = fixCoord(lat);
                            longGlobal = fixCoord(long);

                            $("input[name='geo']").val("POINT("+lat+" "+long+")");

                            var point = new GeoPoint(long, lat);

                            $("#latitude").mask('99° 99.9999' + aspas);
                            $("#longitude").mask('-99° 99.9999'+ aspas);

                            var latDeg = point.getLatDeg() == 'NaN° NaN' + aspas  ? '' : point.getLatDeg();
                            var lonDeg = point.getLonDeg() == 'NaN° NaN' + aspas  ? '' : point.getLonDeg();

                            $("#latitude").val(latDeg);
                            $("#longitude").val(lonDeg);
                        });
                    });

                    $("#latitude").keyup(function(){

                        if (this.value.replace(/[_]/g, '').length != 9) {
                            // console.log("Lat : " + $(this).val());
                            cashLatValue = $(this).val();
                            cashLatValue.replace(/[_]/g, '0')
                        }else{
                            cashLatValue = $(this).val();
                        }
                    }).change(function () {

                        cashLatValue = cashLatValue.replace(/[_]/g, '0');

                        $(this).val(cashLatValue);

                        var padrao = $("#padrao").val();

                        if (padrao == 1){
                            $("input[name='geo']").val("POINT("+$("#latitude").val()+" "+$("#longitude").val()+")");

                            latGlobal = $("#latitude").val();

                            zoom = 14;
                            map.panTo(new L.LatLng($("#latitude").val(),$("#longitude").val()));
                            marker.setLatLng([$("#latitude").val(), $("#longitude").val()]).update();
                            getJson(parseFloat(cashLatValue),$('#longitude').val());
                        }else if(padrao == 0){
                            lat = $("#latitude").val();
                            long = $("#longitude").val();
                            var point = new GeoPoint(long, lat);

                            latGlobal = fixCoord(point.getLatDec());

                            zoom = 14;
                            map.panTo(new L.LatLng(point.getLatDec(),point.getLonDec()));
                            marker.setLatLng([point.getLatDec(), point.getLonDec()]).update();
                            getJson(point.getLatDec(),point.getLonDec());
                        }else{
                            $(this).focus();

                        }

                    });


                    $("#longitude").keyup(function(){

                        if (this.value.replace(/[_]/g, '').length != 10) {

                            cashLongValue = $(this).val();
                            cashLongValue.replace(/[_]/g, '0')
                        }else{
                            cashLongValue = $(this).val();
                        }
                    }).change(function () {

                        cashLongValue = cashLongValue.replace(/[_]/g, '0');
                        cashLatValue = $("#latitude").val();
                        $(this).val(cashLongValue);
                        //console.log("Long : " + $(this).val());
                        var padrao = $("#padrao").val();

                        if (padrao == 1){
                            //console.log("padrao 1");
                            $("input[name='geo']").val("POINT("+$("#latitude").val()+" "+$("#longitude").val()+")");

                            latGlobal = $("#latitude").val();

                            zoom = 14;
                            map.panTo(new L.LatLng($("#latitude").val(),$("#longitude").val()));
                            marker.setLatLng([$("#latitude").val(), $("#longitude").val()]).update();
                            getJson(parseFloat(cashLatValue),parseFloat(cashLongValue));
                        }else if(padrao == 0){
                            lat = $("#latitude").val();
                            long = $("#longitude").val();
                            var point = new GeoPoint(long, lat);

                            latGlobal = fixCoord(point.getLatDec());

                            zoom = 14;
                            map.panTo(new L.LatLng(point.getLatDec(),point.getLonDec()));
                            marker.setLatLng([point.getLatDec(), point.getLonDec()]).update();
                            getJson(point.getLatDec(),point.getLonDec());
                        }else{
                            $(this).focus();

                        }

                    });

                });
            </script>