Template.printTemplatesList.helpers({
    isSelected: function() {
        return Session.equals("selectedListItemID", this._id) ? "selected" : '';
    }
});