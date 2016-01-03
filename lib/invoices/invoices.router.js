Router.route('invoices', {
    path: '/invoices',
    action: function () {
        var firstInvoice = Invoices.findOne();
        Router.go('invoices.view', {_id: firstInvoice._id});
    }
});

Router.route('invoices.edit', {
    path: '/invoices/edit/:_id',
    controller: InvoicesEditController
});

Router.route('invoices.new', {
    path: '/invoices/new',
    controller: InvoicesNewController
});

Router.route('invoices.view', {
    path: '/invoices/view/:_id',
    controller: InvoicesViewController
});

Router.route('invoices.print', {
    path: '/invoices/print/:_id',
    controller: InvoicesPrintController
});