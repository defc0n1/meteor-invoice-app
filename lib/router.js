Router.configure({
    layoutTemplate: 'appLayout'
});

Router.map(function() {
  this.route('home',          { path: '/'});
  this.route('personal',      { path: '/personal'});
  this.route('personal.show', { path: '/personal/:_id'});
});
