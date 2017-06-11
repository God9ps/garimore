<link rel="stylesheet" href="Datatable/dataTables.css">
<script charset="utf-8" src="Datatable/webapp.js"></script>

<link rel="stylesheet" href="leaflet/sweetalert2.css">

<script src="leaflet/sweetalert2.js"></script>

<script type="text/javascript" src="leaflet/maps.js"></script>

<link href="leaflet/estilo.css" type="text/css" rel="stylesheet"/>

<!--<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyC0M_1QTf8_dP30qKBAeywOmeqRdOEDXKs" async defer></script>-->
<!--    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6x_tGhuiObfyVTdNNh8wpTt3BHRJqJeY"-->
<link rel="stylesheet" href="leaflet/leaflet.css" />

<link rel="stylesheet" href="leaflet/auto-complete.css" />
<script src="leaflet/auto-complete.js"></script>
<script src="leaflet/leaflet.js"></script>
<!--<script src="../../../globais/places.min.js"></script>-->

<script src="leaflet/esri-leaflet.js"></script>

<link rel="stylesheet" href="leaflet/esri-leaflet-geocoder.css">

<script src="leaflet/esri-leaflet-geocoder.js"></script>


<div id="dialog" style="display: none">
    <div id="dvMap" style="height: 400px; width: 665px;">
    </div>
</div>

<div id="forms" style="width:790px;display: none">
    <div id="conteudo"></div>
</div>

<div id="confirm" style="display: none">
    <div id="content"></div>
</div>

<div style="text-align: center;">
<!--        <button id="btnTree" type="button" class="btn-sm btn-primary" style="float: inherit;margin-top: 0px;"><i class="fa fa-share-alt" aria-hidden="true"></i> Gerir Dependências das unidades</button>-->
</div>

    <div style="text-align: center; border-radius: 4px; font-size: 16px; width: 60%; margin-left: 20%; color:black; margin-top: 30px;">

        <h3>
            Gestão de Unidades
        </h3>

    </div>

<div id="page_container">
    <table class="datatable" id="tbl_unidades">
        <thead>
        <tr>
            <th class="no-sort" data-orderable="false" style="width: 20px!important; text-align: center" width="20px"></th>
            <th width="200px">Cod unidade</th>
            <th width="400px">Unidade</th>
            <th width="130px">Opções</th>
        </tr>
        </thead>
    </table>
</div>

<noscript id="noscript_container">
    <div id="noscript" class="error">
        <p>JavaScript support is needed to use this page.</p>
    </div>
</noscript>


