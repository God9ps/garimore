<?php if (isset($_GET['pagina'])){ ?>
    <!--Page Title-->
    <section class="page-title" style="background-image:url(images/background/bg-page-title.jpg);">
        <div class="auto-container">
            <div class="sec-title">
                <h1>Galeria 3d</h1>
            </div>
        </div>
    </section>

    <!--Breadcrumb-->
    <div class="breadcrumb-outer">
        <div class="auto-container">
            <div class="bread-crumb text-center"><a href="index.php">Inicio</a> / <a href="#" class="current">Galeria 3d</a></div>
        </div>
    </div>
<?php } ?>




<!--Gallery Section-->
<section class="gallery-section">
    <div class="auto-container">
        <div id="myPano" class="pano">
            <div class="controls">
                <span class="left">&laquo;</span>
                <span class="right">&raquo;</span>
            </div>
        </div>
        <div class="container" style="margin-top: 10px">
            <div class="btn-group center-block" style="margin: 0 auto; ">
                <button type="button" class="btn btn-danger choose" image="sphere.jpg">Quarto</button>
                <button type="button" class="btn btn-danger choose" image="pano2.jpg">Paisagem</button>
            </div>
        </div>
    </div>

</section>