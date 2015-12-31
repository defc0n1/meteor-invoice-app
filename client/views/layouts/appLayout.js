Template.appLayout.helpers({
    addNewUrl: function() {
        var controller = Iron.controller(),
            url = controller.state.get('ADD_NEW_URL');
        return (url) ? url : false;
    }
});