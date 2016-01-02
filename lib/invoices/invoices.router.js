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
        var firstInvoice = Invoices.findOne();
        Router.go('invoices.view', {_id: firstInvoice._id});

    }
});

Router.route('invoices.edit', {
    path: '/invoices/edit/:_id',
    waitOn: function() {
        return [
            Meteor.subscribe('invoices'),
            Meteor.subscribe('companies')];
    },
    action: function () {
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

Router.route('invoices.new', {
    path: '/invoices/new',
    waitOn: function() {
        return [
            Meteor.subscribe('invoices'),
            Meteor.subscribe('companies')];
    },
    action: function () {
        this.state.set('ADD_NEW_URL', '/invoices/new');

        this.render('invoicesForm', {
            data: function() {
                return {
                    item: null,
                    formType: 'insert',
                    formId: 'invoicesInsertForm'
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

Router.route('invoices.view', {
    path: '/invoices/view/:_id',
    waitOn: function() {
        return [
            Meteor.subscribe('invoices'),
            Meteor.subscribe('companies')];
    },
    action: function () {
        var invoice = Invoices.findOne({_id: this.params._id});

        Session.set('selectedListItemID', this.params._id);
        invoice.company = Companies.findOne({_id: invoice.ownedByCompanyId });

        this.state.set('ADD_NEW_URL', '/invoices/new');

        this.render('invoicesView', {
            data: function() {
                return {
                    item: invoice
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

Router.route('invoices.print', {
    path: '/invoices/print/:_id',
    layoutTemplate: 'printLayout',
    waitOn: function() {
        return Meteor.subscribe('invoices');
    },
    action: function () {
        this.render('invoicesPrint', {
            data: function() {
                return {
                    item: Invoices.findOne({_id: this.params._id}),
                }
            }
        });
    }
});