<?php

session_start();

if (!isset($_SESSION['login']) || $_SESSION['login'] != 1){
    include_once "login.php";
}else{
    include_once "header.php";
    ?>

    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>
    <!-- #END# Overlay For Sidebars -->

    <?php
    include_once "search.php";
    include_once "topBar.php";
    include_once "menu.php";

    if (!isset($_GET['pagina']) || $_GET['pagina'] == ''){
        include_once "main.php";
    }else{
        include_once $_GET['pagina'].".php";
    }

    include_once "footer.php";
}


?>


