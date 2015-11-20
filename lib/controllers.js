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