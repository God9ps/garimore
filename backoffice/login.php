<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>:: Swift - Real Estate ::</title>
    <!-- Favicon-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- Custom Css -->
    <link href="assets/css/main.css" rel="stylesheet">
    <link href="assets/css/login.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../css/sweetalert.css">
    <!-- Swift Themes. You can choose a theme from css/themes instead of get all themes -->
    <link href="assets/css/themes/all-themes.css" rel="stylesheet">
    <link href="../css/font-awesome.css" rel="stylesheet">

</head>
<body class="login-page authentication">

<div class="container">
    <div class="card-top"></div>
    <div class="card">
        <h1 class="title"><img src="/images/garimore.png" style="width: 80%" class="img-responsive" /></h1>
        <div class="col-md-12">
            <form id="login">

                <div class="input-group"> <span class="input-group-addon"> <i class="zmdi zmdi-account"></i> </span>
                    <div class="form-line">
                        <input type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="">
                    </div>
                </div>
                <div class="input-group"> <span class="input-group-addon"> <i class="zmdi zmdi-lock"></i> </span>
                    <div class="form-line">
                        <input type="password" class="form-control" name="password" placeholder="Password" required="">
                    </div>
                </div>
                <div class="text-center">
                    <input type="submit" class="btn btn-raised waves-effect g-bg-blue" value="Entrar" />
                </div>
                <div>
                    <div class="text-center"> <a href="forgot-password.htm">Esqueci a password</a></div>
                </div>
            </form>
        </div>
    </div>
</div>



<!-- Jquery Core Js -->
<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js -->
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js -->

<!--<script src="assets/bundles/mainscripts.bundle.js"></script>--><!-- Custom Js -->
<script src="../js/sign-in.js"></script>
<script src="assets/plugins/jquery-validation/jquery.validate.js"></script>
<script src="../js/sweetalert.min.js"></script>

</body>
</html>