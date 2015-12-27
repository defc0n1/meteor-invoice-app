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
  },
  "blur input.quantity": calculateLineItemTotal,
  "blur input.unit-price": calculateLineItemTotal,
})

function calculateLineItemTotal(event, template) {
  var element = $(event.target),
      lineItemRow = element.closest('.line-item'),
      quantityInput = lineItemRow.find('input.quantity'),
      unitPriceInput = lineItemRow.find('input.unit-price'),
      totalPriceInput = lineItemRow.find('input.total-price'),
      quantity = (quantityInput.val() == "" || quantityInput.val() < 0) ? 0 : Number.parseInt(quantityInput.val()),
      unitPrice = (unitPriceInput.val() == "" || unitPriceInput.val() < 0) ? 0 : Number.parseFloat(unitPriceInput.val()),
      totalPrice = (quantity * unitPrice).toFixed(2);

  totalPriceInput.val(totalPrice);
}
