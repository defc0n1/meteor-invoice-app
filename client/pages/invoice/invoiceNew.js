AutoForm.addHooks(['invoiceNewForm'], {
  onSuccess: function(operation, result, template) {
    Router.go("invoice.list");
  }
});
