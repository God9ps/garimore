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

        <!--Sortable Masonry-->
        <div class="sortable-masonry mixed-gallery-section">

            <!--Filter-->
            <div class="filters text-center">
                <ul class="filter-tabs filter-btns clearfix">
                    <li class="active filter" data-role="button" data-filter=".all">Tudo</li>
                    <li class="filter" data-role="button" data-filter=".bedrooms">Quartos</li>
                    <li class="filter" data-role="button" data-filter=".bathrooms">Casa de Banho</li>
                    <li class="filter" data-role="button" data-filter=".sala">Sala</li>
                    <li class="filter" data-role="button" data-filter=".kitchen">Cozinha</li>
                    <li class="filter" data-role="button" data-filter=".corredor">Corredor</li>
                    <li class="filter" data-role="button" data-filter=".exterior">Exterior</li>
                </ul>
            </div>


            <div class="items-container clearfix">

                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all corredor">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\1.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Corredor</a></h3>
                                    <a href="images\gallery\1.jpg" class="lightbox-image image-link" title="Vista do corredor"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\2.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">Quarto</a></h3>
                                    <a href="images\gallery\2.jpg" class="lightbox-image image-link" title="Vista do quarto principal"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\3.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Quarto</a></h3>
                                    <a href="images\gallery\3.jpg" class="lightbox-image image-link" title="Vista do Quarto"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item big-block all kitchen">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\6.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Cozinha</a></h3>
                                    <a href="images\gallery\6.jpg" class="lightbox-image image-link" title="Pormenor da bancada da cozinha"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item big-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\11.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Quarto</a></h3>
                                    <a href="images\gallery\11.jpg" class="lightbox-image image-link" title="Quarto principal"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all sala">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\4.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">Sala</a></h3>
                                    <a href="images\gallery\4.jpg" class="lightbox-image image-link" title="Vista da Sala de estar"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all sala">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\15.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Sala</a></h3>
                                    <a href="images\gallery\15.jpg" class="lightbox-image image-link" title="Vista da Sala de estar"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all kitchen">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\12.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Cozinha</a></h3>
                                    <a href="images\gallery\12.jpg" class="lightbox-image image-link" title="Cozinha"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bedrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\16.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="#">Quarto</a></h3>
                                    <a href="images\gallery\16.jpg" class="lightbox-image image-link" title="Vista do Quarto"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all bathrooms">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\5.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">Casa de Banho</a></h3>
                                    <a href="images\gallery\5.jpg" class="lightbox-image image-link" title="Casa de Banho"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Default Portfolio Item-->
                <div class="default-portfolio-item masonry-item small-block all exterior">
                    <div class="inner-box">
                        <figure class="image-box"><img src="images\gallery\10.jpg" alt=""></figure>
                        <!--Overlay Box-->
                        <div class="overlay-box">
                            <div class="overlay-inner">
                                <div class="content">
                                    <h3><a href="take-tour.html">Exterior</a></h3>
                                    <a href="images\gallery\10.jpg" class="lightbox-image image-link" title="Vista exterior do prédio"><span class="icon flaticon-cross"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div><!--End Sortable Masonry-->

    </div>

</section>