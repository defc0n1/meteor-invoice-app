Meteor.startup(function() {

  if (Meteor.users.find().count() === 0) {
    var users = [
      { username:'admin',
        email:'admin@test.com',
        password:'password',
        roles:['admin'],
        status:'enabled',
        profile:{
          first_name: 'Bach',
          last_name: 'Admin'}
      },
      { username:'user',
        email:'user@test.com',
        password:'useruser',
        roles:['user'],
        status:'enabled',
        profile:{
          first_name: 'Lam',
          last_name: 'User'}}
    ];
    _.each(users, function(user){
      var user_id = Accounts.createUser({
        username: user.username,
        email: user.email,
        password: user.password,
        profile: {
          first_name: user.profile.first_name,
          last_name: user.profile.last_name,
        }
      });
      Meteor.users.update(
          {_id: user_id},
          {$set:
            {
              roles: user.roles,
              status: user.status
            }
          }
      );
    });
  }

  if (Companies.find({}).count() === 0) {

    var admin = Meteor.users.findOne({
      'username': 'admin'
    });
    var user = Meteor.users.findOne({
      'username': 'user'
    });

    Companies.insert({
      name: "DN Bach Chien",
      taxNumber: "123456879",
      address: "4M Cu xa Phu Lam D, P10 Q6, TPHCM",
      phones: {
        "home": "8766647",
        "fax" : "7551847"
      },
      emails: "dnbachchien@yahoo.com",
      userIds: [ admin._id, user._id ]
    })

  }

});
