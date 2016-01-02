Router.route('admin.companies', {
    layoutTemplate: 'adminLayout',
    path: '/admin/companies',
    waitOn: function() {
        return Meteor.subscribe('companies');
    },
    data: function() {
        return {
            "listItems": Companies.find({})
        }
    },
    action: function () {
        var firstCompany = Companies.findOne();
        this.state.set('ADD_NEW_URL', false);

        this.render('companiesView', {
            data: function() {
                Session.set('selectedListItemID', firstCompany._id);
                return {
                    item: Companies.findOne({_id: firstCompany._id})
                }
            }
        });

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

Router.route('admin.companies.edit', {
    layoutTemplate: 'adminLayout',
    path: '/admin/companies/edit/:_id',
    waitOn: function() {
        return Meteor.subscribe('companies');
    },
    action: function () {
        this.state.set('ADD_NEW_URL', false);

        this.render('companiesForm', {
            data: function() {
                Session.set('selectedListItemID', this.params._id);

                return {
                    item: Companies.findOne({_id: this.params._id}),
                    formType: 'update',
                    formId: 'companiesUpdateForm'
                }
            }
        });

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