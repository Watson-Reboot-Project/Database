require.config({
  baseUrl: '.',
  paths: {
    angular:        '../../lib/js/angular',
    bootstrap:      '../../lib/js/bootstrap',
    jquery:         '../../lib/js/jquery',
    'ui-bootstrap': '../../lib/js/ui-bootstrap',
    DatabaseApp:    '../js/DatabaseApp',
    relations:      '../../common/relations',
    statements:     'statements'
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
    angular.resumeBootstrap(['DatabaseApp']);
  });
});
