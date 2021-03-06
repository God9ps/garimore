

    <div class="container-fluid">
        <div class="block-header">
            <h2>Dashboard</h2>
            <small class="text-muted">Welcome to Swift application</small>
        </div>

        <div class="row clearfix top-report">
            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                <div class="card">
                    <div class="panel-body">
                        <h3>1,100</h3>
                        <p class="text-muted">New Project</p>
                        <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                        </div>
                        <span class="text-small">10% higher than last month</span> </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                <div class="card">
                    <div class="panel-body">
                        <h3>60,800</h3>
                        <p class="text-muted">Total Project</p>
                        <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                        </div>
                        <span class="text-small">4% higher than last month</span> </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                <div class="card">
                    <div class="panel-body">
                        <h3>12,521</h3>
                        <p class="text-muted">Properties for Rent</p>
                        <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                        </div>
                        <span class="text-small">4% higher than last month</span> </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                <div class="card">
                    <div class="panel-body">
                        <h3>$ 24,500</h3>
                        <p class="text-muted">Total Earnings(Years)</p>
                        <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                        </div>
                        <span class="text-small">15% higher than last month</span> </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>Earnings</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <canvas id="line_chart" height="150"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>Sale Analysis Report</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <canvas id="bar_chart" height="150"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="row clearfix">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card">
                    <div class="header">
                        <h2>Sale Income<small>18% High then last month</small></h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <div class="stats-report">
                            <div class="stat-item">
                                <h5>Overall</h5>
                                <b class="col-indigo">70.40%</b></div>
                            <div class="stat-item">
                                <h5>Montly</h5>
                                <b class="col-indigo">25.80%</b></div>
                            <div class="stat-item">
                                <h5>Day</h5>
                                <b class="col-indigo">12.50%</b></div>
                        </div>
                        <div class="sparkline" data-type="line" data-spot-radius="3" data-highlight-spot-color="rgb(63, 81, 181)" data-highlight-line-color="#222" data-min-spot-color="rgb(233, 30, 99)" data-max-spot-color="rgb(63, 81, 181)" data-spot-color="rgb(63, 81, 181, 0.7)" data-offset="90" data-width="100%" data-height="150px" data-line-width="1" data-line-color="rgb(63, 81, 181, 0.7)" data-fill-color="rgba(63, 81, 181, 0.3)"> 6,1,3,3,6,3,2,2,8,2 </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card">
                    <div class="header">
                        <h2>Rent Income<small>18% High then last month</small></h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <div class="stats-report">
                            <div class="stat-item">
                                <h5>Overall</h5>
                                <b class="col-blue-grey">80.40%</b></div>
                            <div class="stat-item">
                                <h5>Montly</h5>
                                <b class="col-blue-grey">13.00%</b></div>
                            <div class="stat-item">
                                <h5>Day</h5>
                                <b class="col-blue-grey">9.50%</b></div>
                        </div>
                        <div class="sparkline" data-type="bar" data-width="97%" data-height="150px" data-bar-width="16" data-bar-spacing="7" data-bar-color="rgb(96, 125, 139)"> 6,7,8,9,10,5,13,18,21,7,9,11,12,5 </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div class="card">
                    <div class="header">
                        <h2>Income Analysis <small>18% High then last month</small></h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <div class="stats-report">
                            <div class="stat-item">
                                <h5>Overall</h5>
                                <b class="col-black">84.60%</b></div>
                            <div class="stat-item">
                                <h5>Montly</h5>
                                <b class="col-black">15.40%</b></div>
                            <div class="stat-item">
                                <h5>Day</h5>
                                <b class="col-black">5.10%</b></div>
                        </div>
                        <div class="sparkline-pie text-center">6,4,8</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row clearfix">
            <!-- Task Info -->
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="card">
                    <div class="header">
                        <h2>TASK INFOS</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <div class="table-responsive">
                            <table class="table table-hover dashboard-task-infos">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Task</th>
                                    <th>Status</th>
                                    <th>Professors</th>
                                    <th>Progress</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Task A</td>
                                    <td><span class="label bg-green">Doing</span></td>
                                    <td>John Doe</td>
                                    <td><div class="progress m-b-0">
                                            <div class="progress-bar bg-green" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style="width: 62%"></div>
                                        </div></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Task B</td>
                                    <td><span class="label bg-blue">To Do</span></td>
                                    <td>John Doe</td>
                                    <td><div class="progress m-b-0">
                                            <div class="progress-bar bg-blue" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
                                        </div></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Task C</td>
                                    <td><span class="label bg-light-blue">On Hold</span></td>
                                    <td>John Doe</td>
                                    <td><div class="progress m-b-0">
                                            <div class="progress-bar bg-light-blue" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style="width: 72%"></div>
                                        </div></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Task D</td>
                                    <td><span class="label bg-orange">Wait Approvel</span></td>
                                    <td>John Doe</td>
                                    <td><div class="progress m-b-0">
                                            <div class="progress-bar bg-orange" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%"></div>
                                        </div></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Task E</td>
                                    <td><span class="label bg-red">Suspended</span></td>
                                    <td>John Doe</td>
                                    <td><div class="progress m-b-0">
                                            <div class="progress-bar bg-red" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style="width: 87%"></div>
                                        </div></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# Task Info -->
        </div>
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>Agent</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);">Action</a></li>
                                    <li><a href="javascript:void(0);">Another action</a></li>
                                    <li><a href="javascript:void(0);">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <table class="table table-hover table-responsive">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Charts</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Dean Otto</td>
                                <td>
                                    <span class="sparkbar">5,8,6,3,5,9,2</span>
                                </td>
                            </tr>
                            <tr>
                                <td>K. Thornton</td>
                                <td>
                                    <span class="sparkbar">10,8,9,3,5,8,5</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Kane D.</td>
                                <td>
                                    <span class="sparkbar">7,5,9,3,5,2,5</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Jack Bird</td>
                                <td>
                                    <span class="sparkbar">10,8,1,3,3,8,7</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Hughe L.</td>
                                <td>
                                    <span class="sparkbar">2,8,9,8,5,1,5</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Jack Bird</td>
                                <td>
                                    <span class="sparkbar">1,8,2,3,9,8,5</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Hughe L.</td>
                                <td>
                                    <span class="sparkbar">10,8,1,3,2,8,5</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Acivites -->
            <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="card activities">
                    <div class="header">
                        <h2>Activities</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                    <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                    <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <div class="streamline b-l b-accent">
                            <div class="sl-item">
                                <div class="sl-content">
                                    <div class="text-muted-dk">Just now</div>
                                    <p>Finished task <a href="" class="text-info">#features 4</a>.</p>
                                </div>
                            </div>
                            <div class="sl-item b-info">
                                <div class="sl-content">
                                    <div class="text-muted-dk">11:30</div>
                                    <p><a href="">@Jessi</a> retwit your post</p>
                                </div>
                            </div>
                            <div class="sl-item b-primary b-l">
                                <div class="sl-content">
                                    <div class="text-muted-dk">10:30</div>
                                    <p>Call to customer <a href="" class="text-info">Jacob</a> and discuss the detail.</p>
                                </div>
                            </div>
                            <div class="sl-item b-warning">
                                <div class="sl-content">
                                    <div class="text-muted-dk">3 days ago</div>
                                    <p><a href="" class="text-info">Jessi</a> commented your post.</p>
                                </div>
                            </div>
                            <div class="sl-item b-primary b-l">
                                <div class="sl-content">
                                    <div class="text-muted-dk">10:30</div>
                                    <p>Call to customer <a href="" class="text-info">Jacob</a> and discuss the detail.</p>
                                </div>
                            </div>
                            <div class="sl-item b-warning">
                                <div class="sl-content">
                                    <div class="text-muted-dk">3 days ago</div>
                                    <p><a href="" class="text-info">Jessi</a> commented your post.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# Acivites -->
            <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2>Progress</h2>
                        <ul class="header-dropdown m-r--5">
                            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                <ul class="dropdown-menu pull-right">
                                    <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                    <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                    <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="body">
                        <ul class="basic-list">
                            <li>Mark Otto <span class="pull-right label-danger label">21%</span></li>
                            <li>Jacob Thornton <span class="pull-right label-purple label">50%</span></li>
                            <li>Jacob Thornton<span class="pull-right label-success label">90%</span></li>
                            <li>M. Arthur <span class="pull-right label-info label">75%</span></li>
                            <li>Jacob Thornton <span class="pull-right label-warning label">60%</span></li>
                            <li>M. Arthur <span class="pull-right label-success label">91%</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row clearfix">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card agent">
                    <div class="agent-avatar">
                        <a href="agent-profile.htm">
                            <img src="assets/images/agent/random-avatar3.jpg" class="img-responsive" alt="">
                        </a>
                    </div>
                    <div class="agent-content">
                        <div class="agent-name">
                            <h4><a href="agent-profile.htm">Tom Wilson</a></h4>
                            <span>Agent In New York</span>
                        </div>
                        <ul class="agent-contact-details">
                            <li><i class="zmdi zmdi-phone"></i><span>(123) 123-456</span></li>
                            <li><i class="zmdi zmdi-email"></i>info@example.com</li>
                        </ul>
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                            <li><a class="gplus" href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card agent">
                    <div class="agent-avatar">
                        <a href="agent-profile.htm">
                            <img src="assets/images/agent/random-avatar2.jpg" class="img-responsive" alt="">
                        </a>
                    </div>
                    <div class="agent-content">
                        <div class="agent-name">
                            <h4><a href="agent-profile.htm">Tom Wilson</a></h4>
                            <span>Agent In New York</span>
                        </div>
                        <ul class="agent-contact-details">
                            <li><i class="zmdi zmdi-phone"></i><span>(123) 123-456</span></li>
                            <li><i class="zmdi zmdi-email"></i>info@example.com</li>
                        </ul>
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                            <li><a class="gplus" href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card agent">
                    <div class="agent-avatar">
                        <a href="agent-profile.htm">
                            <img src="assets/images/agent/random-avatar1.jpg" class="img-responsive" alt="">
                        </a>
                    </div>
                    <div class="agent-content">
                        <div class="agent-name">
                            <h4><a href="agent-profile.htm">Tom Wilson</a></h4>
                            <span>Agent In New York</span>
                        </div>
                        <ul class="agent-contact-details">
                            <li><i class="zmdi zmdi-phone"></i><span>(123) 123-456</span></li>
                            <li><i class="zmdi zmdi-email"></i>info@example.com</li>
                        </ul>
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                            <li><a class="gplus" href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="card agent">
                    <div class="agent-avatar">
                        <a href="agent-profile.htm">
                            <img src="assets/images/agent/random-avatar4.jpg" class="img-responsive" alt="">
                        </a>
                    </div>
                    <div class="agent-content">
                        <div class="agent-name">
                            <h4><a href="agent-profile.htm">Tom Wilson</a></h4>
                            <span>Agent In UK</span>
                        </div>
                        <ul class="agent-contact-details">
                            <li><i class="zmdi zmdi-phone"></i><span>(123) 123-456</span></li>
                            <li><i class="zmdi zmdi-email"></i>info@example.com</li>
                        </ul>
                        <ul class="social-icons">
                            <li><a class="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                            <li><a class="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                            <li><a class="gplus" href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                            <li><a class="linkedin" href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
