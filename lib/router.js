var requireLogin;

Router.configure({
    layoutTemplate: 'appLayout'
});

requireLogin = function() {
    var currentUser = Meteor.userId();
    if (!currentUser) {
        Router.go('login');
    } else {
        this.next();
    }
};

Router.route('login', {
    layoutTemplate: 'splashLayout'
});

Router.route('home', {
    path: '/',
    onBeforeAction: requireLogin
});

Router.route('company.list', {
    path: '/company',
    onBeforeAction: requireLogin
});

Router.route('company.show', {
    path: '/company/:_id',
    onBeforeAction: requireLogin
});

Router.route('invoice.list', {
    path: '/invoice',
    onBeforeAction: requireLogin
});

Router.route('invoice.show', {
    path: '/invoice/show/:_id',
    onBeforeAction: requireLogin
});

Router.route('invoice.new', {
    path: '/invoice/new',    
    onBeforeAction: requireLogin
});

// Before any routing run the requireLogin function.
// Except in the case of "login".
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)

/*if (Meteor.isClient) {
    Router.onBeforeAction('loading', {except: ['login']}); // , 'signup'
}*/
