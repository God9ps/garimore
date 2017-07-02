<?php include_once("analyticstracking.php") ?>
<?php if (isset($_GET['pagina'])){ ?>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(images/background/bg-page-title.jpg);">
        <div class="auto-container">
            <div class="sec-title">
                <h1>Galeria</h1>
            </div>
        </div>
    </section>

    <!--Breadcrumb-->
    <div class="breadcrumb-outer">
        <div class="auto-container">
            <div class="bread-crumb text-center"><a href="index.php">Inicio</a> / <a href="#" class="current">Galeria</a></div>
        </div>
    </div>
<?php } ?>




<!--Gallery Section-->
<section class="gallery-section">
    <div class="auto-container">

        <!--Sec Title-->
        <div class="sec-title centered">
            <h2 class="no-margin-bottom"><strong>Galeria</strong> de fotos</h2>
        </div>

        <!--Sortable Masonry-->
        <div class="sortable-masonry mixed-gallery-section">

            <!--Filter-->
            <div class="filters text-center">
                <ul class="filter-tabs filter-btns clearfix">
                    <li class="active filter" data-role="button" data-filter=".all">Tudo</li>
                    <li class="filter" data-role="button" data-filter=".bedrooms">Quarto 1</li>
                    <li class="filter" data-role="button" data-filter=".bedrooms">Quarto 2</li>
                    <li class="filter" data-role="button" data-filter=".cozinha">Cozinha</li>
                    <li class="filter" data-role="button" data-filter=".sala">Sala</li>
                    <li class="filter" data-role="button" data-filter=".casadebanho">Casa de Banho</li>
                    <li class="filter" data-role="button" data-filter=".corredor">Corredor</li>
                    <li class="filter" data-role="button" data-filter=".arrecadacao">Arrecadação</li>
                    <li class="filter" data-role="button" data-filter=".predio">Exterior</li>

                </ul>
            </div>


            <div class="items-container clearfix">

                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/quarto1.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
<!--                                    <h3><a href="take-tour.html">Quarto 1</a></h3>-->
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/quarto1.jpg" class="lightbox-image image-link" title="Quarto"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/quarto1_1.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/quarto1_1.jpg" class="lightbox-image image-link" title="Quarto"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/quarto2.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/quarto2.jpg" class="lightbox-image image-link" title="Quarto"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/quarto2_1.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/quarto2_1.jpg" class="lightbox-image image-link" title="Quarto"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all sala">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/sala.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/sala.jpg" class="lightbox-image image-link" title="Sala"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all sala">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/sala_1.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/sala_1.jpg" class="lightbox-image image-link" title="Sala"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all casadebanho">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/casabanho.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/casabanho.jpg" class="lightbox-image image-link" title="Casa de Banho"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all corredor">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/corredor2.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/corredor2.jpg" class="lightbox-image image-link" title="Corredor"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all corredor">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/corredor.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/corredor.jpg" class="lightbox-image image-link" title="Corredor"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all cozinha">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/barreiro/cozinha.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3>Quarto 1</h3>
                                    <a href="images/gallery/barreiro/cozinha.jpg" class="lightbox-image image-link" title="Cozinha"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div><!--End Sortable Masonry-->

    </div>

</section>