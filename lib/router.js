var OnBeforeActions;

Router.configure({
    layoutTemplate: 'appLayout'
});

Router.map(function() {

  this.route('login',          { path: '/login'});

  this.route('home',          { path: '/'});
  this.route('personal',      { path: '/personal'});
  this.route('personal.show', { path: '/personal/:_id'});
});

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            this.render('login');
        } else {
            this.next();
        }
    }
};

// Before any routing run the requireLogin function.
// Except in the case of "login".
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)
Router.onBeforeAction(OnBeforeActions.loginRequired, {
    except: ['login']
});