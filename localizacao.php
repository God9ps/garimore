<?php include_once("analyticstracking.php") ?>
<?php if (isset($_GET['pagina'])){ ?>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(images/background/bg-page-title.jpg);">
        <div class="auto-container">
            <div class="sec-title">
                <h1>Localização</h1>
            </div>
        </div>
    </section>

    <!--Breadcrumb-->
    <div class="breadcrumb-outer">
        <div class="auto-container">
            <div class="bread-crumb text-center"><a href="index.php">Inicio</a> / <a href="#" class="current">Localização</a></div>
        </div>
    </div>
<?php } ?>

<!--Nearby Locations-->
<section class="nearby-locations">
    <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
            <h2><strong>Locais</strong> próximos</h2>
            <div class="desc-text">Lorem ipsum dolor sit amet, ea pro error pertinacia, nam id munere detraxit. Wisi decore discere eum an, autem erant usu eu, per ubique legendos intellegam in. An est melius vivendo. Hinc temporibus nec te, vero consetetur an qui nam.</div>
        </div>

        <div class="row clearfix">
            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box red-theme">
                    <div class="icon-box"><span class="icon flaticon-book-2"></span></div>
                    <h4>Escola</h4>
                    <div class="location-title">Escola primária do Barreiro</div>
                    <div class="location-distance">1 km</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box green-theme">
                    <div class="icon-box"><span class="icon flaticon-symbol-3"></span></div>
                    <h4>Pastelaria</h4>
                    <div class="location-title">Aninha Pastelaria</div>
                    <div class="location-distance">0.5 km</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box purple-theme">
                    <div class="icon-box"><span class="icon flaticon-heart-shape-outline-with-lifeline"></span></div>
                    <h4>Hospital</h4>
                    <div class="location-title">Hospital do Barreiro</div>
                    <div class="location-distance">2 km</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box blue-theme">
                    <div class="icon-box"><span class="icon flaticon-food-1"></span></div>
                    <h4>Hipermercado</h4>
                    <div class="location-title">Continente</div>
                    <div class="location-distance">1 km</div>
                </div>
            </div>

        </div>


        <div class="row clearfix">
            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box red-theme">
                    <div class="icon-box"><span class="icon flaticon-book-2"></span></div>
                    <h4>Restaurante</h4>
                    <div class="location-title">O celeiro</div>
                    <div class="location-distance">0.8 km</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box green-theme">
                    <div class="icon-box"><span class="icon flaticon-symbol-3"></span></div>
                    <h4>Autoestradas</h4>
                    <div class="location-title">A8, A33, IP1</div>
                    <div class="location-distance">2 km</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box purple-theme">
                    <div class="icon-box"><span class="icon flaticon-heart-shape-outline-with-lifeline"></span></div>
                    <h4>Câmara Municipal</h4>
                    <div class="location-title">Câmara e junta de freguesia</div>
                    <div class="location-distance">1.5 km</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box blue-theme">
                    <div class="icon-box"><span class="icon flaticon-food-1"></span></div>
                    <h4>Transportes</h4>
                    <div class="location-title">Autocarro TST 128</div>
                    <div class="location-distance">30m</div>
                </div>
            </div>

        </div>

    </div>

    <!--Map Box-->
    <div id="locations-box" class="locations-box"></div>

</section>