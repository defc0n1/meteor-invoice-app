AutoForm.addHooks(['CompaniesInsertForm'], {
    onSuccess: function(operation, result, template) {
        Router.go("admin.companies");
    },
    onError: function(operation, result, template) {
        console.log('Error');
    }
});

AutoForm.addHooks(['CompaniesUpdateForm'], {
    onSuccess: function(operation, result, template) {
        Router.go("admin.companies");
    },
    onError: function(operation, result, template) {
        console.log('Error');
    }
});
