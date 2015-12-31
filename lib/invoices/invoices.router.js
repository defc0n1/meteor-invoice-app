Router.route('invoices', {
    path: '/invoices',
    waitOn: function() {
        return Meteor.subscribe('invoices');
    },
    data: function() {
        return {
            "listItems": Invoices.find({})
        }
    },
    action: function () {
        this.state.set('COLLECTION_NAME', 'invoices');
        this.state.set('ADD_NEW_URL', '/invoices/new');
        var firstInvoice = Invoices.findOne();

        this.render('invoicesView', {
            data: function() {

                Session.set('selectedListItemID', firstInvoice._id);

                return {
                    item: Invoices.findOne({_id: firstInvoice._id})
                }
            }
        });

        this.render('invoicesList', {
            to: 'TheList',
            data: function() {
                return {
                    items: Invoices.find({})
                }
            }
        });
    }
});

Router.route('invoices.edit', {
    path: '/invoices/:_id',
    waitOn: function() {
        return Meteor.subscribe('invoices');
    },
    action: function () {
        this.state.set('COLLECTION_NAME', 'invoices');
        this.state.set('ADD_NEW_URL', '/invoices/new');

        this.render('invoicesForm', {
            data: function() {
                Session.set('selectedListItemID', this.params._id);

                return {
                    item: Invoices.findOne({_id: this.params._id}),
                    formType: 'update',
                    formId: 'invoicesUpdateForm'
                }
            }
        });

        this.render('invoicesList', {
            to: 'TheList',
            data: function() {
                return {
                    items: Invoices.find({})
                }
            }
        });
    }
});