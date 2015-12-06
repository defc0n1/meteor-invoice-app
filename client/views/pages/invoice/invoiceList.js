if (Meteor.isClient) {
  var handle = Meteor.subscribe("invoices");

  Tracker.autorun(function() {
    if (handle.ready()) {
      var firstInvoice = Invoices.findOne();
      Session.set('selectedListItemID', firstInvoice._id);
      Session.set('isUpdatingInvoice', false);
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
    },
    isUpdatingInvoice: function() {
      return Session.get('isUpdatingInvoice');
    }
  });
}

Template.topBar.events({
  "click a.update": function(event, template) {
    Session.set('isUpdatingInvoice', true);
  },
  "click a.cancel": function(event, template) {
    Session.set('isUpdatingInvoice', false);
  }
})
