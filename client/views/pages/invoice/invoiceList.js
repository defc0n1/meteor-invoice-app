if (Meteor.isClient) {
  var handle = Meteor.subscribe("invoices");

  Tracker.autorun(function() {
    if (handle.ready()) {
      var firstInvoice = Invoices.findOne();
      Session.set('selectedListItemID', firstInvoice._id);
    }
  });

  Template.invoiceList.helpers({
    invoices: function() {
      return Invoices.find({});
    },
    theSelectedInvoice: function () {
      return Invoices.findOne({_id: Session.get('selectedListItemID')});
    },
    isInvoiceSelected: function() {
     return Session.equals("selectedListItemID", this._id) ? "selected" : '';
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
