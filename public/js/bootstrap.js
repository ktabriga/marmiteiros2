(function (require) {
   require.config({
       baseUrl: './js',
       paths: {
           angular: '/bower_components/angular/angular.min',
           'angular-resource': '/bower_components/angular-resource/angular-resource.min',
           jquery: '/bower_components/jquery/dist/jquery.min',
           'ui-router': '/bower_components/angular-ui-router/release/angular-ui-router.min',
           bootsrapjs: '/bower_components/bootstrap/dist/js/bootstrap.min',
           toastr: '/bower_components/toastr/toastr.min'
       },
       shim: {
           angular: {
               deps: ['jquery'],
               exports: 'angular'
           },
           'ui-router': {
               deps: ['angular'],
               exports: 'angular'
           },
           'angular-resource': {
               deps: ['angular'],
               exports : 'angular'
           },
           bootsrapjs: {
               deps: ['jquery'],
               exports: 'jQuery'
           }
       },
       deps: ['./App']
   });
})(require);
