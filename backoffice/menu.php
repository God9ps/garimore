
<!--Side menu and right menu -->
<section>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info">
            <div class="admin-image"> <img src="assets/images/random-avatar7.jpg" alt=""> </div>
            <div class="admin-action-info"> <span>Bem vindo</span>
                <h3><?php echo $_SESSION['user_name']; ?></h3>
                <ul>
                    <li><a data-placement="bottom" title="Go to Inbox" href="mail-inbox.htm"><i class="zmdi zmdi-email"></i></a></li>
                    <li><a data-placement="bottom" title="Go to Profile" href="profile.html"><i class="zmdi zmdi-account"></i></a></li>
                    <li><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i class="zmdi zmdi-settings"></i></a></li>
                    <li><a data-placement="bottom" title="Sair" href="#" onclick="logout()"><i class="zmdi zmdi-sign-in"></i></a></li>
                </ul>
            </div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu">
            <ul class="list">
                <li class="header">NAVEGAÇÃO</li>
                <li class="active open"><a href="index.php?pagina=main"><i class="zmdi zmdi-home"></i><span>Página Inicial</span></a></li>
                <li><a href="index.php?pagina=addClient"><i class="fa fa-user"></i><span>Registar Cliente</span></a></li>

                <li> <a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-accounts"></i><span>Clientes</span> </a>
                    <ul class="ml-menu">
                        <li><a href="index.php?pagina=addClient">Registar Cliente</a></li>
                    </ul>
                </li>
                <li><a href="events.htm"><i class="zmdi zmdi-calendar-check"></i><span>Events</span> </a></li>
                <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-city"></i><span>Property</span> </a>
                    <ul class="ml-menu">
                        <li><a href="property-list.htm">Property List</a></li>
                        <li><a href="property-list3.htm">3 Column</a></li>
                        <li><a href="property-list4.htm">4 Column</a></li>
                        <li><a href="add-property.htm">Add Property</a></li>
                        <li><a href="property-detail.htm">Property Detail</a></li>
                    </ul>
                </li>
                <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-city"></i><span>Types</span> </a>
                    <ul class="ml-menu">
                        <li><a href="apartment.htm">Apartment</a></li>
                        <li><a href="office.htm">Office</a></li>
                        <li><a href="shop.htm">Shop</a></li>
                        <li><a href="villa.htm">Villa</a></li>
                    </ul>
                </li><li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-accounts-outline"></i><span>Agents</span> </a>
                    <ul class="ml-menu">
                        <li><a href="agent.htm">All Agents</a></li>
                        <li><a href="add-agent.htm">Add Agent</a></li>
                        <li><a href="agent-profile.htm">Agent Profile</a></li>
                        <li><a href="agent-invoice.htm">Agent Invoice</a></li>
                    </ul>
                </li>
                <li><a href="map.htm"><i class="zmdi zmdi-pin"></i><span>Map</span></a></li>
                <li><a href="reports.htm"><i class="zmdi zmdi-file-text"></i><span>Reports</span></a></li>
                <li><a href="widgets.htm"><i class="zmdi zmdi-delicious"></i><span>Widgets</span></a></li>
                <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-blogger"></i><span>Blogger</span> </a>
                    <ul class="ml-menu">
                        <li> <a href="blog.htm">Blog List</a></li>
                        <li> <a href="blog-details.htm">Blog Single</a></li>
                    </ul>
                </li>
                <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-copy"></i><span>Extra Pages</span> </a>
                    <ul class="ml-menu">
                        <li><a href="sign-in.htm">Sign In</a> </li>
                        <li><a href="sign-up.htm">Sign Up</a> </li>
                        <li><a href="forgot-password.htm">Forgot Password</a> </li>
                        <li><a href="404.htm">Page 404</a> </li>
                        <li><a href="500.htm">Page 500</a> </li>
                        <li><a href="page-offline.htm">Page Offline</a> </li>
                        <li><a href="locked.htm">Locked Screen</a> </li>
                        <li><a href="blank.htm">Blank Page</a> </li>
                        <li><a href="contact.htm">Contact Us</a> </li>
                    </ul>
                </li>
                <li> <a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-assignment"></i><span>Forms</span> </a>
                    <ul class="ml-menu">
                        <li> <a href="basic-form-elements.htm">Basic Form Elements</a> </li>
                        <li> <a href="advanced-form-elements.htm">Advanced Form Elements</a> </li>
                        <li> <a href="form-examples.htm">Form Examples</a> </li>
                        <li> <a href="form-validation.htm">Form Validation</a> </li>
                        <li> <a href="form-wizard.htm">Form Wizard</a> </li>
                        <li> <a href="editors.htm">Editors</a> </li>
                    </ul>
                </li>
                <li> <a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-swap-alt"></i><span>User Interface (UI)</span> </a>
                    <ul class="ml-menu">
                        <li><a href="typography.htm">Typography</a> </li>
                        <li><a href="helper-classes.htm">Helper Classes</a></li>
                        <li><a href="alerts.htm">Alerts</a> </li>
                        <li><a href="animations.htm">Animations</a> </li>
                        <li><a href="badges.htm">Badges</a> </li>
                        <li><a href="breadcrumbs.htm">Breadcrumbs</a> </li>
                        <li><a href="buttons.htm">Buttons</a> </li>
                        <li><a href="collapse.htm">Collapse</a> </li>
                        <li><a href="colors.htm">Colors</a> </li>
                        <li><a href="dialogs.htm">Dialogs</a> </li>
                        <li><a href="icons.htm">Icons</a> </li>
                        <li><a href="labels.htm">Labels</a> </li>
                        <li><a href="list-group.htm">List Group</a> </li>
                        <li><a href="media-object.htm">Media Object</a> </li>
                        <li><a href="modals.htm">Modals</a> </li>
                        <li><a href="notifications.htm">Notifications</a> </li>
                        <li><a href="pagination.htm">Pagination</a> </li>
                        <li><a href="preloaders.htm">Preloaders</a> </li>
                        <li><a href="progressbars.htm">Progress Bars</a> </li>
                        <li><a href="range-sliders.htm">Range Sliders</a> </li>
                        <li><a href="sortable-nestable.htm">Sortable & Nestable</a> </li>
                        <li><a href="tabs.htm">Tabs</a> </li>
                        <li><a href="thumbnails.htm">Thumbnails</a> </li>
                        <li><a href="tooltips-popovers.htm">Tooltips & Popovers</a> </li>
                        <li><a href="waves.htm">Waves</a> </li>
                    </ul>
                </li>
                <li class="header">LABELS</li>
                <li><a href="javascript:void(0);"><i class="zmdi zmdi-chart-donut col-red"></i><span>Important</span></a></li>
                <li><a href="javascript:void(0);"><i class="zmdi zmdi-chart-donut col-amber"></i><span>Warning</span></a></li>
                <li><a href="javascript:void(0);"><i class="zmdi zmdi-chart-donut col-blue"></i><span>Information</span></a></li>
            </ul>
        </div>
        <!-- #Menu -->
    </aside>
    <!-- #END# Left Sidebar -->
    <!-- Right Sidebar -->
    <aside id="rightsidebar" class="right-sidebar">
        <ul class="nav nav-tabs tab-nav-right" role="tablist">
            <li role="presentation" class="active"><a href="#skins" data-toggle="tab">Skins</a></li>
            <li role="presentation"><a href="#chat" data-toggle="tab">Chat</a></li>
            <li role="presentation"><a href="#settings" data-toggle="tab">Setting</a></li>
        </ul>
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active in active" id="skins">
                <ul class="demo-choose-skin">
                    <li data-theme="red">
                        <div class="red"></div>
                        <span>Red</span> </li>
                    <li data-theme="purple">
                        <div class="purple"></div>
                        <span>Purple</span> </li>
                    <li data-theme="blue" class="active">
                        <div class="blue"></div>
                        <span>Blue</span> </li>
                    <li data-theme="cyan">
                        <div class="cyan"></div>
                        <span>Cyan</span> </li>
                    <li data-theme="green">
                        <div class="green"></div>
                        <span>Green</span> </li>
                    <li data-theme="deep-orange">
                        <div class="deep-orange"></div>
                        <span>Deep Orange</span> </li>
                    <li data-theme="blue-grey">
                        <div class="blue-grey"></div>
                        <span>Blue Grey</span> </li>
                    <li data-theme="black">
                        <div class="black"></div>
                        <span>Black</span> </li>
                    <li data-theme="blush">
                        <div class="blush"></div>
                        <span>Blush</span> </li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="chat">
                <div class="demo-settings">
                    <div class="search">
                        <div class="input-group">
                            <div class="form-line">
                                <input type="text" class="form-control" placeholder="Search..." required="" autofocus="">
                            </div>
                        </div>
                    </div>
                    <h6>Recent</h6>
                    <ul>
                        <li class="online">
                            <div class="media"> <a class="pull-left" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar4.jpg" alt=""> </a>
                                <div class="media-body"> <span class="name">Claire Sassu</span> <span class="message">Can you share the...</span> <span class="badge badge-outline status"></span> </div>
                            </div>
                        </li>
                        <li class="online">
                            <div class="media"> <a class="pull-left" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar5.jpg" alt=""> </a>
                                <div class="media-body">
                                    <div class="media-body"> <span class="name">Maggie jackson</span> <span class="message">Can you share the...</span> <span class="badge badge-outline status"></span> </div>
                                </div>
                            </div>
                        </li>
                        <li class="online">
                            <div class="media"> <a class="pull-left" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar3.jpg" alt=""> </a>
                                <div class="media-body">
                                    <div class="media-body"> <span class="name">Joel King</span> <span class="message">Ready for the meeti...</span> <span class="badge badge-outline status"></span> </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h6>Contacts</h6>
                    <ul>
                        <li class="offline">
                            <div class="media"> <a class="pull-left" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar4.jpg" alt=""> </a>
                                <div class="media-body">
                                    <div class="media-body"> <span class="name">Joel King</span> <span class="badge badge-outline status"></span> </div>
                                </div>
                            </div>
                        </li>
                        <li class="online">
                            <div class="media"> <a class="pull-left" role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar5.jpg" alt=""> </a>
                                <div class="media-body">
                                    <div class="media-body"> <span class="name">Joel King</span> <span class="badge badge-outline status"></span> </div>
                                </div>
                            </div>
                        </li>
                        <li class="offline">
                            <div class="media"> <a class="pull-left " role="button" tabindex="0"> <img class="media-object " src="assets/images/random-avatar6.jpg" alt=""> </a>
                                <div class="media-body">
                                    <div class="media-body"> <span class="name">Joel King</span> <span class="badge badge-outline status"></span> </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="settings">
                <div class="demo-settings">
                    <p>GENERAL SETTINGS</p>
                    <ul class="setting-list">
                        <li> <span>Report Panel Usage</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked="">
                                    <span class="lever"></span></label>
                            </div>
                        </li>
                        <li> <span>Email Redirect</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox">
                                    <span class="lever"></span></label>
                            </div>
                        </li>
                    </ul>
                    <p>SYSTEM SETTINGS</p>
                    <ul class="setting-list">
                        <li> <span>Notifications</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked="">
                                    <span class="lever"></span></label>
                            </div>
                        </li>
                        <li> <span>Auto Updates</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked="">
                                    <span class="lever"></span></label>
                            </div>
                        </li>
                    </ul>
                    <p>ACCOUNT SETTINGS</p>
                    <ul class="setting-list">
                        <li> <span>Offline</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox">
                                    <span class="lever"></span></label>
                            </div>
                        </li>
                        <li> <span>Location Permission</span>
                            <div class="switch">
                                <label>
                                    <input type="checkbox" checked="">
                                    <span class="lever"></span></label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
    <!-- #END# Right Sidebar -->
</section>
<!--Side menu and right menu -->