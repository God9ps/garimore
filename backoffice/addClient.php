<div class="container-fluid">
    <div class="block-header">
        <h2>Clientes</h2>
        <!--<small class="text-muted">Registo de novo cliente</small>-->
    </div>

    <!-- Advanced Form Example With Validation -->
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>Registo avançado de cliente</h2>
                    <!--<ul class="header-dropdown m-r--5">
                        <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);">Action</a></li>
                                <li><a href="javascript:void(0);">Another action</a></li>
                                <li><a href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>-->
                </div>
                <div class="body">
                    <form id="wizard_with_validation" method="POST">
                        <h3>Dados pessoais</h3>
                        <fieldset>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="name" required="">
                                    <label class="form-label">Nome</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="address">
                                    <label class="form-label">Morada</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="postCode">
                                    <label class="form-label">Código Postal</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="city">
                                    <label class="form-label">Localidade</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="country">
                                    <label class="form-label">País</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="date" class="form-control" name="birthDate">
                                    <label class="form-label">Data de Nascimento</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="tel" class="form-control" name="phone">
                                    <label class="form-label">Telefone/Telémovel</label>
                                </div>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line">
                                    <input type="email" class="form-control" name="email">
                                    <label class="form-label">E-Mail</label>
                                </div>
                            </div>
                        </fieldset>


                        <h3>Preferências</h3>
                        <fieldset>
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-md-6">

                                        <div class="form-group form-float">
                                            <label class="form-label">Negócio</label>
                                            <div class="form-line">
                                                <select class="form-control" name="listingTypes">
                                                    <option>Venda</option>
                                                    <option>Compra</option>
                                                    <option>Aluguer</option>
                                                    <option>Permuta</option>
                                                    <option>Remodelação</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-float">
                                            <label class="form-label">Intervalo de valores</label>
                                            <div class="m-t-10 form-line">
                                                <div id="rangeValue"></div>
                                                <div class="m-t-20 font-16"><b>Valores entre </b><span
                                                            class="minimo"></span> e <span class="maximo"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-md-6">
                                        <div class="form-group form-float">
                                            <label class="form-label">Negócio</label>
                                            <div class="form-line">
                                                <select class="form-control" name="propertyTypes">
                                                    <option>Apartamento</option>
                                                    <option>Moradia</option>
                                                    <option>Escritório</option>
                                                    <option>Loja</option>
                                                    <option>Garagem</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-float">
                                            <label class="form-label">Intervalo de Tipologia</label>
                                            <div class="m-t-10 form-line">
                                                <div id="rangeTipology"></div>
                                                <div class="m-t-20 font-16"><b>Tipologia entre </b><span
                                                            class="minimoT"></span> e <span class="maximoT"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group form-float">
                                            <div class="form-line">
                                                <textarea name="annotations" cols="30" rows="5"
                                                          class="form-control no-resize"></textarea>
                                                <label class="form-label">Anotações</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </fieldset>
                        <h3>Localização</h3>
                        <fieldset>

                            <div class="body">
                                <div class="row clearfix">

                                    <div class="col-md-12">
                                        <div class="form-group form-float">
                                            <div class="form-line">
                                                <input type="text" class="form-control" name="address" id="address">
                                                <label class="form-label">Morada</label>
                                            </div>
                                            <div id="map" style="width: 100%; height: 380px;"></div>
                                            <input type="hidden" name="geo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>

    <!-- #END# Advanced Form Example With Validation -->

    <!--<script src="assets/bundles/libscripts.bundle.js"></script>--> <!-- Lib Scripts Plugin Js -->
    <!--<script src="assets/bundles/vendorscripts.bundle.js"></script>--> <!-- Lib Scripts Plugin Js -->


    <script src="assets/plugins/nouislider/nouislider.js"></script> <!-- noUISlider Plugin Js -->

    <script src="assets/js/pages/forms/form-wizard.js"></script>
    <script src="assets/js/pages/forms/form-validation.js"></script>

    <script src="assets/plugins/jquery-validation/jquery.validate.js"></script> <!-- Jquery Validation Plugin Css -->
    <script src="assets/plugins/jquery-steps/jquery.steps.js"></script> <!-- JQuery Steps Plugin Js -->
    <script src="assets/plugins/sweetalert/sweetalert.min.js"></script> <!-- Sweet Alert Plugin Js -->

    <script src="assets/bundles/mainscripts.bundle.js"></script><!-- Custom Js -->

    <script src="assets/js/pages/forms/advanced-form-elements.js"></script>



