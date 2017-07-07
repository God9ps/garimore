<?php

include_once "header.php";

?>
<div class="page-wrapper">
 	
    <!-- Preloader -->
    <div class="preloader"></div>
 	
    <!-- Main Header-->
    <header class="main-header">
        
        <?php

        include_once "header-upper.php";
        include_once "menu.php";
        include_once "menu_float.php";

        if($_GET['pagina']){
            include_once $_GET['pagina'].".php";
        }else{
            include_once "slider.php";
            include_once "propertyTips.php";
            include_once "detalhes.php";
            include_once "galeria.php";
//            include_once "descDetalhada.php";
            include_once "localizacao.php";
            include_once "agentContact.php";
            include_once "map.php";

        }


        ?>


    
    <!--Testimonials-->
    <!--<section class="testimonials-section" style="background-image:url(images/background/image-2.jpg);">
		<div class="auto-container">
            
            <div class="sec-title centered">
                <h2><strong>Testi</strong>monials</h2>
            </div>
            

        	<div class="testimonials-slider testimonials-carousel">
            	

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-1.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-2.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-3.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-1.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-2.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                
                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-3.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-1.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-2.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                

                <article class="slide-item">
                    <div class="slide-text">
                        <p>“But I must explain to you the how all this mistaken idea of thealorem qco denouncing pleasure”</p>
                    </div>
                    <div class="info-box">
                    	<figure class="image-box"><img src="images/resource/testi-image-3.jpg" alt=""></figure>
                    	<h3>Mark Pine</h3>
                        <p class="designation">Co- Founder at Houzz</p>
                    </div>
                </article>
                
                
            </div>
            
        </div>    
    </section>-->
    
    
    <!--Blog News Section-->
    <!--<section class="blog-news-section">
    	<div class="auto-container">
        	
            <div class="sec-title text-center">
                <h2><strong>Latest</strong> News</h2>
                <div class="desc-text">Lorem ipsum dolor sit amet, quodsi perpetua ne sit, duo fugit saperet ut, ne omnium docendi eleifend quo.</div>
            </div>
            
        	<div class="row clearfix">
                
                <!--News Column-->
                <!--<div class="column blog-news-column col-lg-4 col-md-4 col-sm-6 col-xs-12">
                	<article class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                		<figure class="image-box">
                        	<a href="blog-single.html"><img src="images/resource/blog-image-1.jpg" alt=""></a>
                            <a href="#" class="category">Bedrooms</a>
                        </figure>
                        <div class="content-box">
                        	<h3><a href="blog-single.html">Get the best property by our agent</a></h3>
                            <ul class="post-info clearfix">
                                <li>By <a href="#">Rashed Kabir</a></li>
                                <li>On <a href="#">April 5, 2015</a></li>
                            </ul>
                            <div class="text">Lorem ipsum dolor sit amet, habeo porro congueq it cum in, ei duo vide summo. Essent insolens ad vimei posse set reformidans ex qui. Sea ut eius.</div>
                            <a href="blog-single.html" class="theme-btn read-more">READ MORE</a>
                        </div>
                    </article>
                </div>-->
                
                <!--News Column-->
                <!--<div class="column blog-news-column col-lg-4 col-md-4 col-sm-6 col-xs-12">
                	<article class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                		<figure class="image-box">
                        	<a href="blog-single.html"><img src="images/resource/blog-image-2.jpg" alt=""></a>
                            <a href="#" class="category">Bedrooms</a>
                        </figure>
                        <div class="content-box">
                        	<h3><a href="blog-single.html">Get the best property by our agent</a></h3>
                            <ul class="post-info clearfix">
                                <li>By <a href="#">Rashed Kabir</a></li>
                                <li>On <a href="#">April 5, 2015</a></li>
                            </ul>
                            <div class="text">Lorem ipsum dolor sit amet, habeo porro congueq it cum in, ei duo vide summo. Essent insolens ad vimei posse set reformidans ex qui. Sea ut eius.</div>
                            <a href="blog-single.html" class="theme-btn read-more">READ MORE</a>
                        </div>
                    </article>
                </div>-->
                
                <!--News Column-->
                <!--<div class="column blog-news-column col-lg-4 col-md-4 col-sm-6 col-xs-12">
                	<article class="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                		<figure class="image-box">
                        	<a href="blog-single.html"><img src="images/resource/blog-image-3.jpg" alt=""></a>
                            <a href="#" class="category">Bedrooms</a>
                        </figure>
                        <div class="content-box">
                        	<h3><a href="blog-single.html">Get the best property by our agent</a></h3>
                            <ul class="post-info clearfix">
                                <li>By <a href="#">Rashed Kabir</a></li>
                                <li>On <a href="#">April 5, 2015</a></li>
                            </ul>
                            <div class="text">Lorem ipsum dolor sit amet, habeo porro congueq it cum in, ei duo vide summo. Essent insolens ad vimei posse set reformidans ex qui. Sea ut eius.</div>
                            <a href="blog-single.html" class="theme-btn read-more">READ MORE</a>
                        </div>
                    </article>
                </div>-->
                
           <!-- </div>
        </div>
    </section>-->
    

    <!--Call To Action-->
   <!--<section class="call-to-action">
    	<div class="auto-container">
        	<div class="row clearfix">

                <div class="column col-md-9 col-sm-12 col-xs-12">
                	<h2>Subcribe for Newsletter</h2>
                    There are many variations of passages of Lorem Ipsum available but the majority have 
                </div>

                <div class="column col-md-3 col-sm-12 col-xs-12">
                	<div class="text-right padd-top-20">
                		<a href="contact.html" class="theme-btn btn-style-two">Subscribe Now!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>-->
    
    
    <!--Main Footer-->
    <footer class="main-footer" style="background-image:url(images/background/bg-page-title.jpg);">
    	
        <!--Footer Upper-->        
        <div class="footer-upper">
            <div class="auto-container">
                <div class="row clearfix">
                	
                    <!--Two 4th column-->
                    <div class="col-md-6 col-sm-12 col-xs-12">


                                    <div class="logo center-block"><a href="index.php"><img src="images/garimore.png" style="width: 17em;" alt="" class="center-block"></a></div>
                                    <div class="text text-center">
                                        <p>Acompanhe-nos nas redes sociais </p>
                                    </div>
                                    
                                    <div class="social-links clearfix text-center">
                                        <a href="https://www.facebook.com/Garimore-1722715218021459/" class="facebook img-circle"><span class="fa fa-facebook-f"></span></a>
                                        <a href="#" class="twitter img-circle"><span class="fa fa-twitter"></span></a>
                                        <!--<a href="#" class="google-plus img-circle"><span class="fa fa-google-plus"></span></a>-->
                                        <a href="https://www.tumblr.com/blog/garimore-casas" class="linkedin img-circle"><span class="fa fa-tumblr"></span></a>
                                        <a href="#" class="linkedin img-circle"><span class="fa fa-instagram"></span></a>
                                    </div>
                                    

                    		<!--Footer Column-->
                        	<!--<div class="col-lg-6 col-sm-6 col-xs-12 column">
                            	<div class="footer-widget tweets-widget">
                                	<h2>Latest Tweets</h2>	
                                    <div class="tweet">
                                    	<div class="icon"><span class="fa fa-twitter"></span></div>
                                        <div class="content"><a href="#">If you need a crown or lorem an implant you will pay it gap it</a></div>
                                        <div class="time">July 2, 2016</div>
                                    </div>
                                    
                                    <div class="tweet">
                                    	<div class="icon"><span class="fa fa-twitter"></span></div>
                                        <div class="content"><a href="#">If you need a crown or lorem an implant you will pay it gap it</a></div>
                                        <div class="time">July 1, 2016</div>
                                    </div>
                                    
                                </div>
                            </div>-->
                            

                    </div><!--Two 4th column End-->
                    
                    <!--Two 4th column-->
                    <div class="col-md-6 col-sm-12 col-xs-12">

                                <h2 class=" text-center">Site</h2>

                                    <ul class=" text-center">
                                        <li><a href="quem-somos">Quem Somos</a></li>
                                        <li><a href="perguntas-frequentes">FAQ</a></li>

                                        <li><a href="contacto">Contacte-nos</a></li>
                                    </ul>
        

                            
                            <!--Footer Column-->
                            <!--<div class="col-lg-7 col-sm-6 col-xs-12 column">
                                <div class="footer-widget news-widget">
                                	<h2>Ultimas noticias</h2>
                                    
                                    <!--News Post-->
                                    <!--<div class="news-post">
                                        <div class="news-content">
                                        	<figure class="image-thumb"><img src="images/resource/post-thumb-1.jpg" alt=""></figure>
                                            <h4><a href="#">Quality House</a></h4>
                                        	<div class="text"><a href="#">Get Best Home in Cheap..</a></div>
                                        </div>
                                        <div class="time">June 2, 2016</div>
                                    </div>
                                    

                                    <div class="news-post">
                                        <div class="news-content">
                                        	<figure class="image-thumb"><img src="images/resource/post-thumb-2.jpg" alt=""></figure>
                                            <h4><a href="#">Quality House</a></h4>
                                        	<div class="text"><a href="#">Get Best Home in Cheap..</a></div>
                                        </div>
                                        <div class="time">June 2, 2016</div>
                                    </div>-->
                                    

                            </div>
                    	</div>
                    </div><!--Two 4th column End-->
                    
                </div>
                


        
        <!--Footer Bottom-->
    	<div class="footer-bottom">
            <div class="auto-container clearfix">
                <!--Copyright-->
                <div class="copyright text-center">Copyright 2017 &copy; Desenvolvido por <a href="http://www.codeboys.pt">Codeboys</a></div>
            </div>
        </div>
        
    </footer>
    
    
</div>
<!--End pagewrapper-->

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target=".main-header"><span class="icon flaticon-building"></span></div>


<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/sweetalert.min.js"></script>
<script src="js/revolution.min.js"></script>
<script src="js/jquery.fancybox.pack.js"></script>
<script src="js/isotope.js"></script>
<script src="js/owl.js"></script>

<!-- Master Slider -->
<script src="js/masterslider/jquery.easing.min.js"></script>
<script src="js/masterslider/masterslider.min.js"></script>
<!--Locations Map JS-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA"></script>
<script src="js/jquery.gmap.js"></script>
<script src="js/map-script.js"></script>
<script src="js/panoramaView/jquery.pano.js"></script>
<!--Locations Map End-->
<script src="js/wow.js"></script>
<script src="js/script.js"></script>
</body>
</html>
