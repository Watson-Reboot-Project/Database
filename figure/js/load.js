define(['jquery'], function(jquery) {
  var name = '../fragment.html'
  jquery.ajax({ url: name, async: false, success: function (data) {
    document.getElementById('magic-div').innerHTML = data;
  }});
});
