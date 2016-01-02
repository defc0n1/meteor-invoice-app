Template.companiesList.helpers({
    isSelected: function() {
        return Session.equals("selectedListItemID", this._id) ? "selected" : '';
    }
});