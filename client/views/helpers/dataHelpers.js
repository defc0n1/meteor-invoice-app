Template.registerHelper('getCompanyName', function(companyId) {
    var query = {
            _id: companyId
        },
        companies = Companies.find(query, {fields: {_id:1, name:1}}).fetch(),
        ret = companies.map(function(obj) {
            return obj.name
        });

    return ret;
});