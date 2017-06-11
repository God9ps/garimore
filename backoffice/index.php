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
    include "menu.php";
?>

<!-- main content -->
<section class="content home" id="mainContainer">
<?php
    if (!isset($_REQUEST['pagina']) || $_REQUEST['pagina'] == ''){
        include_once "main.php";
    }else{
        include_once $_REQUEST['pagina'].".php";
    }
?>
</section>
    <!-- main content -->
<?php
    include_once "footer.php";
}


?>


