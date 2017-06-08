/**
 * Created by paulo on 07/06/2017.
 */
function loadPage(menuItem) {

    $.ajax({
        url : menuItem + '.php',
        success: function (retorno) {
            $("#mainContainer").html(retorno);
        }
    });
}

/*
$(document).ready(function () {

    $(".menuItem").click(function () {
        console.log($(this).attr('id'));
        $.ajax({
            url : $(this).attr('id') + '.php',
            success: function (retorno) {
                $("#mainContainer").html(retorno);
            }
        });
        return false;
    });

});*/
