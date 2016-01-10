Router.route('admin.printTemplates', {
    path: '/admin/print-templates',
    controller: PrintTemplatesViewController
});

Router.route('admin.printTemplates.edit', {
    path: '/admin/print-templates/edit/:_id',
    controller: PrintTemplatesEditController
});

Router.route('admin.printTemplates.new', {
    path: '/admin/print-templates/new',
    controller: PrintTemplatesNewController
});