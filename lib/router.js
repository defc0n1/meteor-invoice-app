var requireLogin;

Router.configure({
    layoutTemplate: 'appLayout'
});

Router.route('login', {
    layoutTemplate: 'splashLayout',
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (currentUser) {
            Router.go('home');
        }
    }
});

requireLogin = function() {
    var currentUser = Meteor.userId();
    if (!currentUser) {
        Router.go('login');
    } else {
        this.next();
    }
};

Router.route('home', {
    path: '/',
    data: function() {},
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (!currentUser) {
            Router.go('login');
        } else {
            // proceed as usual
        }
    }
});

Router.route('company.list', {
    path: '/company',
    data: function() {},
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (!currentUser) {
            Router.go('login');
        } else {
            // proceed as usual
        }
    }
});

Router.route('company.show', {
    path: '/company/:_id',
    data: function() {},
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (!currentUser) {
            Router.go('login');
        } else {
            // proceed as usual
        }
    }
});

Router.route('invoice.list', {
    path: '/invoice',
    data: function() {},
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (!currentUser) {
            Router.go('login');
        } else {
            // proceed as usual
        }
    }
});

Router.route('invoice.show', {
    path: '/invoice/show/:_id',
    data: function() {},
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (!currentUser) {
            Router.go('login');
        } else {
            // proceed as usual
        }
    }
});

Router.route('invoice.new', {
    path: '/invoice/new',
    data: function() {},
    onBeforeAction: function() {
        var currentUser = Meteor.userId();
        if (!currentUser) {
            Router.go('login');
        } else {
            // proceed as usual
        }
    }
});

// Before any routing run the requireLogin function.
// Except in the case of "login".
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)

/*if (Meteor.isClient) {
    Router.onBeforeAction('loading', {except: ['login']}); // , 'signup'
}*/
