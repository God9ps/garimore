
<?php

if (isset ( $_POST ['acao'] )) {
    $acao = $_POST ['acao'];
    //include_once 'classes/BdMySQL.class.php';
    //include_once 'classes/Encomenda.class.php';
    include_once '../classes/Alerta.class.php';
    require_once '../classes/Admin.class.php';
    //$rsEmail = new Alerta();

switch ($acao){

    case 'validar':
        $rsLogin = new \Admin\Admin();


        break;
}
    /*else if ($acao == "pagar"){
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
        echo $rsEncomenda->encomendaPaga($paga,$id);
        echo $rsEmail->enviarEmail($assunto, $descricao, $emailDe, $nomeDe, $emailPara, $nomePara);
//        $selectAdmin->atualizarAtivo($activo,$id);
    }*/
}


