<?php include_once("analyticstracking.php") ?>

<?php if (isset($_GET['pagina'])){ ?>

    <!--Page Title-->
    <section class="page-title" style="background-image:url(images/background/bg-page-title.jpg);">
        <div class="auto-container">
            <div class="sec-title">
                <h1>Contactos</h1>
            </div>
        </div>
    </section>

    <!--Breadcrumb-->
    <div class="breadcrumb-outer">
        <div class="auto-container">
            <div class="bread-crumb text-center"><a href="index.php">Inicio</a> / <a href="#" class="current">Contactos</a></div>
        </div>
    </div>
<?php } ?>

<!--Agent Section-->
<section class="agent-section">
    <div class="auto-container">
        <div class="row clearfix">
            <!--Agent Box-->
            <div class="agent-box col-md-8 col-sm-12 col-xs-12">
                <div class="row clearfix">

                    <!--Image Column-->
                    <div class="column col-md-5 col-sm-5 col-xs-12">
                        <figure class="image-box wow bounceInUp" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="images/resource/team-image-1.jpg" alt=""></figure>
                    </div>

                    <!--Content Column-->
                    <div class="column col-md-7 col-sm-7 col-xs-12">
                        <div class="basic-info">
                            <h4>Ilda Maria</h4>
                            <div class="designation">Sócia Gerente GARIMORE</div>
                        </div>
                        <div class="desc-text">Especialista no ramo imobiliário. Compra, venda, remodelação e decoração de apartamentos novos ou usados.</div>
                        <ul class="contact-info">
                            <li><div class="icon"><span class="flaticon-technology-2"></span></div><strong>Tlm</strong>+351 917 735 188</li>
                            <li><div class="icon"><span class="flaticon-interface-3"></span></div><strong>Email</strong> geral@garimore.pt</li>
                        </ul>
                        <div class="social-links-two">
                            <a href="#"><span class="fa fa-facebook-f"></span></a>
                            <!--<a href="#"><span class="fa fa-twitter"></span></a>
                            <a href="#"><span class="fa fa-google-plus"></span></a>
                            <a href="#"><span class="fa fa-linkedin"></span></a>
                            <a href="#"><span class="fa fa-instagram"></span></a>-->
                        </div>
                    </div>

                </div>
            </div>

            <!--Form Column-->
            <div class="form-column col-md-4 col-sm-12 col-xs-12">
                <div class="title-box">
                    <h5>Para qualquer questão</h5>
                    <h3><strong>Contacto</strong> do agente</h3>
                </div>
                <!--Default Form-->
                <div class="default-form">
                    <form id="sendmail">
                        <div class="form-group">
                            <input type="text" name="nome" value="" placeholder="Nome" required="">
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" value="" placeholder="Email" required="">
                        </div>
                        <div class="form-group">
                            <textarea name="mensagem" placeholder="Mensagem" required=""></textarea>
                        </div>
                        <div class="text-left"><button type="submit" class="theme-btn">ENVIAR</button></div>

                    </form>
                </div>
            </div>

        </div>
    </div>
</section>
    
    