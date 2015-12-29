Router.route('invoices', {
    path: '/invoices',
    action: function () {
        this.state.set('COLLECTION_NAME', 'invoices');
        this.render();
    },
    waitOn: function() {
        return Meteor.subscribe('invoices');
    },
    data: function() {
        return {
            "listItems": Invoices.find({})
    }
    }
});