var requireLogin = function() {
    var currentUser = Meteor.userId();
    if (!currentUser) {
        Router.go('login');
    } else {
        this.next();
    }
};

Router.configure({
    layoutTemplate: 'appLayout'
});

Router.route('login', {
    layoutTemplate: 'splashLayout'
});

Router.route('home', {
    path: '/',
    action: function() {
        Router.go('invoices');
    }
});

Router.route('admin', {
    layoutTemplate: 'adminLayout',
    action: function() {
        Router.go('admin.companies');
    }
});

// Before any routing run the requireLogin function.
// Except in the case of "login".
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)

if (Meteor.isClient) {
    Router.onBeforeAction(requireLogin, {except: ['login']}); // , 'signup'
}
