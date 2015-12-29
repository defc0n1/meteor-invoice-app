Router.route('companies', {
    path: '/companies',
    action: function () {
        this.state.set('COLLECTION_NAME', 'companies');
        this.render();
    },
    waitOn: function() {
        return Meteor.subscribe('companies');
    },
    data: function() {
        return {
            "listItems": Companies.find({})
        }
    }
});

Router.route('company.list', {
    path: '/company'
});

Router.route('company.show', {
    path: '/company/:_id'
});