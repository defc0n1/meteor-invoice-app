AutoForm.addHooks(['invoiceUpdateForm'], {
  onSuccess: function(operation, result, template) {
    // $('#InvoiceShow').show();
    // $('#InvoiceUpdate').hide();
    Session.set('isUpdatingInvoice', false);
  },
  onError: function(operation, result, template) {
    console.log('Error');
  }
});

Template.invoiceUpdate.events({
  "click a.save": function(event, template) {
    $('invoiceUpdateForm').submit();
  },
  "click a.delete": function(event, template) {
    Session.set('isUpdatingInvoice', false);
  }
})
