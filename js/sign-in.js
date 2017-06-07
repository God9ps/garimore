function logout() {
    console.log("logout");
    $.ajax({
        url: './controller.php',
        dataType: 'json',
        cache: 'false',
        type: 'post',
        data: {acao: 'logout'},
        success: function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                window.location.href = './index.php';
            } else {
                swal({
                    title: "Oooops!",
                    text: "Erro inesperado.",
                    timer: 3000,
                    type: "error",
                    showConfirmButton: false
                });
            }

        },
        error: function (e, data) {
            console.log(e);
            console.log(data);
        }
    });
    return false;
}

$(document).ready(function () {

    $(function () {
        $('#sign_in').validate({
            highlight: function (input) {
                console.log(input);
                $(input).parents('.form-line').addClass('error');
            },
            unhighlight: function (input) {
                $(input).parents('.form-line').removeClass('error');
            },
            errorPlacement: function (error, element) {
                $(element).parents('.input-group').append(error);
            }
        });
    });

    // sign up btn ================================================
    $('#login').on('submit', function () {
        var dados = $(this).serialize() + "&acao=validar";

        $.ajax({
            url: './controller.php',
            dataType: 'json',
            cache: 'false',
            type: 'post',
            data: dados,
            success: function (data) {
                console.log(data);
                if (data['status'] == 'success') {
                    window.location.href = './index.php';
                } else {
                    swal({
                        title: "Oooops!",
                        text: "E-Mail ou password incorrectos.",
                        timer: 3000,
                        type: "error",
                        showConfirmButton: false
                    });

                }

            },
            error: function (e, data) {
                console.log(e);
                console.log(data);
            }

        });

        return false;
    });

    /*$('#logout').click(function () {
        console.log("logout");
        $.ajax({
            url: './controller.php',
            dataType: 'json',
            cache: 'false',
            type: 'post',
            data: {acao: 'logout'},
            success: function (data) {
                console.log(data);
                if (data['status'] == 'success') {
                    window.location.href = './index.php';
                } else {
                    swal({
                        title: "Oooops!",
                        text: "Erro inesperado.",
                        timer: 3000,
                        type: "error",
                        showConfirmButton: false
                    });
                }

            },
            error: function (e, data) {
                console.log(e);
                console.log(data);
            }
        });
        return false;
    });*/


    $('.close').on('click', function () {
        $('.container').stop().removeClass('active');
    });
});

