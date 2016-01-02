Companies = new Mongo.Collection('companies');

Companies.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Company Name",
        max: 200
    },
    taxNumber: {
        type: String,
        label: "Company Tax Number",
        max: 200
    },
    address: {
        type: String,
        label: "Company Address",
        max: 200
    },
    fax: {
        type: String,
        label: "Company Fax",
        max: 200
    },
    phone: {
        type: String,
        label: "Company Phone",
        max: 200
    },
    email: {
        type: String,
        label: "Company Email",
        max: 200
    },
    userIds: {
        type: Array,
        label: "User IDs"
    },
    "userIds.$": {
        type: String
    },
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