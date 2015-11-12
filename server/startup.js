Meteor.startup(function() {

  if (Personal.find({}).count() > 0) {
    Personal.remove({});
  }

  if (Personal.find({}).count() === 0) {
    _(10).times(function(n) {
      var from = Fake.user();
      Personal.insert({
        body: Fake.paragraph(),
        from: {
          name: from.fullname,
          email: from.email
        },
        date: '17/07/2015'
      });
    });
  }
});
