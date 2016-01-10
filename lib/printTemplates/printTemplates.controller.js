PrintTemplatesController = RouteController.extend({
    layoutTemplate: 'adminLayout',

    waitOn: function() {
        return [
            Meteor.subscribe('printTemplates')
        ];
    },
    action: function () {
        // only extend this controller and provide the action function
    },
    onAfterAction: function () {
        this.state.set('ADD_NEW_URL', '/admin/print-templates/new');
        this._renderList();
    },

    _renderForm: function(formType) {
        this.render('printTemplatesForm', {
            data: function() {
                return {
                    item: PrintTemplates.findOne({_id: this.params._id}),
                    formType: formType,
                    formId: 'PrintTemplates'+ _(formType).capitalize() + 'Form'
                }
            }
        });
    },
    _setSelectedListItemID: function() {
        Session.set('selectedListItemID', this.params._id);
    },
    _renderList: function() {
        this._setSelectedListItemID();

        this.render('printTemplatesList', {
            to: 'TheList',
            data: function() {
                return {
                    items: PrintTemplates.find({})
                }
            }
        });
    }
});

PrintTemplatesEditController = PrintTemplatesController.extend({
    action: function () {
        this._renderForm('update');
    }
});

PrintTemplatesNewController = PrintTemplatesController.extend({
    action: function () {
        this._renderForm('insert');
    }
});

PrintTemplatesViewController = PrintTemplatesController.extend({
    action: function() {
        var firstTemplate = PrintTemplates.findOne();
        this.render('printTemplatesView', {
            data: function() {
                Session.set('selectedListItemID', firstTemplate._id);
                return {
                    item: PrintTemplates.findOne({_id: firstTemplate._id})
                }
            }
        });
    }
})

