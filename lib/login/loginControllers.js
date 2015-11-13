LoginController = RouteController.extend({
    layoutTemplate: 'splashLayout',
    action: function() {
        this.render('login');
    }
});