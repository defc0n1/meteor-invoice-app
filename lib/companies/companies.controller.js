CompaniesController = RouteController.extend({
    layoutTemplate: 'adminLayout',

    waitOn: function() {
        return [
            Meteor.subscribe('companies')
        ];
    },
    action: function () {
        // only extend this controller and provide the action function
    },
    onAfterAction: function () {
        this.state.set('ADD_NEW_URL', null); // '/companies/new'
        this._renderList();
    },

    _renderForm: function(formType) {
        this.render('companiesForm', {
            data: function() {
                return {
                    item: Companies.findOne({_id: this.params._id}),
                    formType: formType,
                    formId: 'Companies'+ _(formType).capitalize() + 'Form'
                }
            }
        });
    },
    _setSelectedListItemID: function() {
        Session.set('selectedListItemID', this.params._id);
    },
    _renderList: function() {
        this._setSelectedListItemID();

        this.render('companiesList', {
            to: 'TheList',
            data: function() {
                return {
                    items: Companies.find({})
                }
            }
        });
    }
});

CompaniesEditController = CompaniesController.extend({
    action: function () {
        this._renderForm('update');
    }
});

CompaniesNewController = CompaniesController.extend({
    action: function () {
        this._renderForm('insert');
    }
});

CompaniesViewController = CompaniesController.extend({
    action: function() {
        var firstCompany = Companies.findOne();
        this.render('companiesView', {
            data: function() {
                Session.set('selectedListItemID', firstCompany._id);
                return {
                    item: Companies.findOne({_id: firstCompany._id})
                }
            }
        });
    }
})

