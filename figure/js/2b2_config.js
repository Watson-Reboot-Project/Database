require.config({
  baseUrl: '.',
  paths: {
    angular:        'lib/js/angular',
    bootstrap:      'lib/js/bootstrap',
    jquery:         'lib/js/jquery',
    'ui-bootstrap': 'lib/js/ui-bootstrap',
    relations:      'common/relations',
    load:           'figure/js/load',
    DatabaseApp:    'figure/js/DatabaseApp',
    statements:     'figure/js/statements'
  },
  shim: {
    angular: {exports: 'angular'},
    'ui-bootstrap': {deps: ['angular']},
    bootstrap: {deps: ['jquery']}
  }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'DatabaseApp', 'load', 'bootstrap'],
  function(angular, app, load) {

    var figure_page = 'figure/figure.html';
    var table_page = 'figure/table.html';

    var divs = [
        {name: 'select1', page: figure_page},
    ];

    angular.module('DatabaseApp').service('Page', function () {
      return {value: 'informationUser2b2.html'};
    });

    for (var i = 0, item; i < divs.length; i++) {
      item = divs[i];
      load(item.page, item.name);
    }

    angular.element(document).ready(function() {
      angular.resumeBootstrap(['DatabaseApp']);
    });
  }
);
