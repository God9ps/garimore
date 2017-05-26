
<?php if (isset($_GET['pagina'])){{  ?>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(images/background/bg-page-title.jpg);">
        <div class="auto-container">
            <div class="sec-title">
                <h1>Mapa</h1>
            </div>
        </div>
    </section>

    <!--Breadcrumb-->
    <div class="breadcrumb-outer">
        <div class="auto-container">
            <div class="bread-crumb text-center"><a href="index.php">Inicio</a> / <a href="#" class="current">Mapa</a></div>
        </div>
    </div>
<?php } ?>


<!--Map Section-->
<section class="map-section">
    <!--Map Container-->
    <div class="map-outer">
        <!--Map Canvas-->
        <div class="map-canvas" data-zoom="12" data-lat="23.814233" data-lng="90.410397" data-type="roadmap" data-hue="#ffc400" data-title="Dhaka" data-content="Dhaka, Bangladesh<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
        </div>

        <!--Info Outer-->
        <div class="outer-container">
            <div class="info-container wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div class="row clearfix">
                    <!--Info Column-->
                    <div class="info-column col-md-4 col-sm-6 col-xs-12">
                        <div class="inner-box">
                            <div class="icon"><span class="flaticon-location-2"></span></div>
                            <h4>Garimore</h4>
                            <div class="text">Rua São João da Mata nº 50<br>1200-846 Lisboa</div>
                        </div>
                    </div>

                    <!--Info Column-->
                    <div class="info-column col-md-4 col-sm-6 col-xs-12">
                        <div class="inner-box">
                            <div class="icon"><span class="flaticon-note"></span></div>
                            <h4>Enviar E-Mail </h4>
                            <div class="text">geral@garimore.pt</div>
                        </div>
                    </div>

                    <!--Info Column-->
                    <div class="info-column col-md-4 col-sm-6 col-xs-12">
                        <div class="inner-box">
                            <div class="icon"><span class="flaticon-technology-2"></span></div>
                            <h4>Ligue-nos</h4>
                            <div class="text">+351 917 735 188</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</section>