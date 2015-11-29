if (Meteor.isServer) {
  Meteor.publish("invoices", function () {
    return Invoices.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("invoices");

  Template.invoiceList.helpers({
    invoices: function() {
      return Invoices.find();
    },
    selectedInvoice: function () {
      return Invoices.findOne({_id: Session.get('selectedListItemID')});
    }
  });
}



Template.invoiceList.events({
  "click a.update": function(event, template) {
    template.$('#invoiceUpdateForm').show();
  }
})

AutoForm.addHooks(['invoiceUpdateForm'], {
  onSuccess: function(operation, result, template) {
    template.$('#invoiceUpdateForm').hide();
  }
});
