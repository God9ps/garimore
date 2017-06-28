
<?php

    include_once 'Email.class.php';

    $rsEmail = new Alerta();

    $id = $_POST['id'];
    $paga = $_POST['paga'];
    $emailPara = $_POST['email'];
    $nomePara = $_POST['nome'];
    $assunto = "Monte do Ganhão - Aviso de receção de pagamento";
    $emailDe = "montedoganhao@gmail.com";
    $nomeDe = "Monte do Ganhão, Lda";
    $descricao = "<h3>Encomenda {$id} paga</h3>";
    $descricao .= "<p>Informamos o nosso cliente {$nomePara} que recebemos o pagamento da encomenda.</p>";
    $descricao .= "<p>O envio será efectuado no mais curto espaço de tempo.</p>";
    $descricao .= "<p>Obrigado pela sua preferência</p>";

    echo $rsEmail->enviarEmail($assunto, $descricao, $emailDe, $nomeDe, $emailPara, $nomePara);


