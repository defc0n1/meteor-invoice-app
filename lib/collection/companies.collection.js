Companies = new Mongo.Collection('companies');

Companies.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Company Name",
        max: 200
    },
    address: {
        type: String,
        label: "Company Address",
        max: 200
    }
}));

Companies.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

if (Meteor.isServer) {
    Meteor.publish("companies", function () {
        return Companies.find({});
    });
}
