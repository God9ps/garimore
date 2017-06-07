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
                    <li class="filter" data-role="button" data-filter=".bathrooms">Quarto 2</li>
                    <li class="filter" data-role="button" data-filter=".kitchen">Cozinha</li>
                    <li class="filter" data-role="button" data-filter=".garage">Sala</li>
                    <li class="filter" data-role="button" data-filter=".basement">Casa de Banho</li>
                    <li class="filter" data-role="button" data-filter=".basement">Corredor</li>
                    <li class="filter" data-role="button" data-filter=".basement">Arrecadação</li>
                    <li class="filter" data-role="button" data-filter=".basement">Exterior</li>

                </ul>
            </div>


            <div class="items-container clearfix">

                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all garage basement">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/1.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">BEDROOM</a></h3>
                                    <a href="images/gallery/1.jpg" class="lightbox-image image-link" title="Image Caption Here"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms bathrooms kitchen garage basement">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/2.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">BEDROOM</a></h3>
                                    <a href="images/gallery/2.jpg" class="lightbox-image image-link" title="Image Caption Here"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all kitchen garage basement">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/3.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">BEDROOM</a></h3>
                                    <a href="images/gallery/3.jpg" class="lightbox-image image-link" title="Image Caption Here"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms bathrooms kitchen">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/4.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">BEDROOM</a></h3>
                                    <a href="images/gallery/4.jpg" class="lightbox-image image-link" title="Image Caption Here"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bathrooms kitchen garage">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/5.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">BEDROOM</a></h3>
                                    <a href="images/gallery/5.jpg" class="lightbox-image image-link" title="Image Caption Here"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item big-block all bedrooms bathrooms basement">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images/gallery/6.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">BEDROOM</a></h3>
                                    <a href="images/gallery/6.jpg" class="lightbox-image image-link" title="Image Caption Here"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div><!--End Sortable Masonry-->

    </div>

</section>