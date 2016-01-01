var AUTH_ERRORS_KEY = 'authenticationErrorsKey';

Template.appLayout.helpers({
    addNewUrl: function() {
        var controller = Iron.controller(),
            url = controller.state.get('ADD_NEW_URL');
        return (url) ? url : false;
    },
    settingsMenuStatus: function() {
        return Session.get('SETTINGS_MENU_STATUS');
    }
});

Template.appLayout.events({
    'click a.settingsMenu': function(event, template) {
        if (Session.get('SETTINGS_MENU_STATUS') == '' || _.isUndefined(Session.get('SETTINGS_MENU_STATUS'))) {
            Session.set('SETTINGS_MENU_STATUS', 'opened');
        } else {
            Session.set('SETTINGS_MENU_STATUS', '');
        }
    },
    'click a.logout': function(event, template) {
        event.preventDefault();

        Meteor.logout(function(error) {
            if (error) {
                return Session.set(AUTH_ERRORS_KEY, {'none': error.reason});
            }

            Router.go('login');
        });
    }
});
