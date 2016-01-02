AutoForm.addHooks(['companiesInsertForm'], {
    onSuccess: function(operation, result, template) {
        Router.go("admin.companies");
    },
    onError: function(operation, result, template) {
        console.log('Error');
    }
});

AutoForm.addHooks(['companiesUpdateForm'], {
    onSuccess: function(operation, result, template) {
        Router.go("admin.companies");
    },
    onError: function(operation, result, template) {
        console.log('Error');
    }
});
