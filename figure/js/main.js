require.config({
  baseUrl: '.',
  paths: {
    angular:        '../lib/js/angular',
    bootstrap:      '../lib/js/bootstrap',
    jquery:         '../lib/js/jquery',
    'ui-bootstrap': '../lib/js/ui-bootstrap',
    DatabaseApp:    'js/DatabaseApp',
    relations:      'js/relations',
    statements:     'js/statements'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap: {deps: ['jquery']}
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'DatabaseApp', 'bootstrap'], function(angular, app) {
  angular.element(document).ready(function() {
    console.log('entering require block');
    angular.resumeBootstrap(['DatabaseApp']);
    console.log('require block, standing by');
  });
});

console.log('main.js, standing by');
