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
  window.AboutView = Backbone.View.extend({
    className: 'page',
    id: 'about',
    initialize: function() { _.bindAll( this, 'render' ); },
    render: function() {
      var template = _.template( $('#about-template').html(), {} );
      $('.content').html( template );
    }
  });
  window.ApiView = Backbone.View.extend({
    className: 'page',
    id: 'api',
    initialize: function() { _.bindAll( this, 'render' ); },
    render: function() {
      var template = _.template( $('#api-template').html(), {} );
      $('.content').html( template );
    }
  })
});