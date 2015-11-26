AutoForm.addHooks(['invoiceShowForm'], {
  onSuccess: function(operation, result, template) {
    Router.go("invoice.list");
  }
});
