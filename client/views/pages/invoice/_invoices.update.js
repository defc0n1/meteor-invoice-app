Template.invoicesForm.events({
  "click a.save": function(event, template) {
    $('invoicesUpdateForm').submit();
  },
  "click a.delete": function(event, template) {
    Session.set('FORM_ACTION', '');
  },
  "blur input.quantity": updateLineItemTotal,
  "blur input.unit-price": updateLineItemTotal
});

function updateLineItemTotal(event, template) {
  var element = $(event.target),
      lineItemRow = element.closest('.line-item'),
      totalPriceInput = lineItemRow.find('input.total-price'),
      lineItemTotal = calculateLineItemTotal(lineItemRow);

  totalPriceInput.val(lineItemTotal.toFixed(2));
  updateInvoiceTotal(event, template);
}

function updateInvoiceTotal(event, template) {
  var lineItemRows = template.findAll('.line-item'),
      invoiceSubtotal = 0,
      invoiceGST = 0,
      invoiceTotalAfterGST = 0;

  $.each(lineItemRows, function(index, lineItemRow) {
    lineItemRow = $(lineItemRow);
    invoiceSubtotal += calculateLineItemTotal(lineItemRow);
  });

  invoiceGST = invoiceSubtotal / 10;
  invoiceTotalAfterGST = invoiceSubtotal + invoiceGST;

  $(template.find('.invoice-subtotal')).val(invoiceSubtotal.toFixed(2));
  $(template.find('.invoice-GST')).val(invoiceGST.toFixed(2));
  $(template.find('.invoice-total-after-GST')).val(invoiceTotalAfterGST.toFixed(2));
}

function calculateLineItemTotal(lineItemRow) {
  var quantityInput = lineItemRow.find('input.quantity'),
      unitPriceInput = lineItemRow.find('input.unit-price'),
      quantity = (quantityInput.val() == "" || quantityInput.val() < 0) ? 0 : Number.parseInt(quantityInput.val()),
      unitPrice = (unitPriceInput.val() == "" || unitPriceInput.val() < 0) ? 0 : Number.parseFloat(unitPriceInput.val()),
      totalPrice = quantity * unitPrice;

  return totalPrice;
}
