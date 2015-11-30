CompanyListController = RouteController.extend({

  data: function() {
   return {
       items: Companies.find({
           userIds: Meteor.userId()
       })
   };
 }
});

CompanyShowController = RouteController.extend({
    data: function() {
        return {
            item: Companies.findOne({_id: this.params._id})
        };
    }
})

/*InvoiceListController = RouteController.extend({
  data: function() {
   return {
       items: Invoices.find()
   };
 }
});*/

/*InvoiceShowController = RouteController.extend({
  data: function() {
      return Invoices.findOne({_id: this.params._id})
  }
});*/
