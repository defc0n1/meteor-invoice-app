AutoForm.addHooks(['invoicesInsertForm'], {
  onSuccess: function(operation, result, template) {
    Router.go("invoices");
  }
});

AutoForm.addHooks(['invoicesUpdateForm'], {
  onSuccess: function(operation, result, template) {
    Session.set('FORM_ACTION', null);
  },
  onError: function(operation, result, template) {
    console.log('Error');
  }
});

if (Meteor.isClient) {
  var handle = Meteor.subscribe("invoices");

  Tracker.autorun(function() {
    if (handle.ready()) {
      var firstInvoice = Invoices.findOne();
      if (!_.isUndefined(firstInvoice)) {
        Session.set('selectedListItemID', firstInvoice._id);
        Session.set('FORM_ACTION', null);
      } else {
        Session.set('FORM_ACTION', null);
      }

      Session.set('FORM_ACTION', null);
    }
  });

  Template.invoices.helpers({
    invoices: function() {
      return Invoices.find({});
    },
    theSelectedInvoice: function () {
      return Invoices.findOne({_id: Session.get('selectedListItemID')});
    },
    isThisInvoiceSelected: function() {
      return Session.equals("selectedListItemID", this._id) ? "selected" : '';
    },
    isUpdatingInvoice: function() {
      return Session.get('isUpdatingInvoice');
    },
    isAnyInvoiceSelected: function() {
      return Session.get('isAnyInvoiceSelected');
    }
  });
}

Template.topBar.events({
  "click a.update": function(event, template) {
    Session.set('isUpdatingInvoice', true);
  },
  "click a.cancel": function(event, template) {
    Session.set('isUpdatingInvoice', false);
  },
  "click a.new": function(event, template) {
    Session.set('selectedListItemID', 0);
    Session.set('isUpdatingInvoice', false);
  }
})
