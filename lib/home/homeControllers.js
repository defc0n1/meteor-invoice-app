HomeController = RouteController.extend({
    action: function() {

        if (null == Meteor.userId()) {
            this.render('login');
        }
    }
});