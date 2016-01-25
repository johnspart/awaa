!function(){"use strict";angular.module("awaa",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];this.getTec=t}angular.module("awaa").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t,a){var e=this;e.cerrarMenu=function(){a.mostrar=""}}t.$inject=["moment","$rootScope"];var a={restrict:"E",templateUrl:"app/components/sidebar/sidebar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return a}angular.module("awaa").directive("awaaSidebar",t)}(),function(){"use strict";function t(){function t(t,a){var e=this;e.abrirMenu=function(){a.mostrar="mostrar"}}t.$inject=["moment","$rootScope"];var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return a}angular.module("awaa").directive("awaaNavbar",t)}(),function(){"use strict";function t(t,a,e,o,n){return o(":action",{},{authenticate:{method:"POST",url:n+"login",params:{action:"authenticate"}}})}t.$inject=["$http","$state","$log","$resource","urlSrv"],angular.module("awaa").factory("LoginService",t)}(),function(){"use strict";function t(t,a,e,o,n,r){}t.$inject=["$rootScope","$scope","$log","$http","$state","LoginService"],angular.module("awaa").controller("LoginController",t)}(),function(){"use strict";function t(t,a){this.getLabels=function(e,o){var n="fonts/labels_"+o+".json";t.debug$log,n,a(n).get(function(t){e.labels=t})}}t.$inject=["$log","$resource"],angular.module("awaa").service("labels",t)}(),function(){"use strict";function t(t){}t.$inject=["$rootScope"],angular.module("awaa").controller("ForgotCtrl",t)}(),function(){"use strict";function t(t,a,e){function o(){n(),t(function(){r.classAnimation="rubberBand"},4e3)}function n(){r.awesomeThings=a.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1449339525743,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("awaa").controller("MainController",t)}(),function(){"use strict";function t(t,a,e,o,n,r,i){a.labels=function(){r.getLabels(a,a.selectedLanguage)},a.selectedLanguage="es",a.labels(),t.debug("runBlock end");var s=function(t){e.get("user").success(function(e){e.name?a.authenticated=!0:a.authenticated=!1,t&&t()}).error(function(){a.authenticated=!1,t&&t()})};s(),a.credentials={},a.login=function(){a.credentials._csrf=o.get("XSRF-TOKEN"),e.post(i+"login",$.param(a.credentials),{headers:{"content-type":"application/x-www-form-urlencoded"}}).success(function(e){s(function(){a.authenticated?(t("Login succeeded"),n.path("/"),a.error=!1):(t("Login failed"),n.path("/login"),a.error=!0)})}).error(function(t){n.path("/login"),a.error=!0,a.authenticated=!1})},a.logout=function(){e.post(i+"logout",{}).success(function(){a.authenticated=!1,n.path("/")}).error(function(){a.authenticated=!1})},e.get(i+"token").success(function(t){e({url:"http://localhost:8080/awaa-web",method:"GET",headers:{"X-Auth-Token":t.token}}).success(function(t){a.greeting=t})})}t.$inject=["$log","$rootScope","$http","$cookies","$location","labels","urlSrv"],angular.module("awaa").run(t)}(),function(){"use strict";function t(t,a){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("login",{url:"/login",templateUrl:"app/components/login/login.html",controller:"LoginController"}).state("forgot",{url:"/forgot",templateUrl:"app/components/forgot/forgot.html",controller:"ForgotCtrl"}),a.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("awaa").config(t)}(),function(){"use strict";angular.module("awaa").constant("malarkey",malarkey).constant("moment",moment).constant("urlSrv","")}(),function(){"use strict";function t(t,a,e){t.debugEnabled(!0),a.allowHtml=!0,a.timeOut=3e3,a.positionClass="toast-top-right",a.preventDuplicates=!0,a.progressBar=!0,e.defaults.useXDomain=!0,e.defaults.withCredentials=!0,e.defaults.headers.common["Access-Control-Allow-Origin"]="*"}t.$inject=["$logProvider","toastrConfig","$httpProvider"],angular.module("awaa").config(t)}(),angular.module("awaa").run(["$templateCache",function(t){t.put("app/main/main.html",'<div id="page-wrapper" ng-cloak=""><awaa-sidebar></awaa-sidebar><div id="content-wrapper"><div class="page-content"><awaa-navbar creation-date="main.creationDate"></awaa-navbar></div></div></div>'),t.put("app/components/forgot/forgot.html",'<md-content id="login-view" class="md-whiteframe-z5" ng-controller="ForgotCtrl"><img src="assets/images/vista-admin.png" alt="Vista Administrativa Shapp" id="vista-admin-img"><md-card id="login-container"><img src="assets/images/logo.png" alt="Logo Shapp" id="logo"> <img src="assets/images/nombre.png" alt="Nombre Shapp" id="nombre"><p><strong>{{$root.labels.ingUsuario}}</strong><br>(Se enviará un mensaje al correo electrónico registrado con los pasos para restablecer tu contraseña)</p><form name="rememberForm" id="login-form"><md-input-container id="name-input"><label>Usuario</label> <input name="name" ng-model="user.name"></md-input-container><md-button class="md-raised md-primary" id="login-button" ng-click="send()">Enviar</md-button></form></md-card></md-content><footer>Deseos a tu alcance</footer>'),t.put("app/components/login/login.html",'<div class="ng-scope container" ng-controller="LoginController"><div class="row"><div class="col-sm-6 col-md-4 col-md-offset-4"><h1 class="text-center login-title">{{$root.labels.inicioSession}}</h1><div class="account-wall"><img class="profile-img" ng-src="/assets/images/login.png" alt=""><div class="alert alert-danger" ng-show="$rootScope.rror">There was a problem logging in. Please try again.</div><form class="form-signin" ng-submit="$root.login()"><input id="user" name="user" ng-model="credentials.username" type="text" class="form-control" placeholder="{{$root.labels.user}}" required="" autofocus=""> <input id="pass" name="pass" ng-model="credentials.password" type="password" class="form-control" placeholder="{{$root.labels.pass}}" required=""> <button class="btn btn-lg btn-primary btn-block" type="submit">{{$root.labels.acceder}}</button> <span class="clearfix"></span></form></div><a href="#" class="text-center new-account">{{$root.labels.crearCuenta}}</a></div></div></div>'),t.put("app/components/navbar/navbar.html",'<div class="row header"><div class="col-xs-12"><div class="user pull-right"><div class="dropdown item"><a class="dropdown-toggle" href="#"><img src="assets/images/yeoman.png"></a><ul class="dropdown-menu dropdown-menu-right"><li class="dropdown-header">Joe Bloggs</li><li class="divider"></li><li class="link"><a href="#">Profile</a></li><li class="link"><a href="#">Menu Item</a></li><li class="link"><a href="#">Menu Item</a></li><li class="divider"></li><li class="link" ng-show="$root.authenticated"><a a="" href="" ng-click="logout()">{{$root.labels.salir}}</a></li></ul></div><div class="item dropdown"><a class="dropdown-toggle" href="#" title="{{$root.labels.notificaciones}}"><i class="glyphicon glyphicon-bell"></i></a></div></div><div class="meta"><div class="page"><a class="menu-icon glyphicon glyphicon-menu-hamburger" href="" ng-click="vm.abrirMenu()" title="{{$root.labels.abrMenu}}">{{$root.labels.awaa}}</a></div><div class="breadcrumb-links">{{$root.labels.inicio}}</div></div></div></div>'),t.put("app/components/sidebar/sidebar.html",'<div id="sidebar-wrapper" ng-class="$root.mostrar"><ul class="sidebar"><li class="cerrar-menu sidebar-list"><a class="menu-icon glyphicon glyphicon-indent-right" href="" ng-click="vm.cerrarMenu()" title="{{$root.labels.crrMenu}}"></a></li><li class="sidebar-main"><a href="#">{{$root.labels.inicio}} <span class="menu-icon glyphicon glyphicon-home"></span></a></li><li class="sidebar-title"><span>NAVIGATION</span></li><li class="sidebar-list"><a href="#">Dashboard <span class="menu-icon fa fa-tachometer"></span></a></li></ul><div class="sidebar-footer"><div class="col-xs-4"><a href="https://github.com/rdash/rdash-angular" target="_blank">Github</a></div><div class="col-xs-4"><a href="https://github.com/rdash/rdash-angular/README.md" target="_blank">About</a></div><div class="col-xs-4"><a href="#">Support</a></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-3b2a9b026e.js.map
