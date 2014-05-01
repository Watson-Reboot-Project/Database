// console.log('load loaded');
define(['jquery'], function(jquery) {
  // console.log('load called');
  return function(name, div_id) {
    // console.log('loading', + name);
    jquery.ajax({ url: name, async: false, success: function (data) {
      data = $(data).attr('ng-init', 'init(\'' + div_id + '\')');
      document.getElementById(div_id).innerHTML = data[0].outerHTML;
    }});
  };
});
