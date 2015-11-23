Template.companyShow.events({
    'submit form': function(event, t) {
        event.preventDefault();

        var name = event.target.name.value,
            taxNumber = event.target.taxNumber.value,
            phones_home = event.target.phones_home.value,
            phones_fax = event.target.phones_fax.value;

        Companies.update(t.data.item._id, {
            $set: {
                name: name,
                taxNumber: taxNumber,
                phones: {
                    home: phones_home,
                    fax: phones_fax
                },
            }
        });
    }
})
