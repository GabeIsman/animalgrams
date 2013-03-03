$(document).ready( function() {
  
  window.HomeView = Backbone.View.extend({
    className: 'page',
    id: 'home',
    initialize: function() { _.bindAll( this, 'render' ); },
    render: function() {
      var template = _.template( $('#home-template').html(), {} );
      $('.content').html( template );
    }
  });
  
});