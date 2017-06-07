
<?php
session_start ();
/*if (($_SESSION ["login_status"] == 1)) {
include 'recursos/validar_sessao.php';*/

if (isset ( $_GET ['acao'] ))
{
    $acao = $_GET ['acao'];
    include_once '../../../bd/BdMySQL.class.php';
    include_once '../../../bd/Encomenda.class.php';
    include_once '../../../bd/Alerta.class.php';

    $rsEncomenda = new Encomenda();
    $rsEmail = new Alerta();

    if ($acao == "preencherTabela")
    {
        $sql = "SELECT * FROM vw_encomendas2";
        $resultado = $rsEncomenda->bd->executarSQL($sql);
        $data = array();
        $peso = 0;
        $fatura = 0;
        $total = 0;
        while ($row = $resultado->fetch(PDO::FETCH_ASSOC)) {

            $paga = ($row['paga'] == '1') ? "checked disabled" : "";
            $checkPaga = '<input type="checkbox" class="paga" email="'.$row['email'].'" nome="'.$row['nome'].'" value="'.$row['paga'].'" id="'.$row['idEncomenda'].'" name = "paga'.$row['idEncomenda'].'" '.$paga.'>';

            $enviada = ($row['enviada'] == true) ? "checked" : "";

            $data1 = new DateTime( $row['data'] );
            $dataactual = date('Y-m-d');
            $data2 = new DateTime( $dataactual );


            $intervalo = $data1->diff( $data2 );
            if ($intervalo->m >=1) {
                $btnEnvio = '<i style="color:green;cursor: pointer;" email="'.$row['email'].'" nome="'.$row['nome'].'" id="'.$row['idEncomenda'].'" class="fa fa-envelope faa-ring animated fa-1x fa-pull-right lembrete" title="Enviar lembrete"></i>';
//                   <i style="color:red;" class="fa fa-envelope faa-ring animated fa-1x fa-pull-right" title="Enviar lembrete"></i> '<i style="color:green;" class="fa fa-envelope faa-horizontal animated fa-pull-right" title="Enviar lembrete"></i>';
            }

            if ($row['nova'] == 1){
                $checkEnviada = '<input type="checkbox" class="enviada" email="'.$row['email'].'" nome="'.$row['nome'].'" value="'.$row['enviada'].'" id="'.$row['idEncomenda'].'" name = "enviada'.$row['idEncomenda'].'" '.$enviada.'><i style="color:red;" class="fa fa-bell faa-ring animated fa-1x fa-pull-right" title="Encomenda nova"></i>'.$btnEnvio;

            }else{
                $checkEnviada = '<input type="checkbox" class="enviada" email="'.$row['email'].'" nome="'.$row['nome'].'" value="'.$row['enviada'].'" id="'.$row['idEncomenda'].'" name = "enviada'.$row['idEncomenda'].'" '.$enviada.'>'.$btnEnvio;
            }



            $details  = '<div class="function_buttons">
                        <ul>
                            <li class="function_edit">
                                <a data-id="'   . $row['id'] . '" name="detail' . $row['id'] . '">
                                    <i class="fa fa-arrow-circle-down" aria-hidden="true">
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>';

            $functions  = '<div class="function_buttons" style="width:98%">
                            <ul>
                                <li class="function_edit" style="display:inline;float:left;">
                                    <a id="' . $row['id'].'" activo = "'.$row['activo'].'" data-id="'   . $row['id'] . '" data-name="' . $row['id'] . '" name="edit' . $row['id'] . '">
                                        <i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="function_delete" style="display:inline;float:right;">
                                   <a id="' . $row['id'].'" activo = "'.$row['activo'].'" data-id="'   . $row['id'] . '" data-name="' . $row['id'] . '" name="delete' . $row['id'] . '">
                                        <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>';

            $id=$row ['idEncomenda'];
            $classeChamada = "";

            $sqlDetalhe = "SELECT * FROM lista_encomenda as le
                INNER JOIN produto as p
                ON le.id_produto=p.id
                WHERE le.id_encomenda={$id}";

            $resDetalhe = $rsEncomenda->bd->executarSQL($sqlDetalhe);



            $thead = " <p>Data da encomenda : <h4><b>{$row['data']}</b></h4></p>
                                <table width='100%'>
                                    <tr>               
                                        <td><b>Imagem</b></td>
                                        <td><b>Produto</b></td>
                                        <td><b>Peso</b></td>
                                        <td><b>Preço</b></td>
                                        <td><b>Preço em Promoção</b></td>
                                        <td><b>Quantidade</b></td>
                                        <td><b>Total</b></td>
                                    </tr>
                                
                                <tbody>";

            while ($rowD = $resDetalhe->fetch(PDO::FETCH_ASSOC)) {


                if ($rowD["precoPromocao"] == 0){
                    $preco = $rowD["preco"];
                }else{
                    $preco = $rowD["precoPromocao"];
                }
                $total = ($rowD["quantidade"] * $preco);

                $peso += $rowD["peso"];
                $fatura += $total;

                $tr = $tr ."<tr>
                                <td><img src='../imagens/produtos/{$rowD["imagem"]}' width='50px'/></td>
                                <td>{$rowD["nome"]}</td>
                                <td>{$rowD["peso"]}</td>
                                <td>{$rowD["preco"]}</td>
                                <td>{$rowD["precoPromocao"]}</td>
                                <td>{$rowD["quantidade"]}</td>
                                
                                <td>{$total}</td>
                            </tr>";

            }
            $tfoot = "</tbody>
                            <tfoot>
                                <tr>
                                    <td colspan=2 ><h2><b>Peso Total</b></h2></td>
                    
                                    <td><h2><b>{$peso}</b></h2></td>
                                    <td colspan=3><h2><b>Total da Fatura</b></h2></td>
                    
                                    <td><h2><b>{$fatura}</b></h2></td>
                                </tr>
                            </tfoot>
                            </table>";

            $tabela = $thead . $tr . $tfoot;



            array_push($data, array
            (
                'DT_RowId' => $id,
                'DT_RowClass' => $classeChamada,
                'DT_RowData' => 'color=red',
                'id' => $id,
                'details' => $details,
                'nome' => $row ['nome'],
                'morada' => $row ['morada'],
                'localidade' => $row ['localidade'],
                'telefone' => $row ['telefone'],
                'nif' => $row ['nif'],
                'email' => $row ['email'],
                'tipo_envio' => $row ['tipo_envio'],
                'paga' => $checkPaga,

                'enviada' => $checkEnviada,
                'tabela' => $tabela
            ));
        }
        $results = array(
            "sEcho" => "",
            "iTotalRecords" => count($data),
            "iTotalDisplayRecords" => count($data),
            "aaData" => $data);
        echo json_encode($results);
    }

    if ($acao == "preencherEncomendasTratadas")
    {
        $sql = "SELECT * FROM vw_encomendasTratadas2";
        $resultado = $rsEncomenda->bd->executarSQL($sql);
        $data = array();
        $peso = 0;
        $fatura = 0;
        $total = 0;
        while ($row = $resultado->fetch(PDO::FETCH_ASSOC)) {

            $paga = ($row['paga'] == '1') ? "checked disabled" : "";
            $checkPaga = '<input type="checkbox" class="paga" email="'.$row['email'].'" nome="'.$row['nome'].'" value="'.$row['paga'].'" id="'.$row['idEncomenda'].'" name = "paga'.$row['idEncomenda'].'" '.$paga.'>';

            $enviada = ($row['enviada'] == true) ? "checked disabled" : "";
            $checkEnviada = '<input type="checkbox" class="enviada" email="'.$row['email'].'" nome="'.$row['nome'].'" value="'.$row['enviada'].'" id="'.$row['idEncomenda'].'" name = "enviada'.$row['idEncomenda'].'" '.$enviada.'>';

            $details  = '<div class="function_buttons">
                        <ul>
                            <li class="function_edit">
                                <a data-id="'   . $row['id'] . '" name="detail' . $row['id'] . '">
                                    <i class="fa fa-arrow-circle-down" aria-hidden="true">
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>';

            $functions  = '<div class="function_buttons" style="width:98%">
                            <ul>
                                <li class="function_edit" style="display:inline;float:left;">
                                    <a id="' . $row['id'].'" activo = "'.$row['activo'].'" data-id="'   . $row['id'] . '" data-name="' . $row['id'] . '" name="edit' . $row['id'] . '">
                                        <i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="function_delete" style="display:inline;float:right;">
                                   <a id="' . $row['id'].'" activo = "'.$row['activo'].'" data-id="'   . $row['id'] . '" data-name="' . $row['id'] . '" name="delete' . $row['id'] . '">
                                        <i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>';

            $id=$row ['idEncomenda'];
            $classeChamada = "";


            $sqlDetalhe = "SELECT * FROM lista_encomenda as le
                INNER JOIN produto as p
                ON le.id_produto=p.id
                WHERE le.id_encomenda={$id}";

            $resDetalhe = $rsEncomenda->bd->executarSQL($sqlDetalhe);



            $thead = " <p>Data da encomenda : <h4><b>{$row['data']}</b></h4></p>
                            <table width='100%'>
                                
                                    <tr>               
                                        <td><b>Imagem</b></td>
                                        <td><b>Produto</b></td>
                                        <td><b>Peso</b></td>
                                        <td><b>Preço</b></td>
                                        <td><b>Preço em Promoção</b></td>
                                        <td><b>Quantidade</b></td>
                                        <td><b>Total</b></td>
                                    </tr>
                                
                                <tbody>";

            while ($rowD = $resDetalhe->fetch(PDO::FETCH_ASSOC)) {


                if ($rowD["precoPromocao"] == 0){
                    $preco = $rowD["preco"];
                }else{
                    $preco = $rowD["precoPromocao"];
                }
                $total = ($rowD["quantidade"] * $preco);

                $peso += $rowD["peso"];
                $fatura += $total;

                $tr = $tr ."<tr>
                                <td><img src='../imagens/produtos/{$rowD["imagem"]}' width='50px'/></td>
                                <td>{$rowD["nome"]}</td>
                                <td>{$rowD["peso"]}</td>
                                <td>{$rowD["preco"]}</td>
                                <td>{$rowD["precoPromocao"]}</td>
                                <td>{$rowD["quantidade"]}</td>
                                
                                <td>{$total}</td>
                            </tr>";

            }
            $tfoot = "</tbody>
                            <tfoot>
                                <tr>
                                    <td colspan=2 ><h2><b>Peso Total</b></h2></td>
                    
                                    <td><h2><b>{$peso}</b></h2></td>
                                    <td colspan=3><h2><b>Total da Fatura</b></h2></td>
                    
                                    <td><h2><b>{$fatura}</b></h2></td>
                                </tr>
                            </tfoot>
                            </table>";

            $tabela = $thead . $tr . $tfoot;




            array_push($data, array
            (
                'DT_RowId' => $id,
                'DT_RowClass' => $classeChamada,
                'DT_RowData' => 'color=red',
                'id' => $id,
                'details' => $details,
                'nome' => $row ['nome'],
                'morada' => $row ['morada'],
                'localidade' => $row ['localidade'],
                'telefone' => $row ['telefone'],
                'nif' => $row ['nif'],
                'email' => $row ['email'],
                'tipo_envio' => $row ['tipo_envio'],
                'paga' => $checkPaga,
                'enviada' => $checkEnviada,
                'tabela' => $tabela


            ));
        }

        $results = array(
            "sEcho" => "",
            "iTotalRecords" => count($data),
            "iTotalDisplayRecords" => count($data),
            "aaData" => $data);
        echo json_encode($results);
    }

    else if ($acao == "pagar"){
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
    }


    else if ($acao == "enviar") {
        $id = $_POST['id'];
        $enviada = $_POST['enviada'];
        $emailPara = $_POST['email'];
        $nomePara = $_POST['nome'];
        $assunto = "Monte do Ganhão - Envio de Encomenda";
        $emailDe = "montedoganhao@gmail.com";
        $nomeDe = "Monte do Ganhão, Lda";
        $descricao = "<h3>Encomenda {$id} enviada</h3>";
        $descricao .= "<p>A Encomenda em nome de {$nomePara} foi enviada para a morada indicada no registo.</p>";
        $descricao .= "<p>Obrigado pela sua preferência</p>";

        echo $rsEncomenda->encomendaEnviada($enviada, $id);
        echo $rsEmail->enviarEmail($assunto, $descricao, $emailDe, $nomeDe, $emailPara, $nomePara);
//        $selectAdmin->atualizarAtivo($activo,$id);
    }
    else if ($acao == "lembrete"){
            $id = $_POST['id'];

            $emailPara = $_POST['email'];
            $nomePara = $_POST['nome'];
            $assunto = "Monte do Ganhão - Lembrete de encomenda";
            $emailDe = "montedoganhao@gmail.com";
            $nomeDe = "Monte do Ganhão, Lda";
            $descricao = "<h3>Encomenda {$id}</h3>";
            $descricao .= "<p>A Encomenda em nome de {$nomePara} foi registada no nosso serviço, no entanto ainda não acusámos o pagamento.</p>";
            $descricao .= "<p>Não perca a oportunidade de disfrutar dos nossos produtos. Entre em contacto connosco e obtenha novas instruções de pagamento</p>";
            $descricao .= "<p>Obrigado pela sua preferência</p>";

            echo $rsEmail->enviarEmail($assunto, $descricao, $emailDe, $nomeDe, $emailPara, $nomePara);

        }
    else if ($acao == "editarProduto") {
        $id = $_GET['id'];
        $activo = $_GET['activo'];
        $activo = $activo == 1 ? 0 : 1;
        $resultado = $rsProduto->produtoPorId($id);
        $row = $resultado->fetch(PDO::FETCH_ASSOC);
//        $selectAdmin->atualizarAtivo($activo,$id);
    }
    else if ($acao == "updateProduto") {


        $id = $_POST['id'];
        $categoria = $_POST['categoria'];
        $nome = $_POST['nome'];
        $peso = $_POST['peso'];
        $preco = $_POST['preco'];
        $promocao = $_POST['promocao'];
        $precoPromocao = $_POST['precoPromocao'];
        $stock = $_POST['stock'];
        $estrelas = $_POST['estrelas'];
        $activo = 1;
        $descricao = $_POST['descricao'];


        echo $rsProduto->updateProduto($id, $nome, $descricao,$peso,$preco, $promocao,$precoPromocao,$stock,$estrelas);

    } else if ($acao == "inserirProduto") {

        $categoria = $_POST['categoria'];
        $nome = $_POST['nome'];
        $peso = $_POST['peso'];
        $preco = $_POST['preco'];
        $promocao = $_POST['promocao'];
        $precoPromocao = $_POST['precoPromocao'];
        $stock = $_POST['stock'];
        $estrelas = $_POST['estrelas'];
        $activo = 1;
        $descricao = $_POST['descricao'];


        echo $rsProduto->inserirProduto($categoria,$nome,$peso,$preco,$promocao,$precoPromocao,$stock,$estrelas,$descricao,$activo);

    }


    //MAIS ACOES
}
else
    echo "acao?";
/*}
else
{
    header('Location: index.php');
}*/
?>

