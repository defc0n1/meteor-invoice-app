InvoicesController = RouteController.extend({
    layoutTemplate: 'appLayout',

    waitOn: function() {
        return [
            Meteor.subscribe('invoices'),
            Meteor.subscribe('companies')
        ];
    },
    action: function () {
        // only extend this controller and provide the action function
    },
    onAfterAction: function () {
        this.state.set('ADD_NEW_URL', '/invoices/new');
        this._renderList();
    },

    _renderForm: function(formType) {
        this.render('invoicesForm', {
            data: function() {
                return {
                    item: Invoices.findOne({_id: this.params._id}),
                    formType: formType,
                    formId: 'Invoices'+ _(formType).capitalize() + 'Form'
                }
            }
        });
    },
    _setSelectedListItemID: function() {
        Session.set('selectedListItemID', this.params._id);
    },
    _renderList: function() {
        this._setSelectedListItemID();

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

InvoicesEditController = InvoicesController.extend({
    action: function () {
        this._renderForm('update');
    }
});

InvoicesNewController = InvoicesController.extend({
    action: function () {
        this._renderForm('insert');
    }
});

InvoicesViewController = InvoicesController.extend({
    action: function () {
        var invoice = Invoices.findOne({_id: this.params._id});
        invoice.company = Companies.findOne({_id: invoice.ownedByCompanyId });

        this.render('invoicesView', {
            data: function() {
                return {
                    item: invoice
                }
            }
        });
    }
});

InvoicesPrintController = InvoicesController.extend({
    layoutTemplate: 'printLayout',

    action: function () {
        var invoice = Invoices.findOne({_id: this.params._id});
        invoice.company = Companies.findOne({_id: invoice.ownedByCompanyId });

        this.render('invoicesPrint', {
            data: function() {
                return {
                    item: invoice
                }
            }
        });
    }
});