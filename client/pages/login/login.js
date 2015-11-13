Template.login.events({

    'submit #LoginForm' : function(e, t){
        e.preventDefault();
        // retrieve the input field values
        var email = t.find('#LoginEmail').value
            , password = t.find('#LoginPassword').value;

        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(email, password, function(error){
            if (error){
                console.log(error.reason); // Output error when the login fails
            } else {
                Router.go("home"); // Redirect user when login succeeds
            }
        });

        return false;
    }
});