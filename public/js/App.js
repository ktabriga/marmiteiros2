(function (define) {
    define([
        'angular',
        'app/RouteManager',
        'app/AuthInterceptor',

        'bootsrapjs',
        'angular-resource'
    ], function (angular, RouteManager, AuthInterceptor) {
        var appName = 'app.app',
            dependencies = [
                'ui.router',
                'ngResource',

                AuthInterceptor
            ],
            app;

        app = angular.module(appName, dependencies)
            .config(RouteManager);

        angular.bootstrap(document, [appName]);
    });
})(define);
