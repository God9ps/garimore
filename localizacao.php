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
            <div class="desc-text">A localização do apartamento permite uma vida cómoda e prática.</div>
        </div>

        <div class="row clearfix">
            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box red-theme">
                    <div class="icon-box"><span class="icon flaticon-book-2"></span></div>
                    <h4>Escola</h4>
                    <div class="location-title">Escola Secundária de Santo André</div>
                    <div class="location-distance">800m</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box green-theme">
                    <div class="icon-box"><span class="icon flaticon-food-1"></span></div>
                    <h4>Pastelaria Cafetaria</h4>
                    <div class="location-title">Boutique do pão</div>
                    <div class="location-distance">100m</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box purple-theme">
                    <div class="icon-box"><span class="icon flaticon-heart-shape-outline-with-lifeline"></span></div>
                    <h4>Hospital</h4>
                    <div class="location-title">Centro Hospitalar Barreiro/Montijo</div>
                    <div class="location-distance">1500m</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box blue-theme">
                    <div class="icon-box"><span class="icon flaticon-food-1"></span></div>
                    <h4>Hipermercado</h4>
                    <div class="location-title">Lidl</div>
                    <div class="location-distance">250m</div>
                </div>
            </div>

        </div>


        <div class="row clearfix">
            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box red-theme">
                    <div class="icon-box"><span class="icon flaticon-symbol-3"></span></div>
                    <h4>Comércio</h4>
                    <div class="location-title">Centro Comercial Continente Barreiro</div>
                    <div class="location-distance">1250m</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box green-theme">
                    <div class="icon-box"><span class="icon flaticon-symbol-3"></span></div>
                    <h4>Autoestradas</h4>
                    <div class="location-title">A39</div>
                    <div class="location-distance">450m</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box purple-theme">
                    <div class="icon-box"><span class="icon flaticon-heart-shape-outline-with-lifeline"></span></div>
                    <h4>Serviços e Industria</h4>
                    <div class="location-title">Zona Industrial</div>
                    <div class="location-distance">800m</div>
                </div>
            </div>

            <!--Location Block-->
            <div class="location-block col-md-3 col-sm-6 col-xs-12">
                <div class="inner-box blue-theme">
                    <div class="icon-box"><span class="icon flaticon-food-1"></span></div>
                    <h4>Transportes</h4>
                    <div class="location-title">Autocarro TST</div>
                    <div class="location-distance">30m</div>
                </div>
            </div>

        </div>

    </div>

    <!--Map Box-->
    <div id="locations-box" class="locations-box"></div>

</section>