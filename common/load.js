define(['jquery'], function(jquery) {
  return function(name, div) {
    jquery.ajax({ url: name, async: false, success: function (data) {
      document.getElementById(div).innerHTML = data;
    }});
  };
});
