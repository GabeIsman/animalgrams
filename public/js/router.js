$(document).ready( function() {
  
  window.AppRouter = Backbone.Router.extend({
    routes: {
      '':                'take_me_home_jeeves'
    },
    take_me_home_jeeves: function() {
      var home = new window.HomeView();
      home.render();
    }
  });
  
  var router = new window.AppRouter();
  Backbone.history.start();

});