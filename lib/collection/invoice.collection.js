Invoices = new Mongo.Collection("invoices");

Invoices.attachSchema(new SimpleSchema({
  invoiceNumber: {
    type: String,
    label: "Invoice No.",
    max: 200
  },

  customer: {
    type: Object,
    label: "Customer"
  },
  "customer.name": {
    type: String,
    label: "Customer Name"
  },
  "customer.company": {
    type: String,
    label: "Customer Company"
  },
  "customer.taxNumber": {
    type: String,
    label: "Customer Tax Number"
  },
  "customer.address": {
    type: String,
    label: "Customer Address"
  },

  orderedItems: {
    type: Array,
    label: "Ordered Items"
  },
  "orderedItems.$": {
    type: Object
  },
  "orderedItems.$.name": {
    type: String,
    label: "Product Name"
  },
  "orderedItems.$.unitPrice": {
    type: Number,
    label: "Unit Price"
  },
  "orderedItems.$.quantity": {
    type: Number,
    label: "Quantity"
  },
  "orderedItems.$.totalPrice": {
    type: Number,
    label: "Total Price"
  },

  total: {
    type: Object,
    label: "Total"
  },
  "total.beforeGST": {
    type: Number,
    label: "Total before GST"
  },
  "total.GST": {
    type: Number,
    label: "GST"
  },
  "total.plusGST": {
    type: Number,
    label: "Total plus GST"
  },
}));

Invoices.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish("invoices", function () {
    return Invoices.find({});
  });
}
