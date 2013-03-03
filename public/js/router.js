$(document).ready( function() {
  
  window.AppRouter = Backbone.Router.extend({
    routes: {
      '':                'take_me_home_jeeves',
      'about':           'about',
      'api':             'api'
    },
    take_me_home_jeeves: function() {
      var home = new window.HomeView();
      home.render();
    },
    about: function() {
      var about = new window.AboutView();
      about.render();
    },
    api: function() {
      var api = new window.ApiView();
      api.render();
    }
  });
  
  var router = new window.AppRouter();
  Backbone.history.start();

});