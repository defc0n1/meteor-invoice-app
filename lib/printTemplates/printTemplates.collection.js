PrintTemplates = new Mongo.Collection('printTemplates');

PrintTemplates.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name of the print template",
        max: 200
    },
    collection: {
        type: String,
        label: "Name of the collection",
        max: 200,
        defaultValue: "Invoices",
    },
    "ownedByCompanyId": {
        type: String,
        label: "Owned by company ID",
        autoform: {
            type: "select",
            options: function () {
                var query = {},
                    companies = Companies.find(query, {fields: {_id:1, name:1}}).fetch(),
                    ret = companies.map(function(obj) {
                        return {
                            value: obj._id,
                            label: obj.name
                        }
                    });

                return ret;
            }
        }
    },
    pageSizeX: {
        type: Number,
        decimal: true,
        label: "Page Size X"
    },
    pageSizeY: {
        type: Number,
        decimal: true,
        label: "Page Size Y"
    },
    pageMarginTop: {
        type: Number,
        decimal: true,
        label: "Page Margin Top"
    },
    pageMarginBottom: {
        type: Number,
        decimal: true,
        label: "Page Margin Bottom"
    },
    pageMarginLeft: {
        type: Number,
        decimal: true,
        label: "Page Margin Left"
    },
    pageMarginRight: {
        type: Number,
        decimal: true,
        label: "Page Margin Right"
    },

    fields: {
        type: Array,
        label: "Fields"
    },
    "fields.$": {
        type: Object
    },
    "fields.$.name": {
        type: String,
        label: "Field name",
        max: 200
    },
    "fields.$.labelTop": {
        type: Number,
        decimal: true,
        label: "Label top",
        optional: true
    },
    "fields.$.labelRight": {
        type: Number,
        decimal: true,
        label: "Label right",
        optional: true
    },
    "fields.$.labelBottom": {
        type: Number,
        decimal: true,
        label: "Label bottom",
        optional: true
    },
    "fields.$.labelLeft": {
        type: Number,
        decimal: true,
        label: "Label left",
        optional: true
    },
    "fields.$.valueTop": {
        type: Number,
        decimal: true,
        label: "Value top",
        optional: true
    },
    "fields.$.valueRight": {
        type: Number,
        decimal: true,
        label: "Value right",
        optional: true
    },
    "fields.$.valueBottom": {
        type: Number,
        decimal: true,
        label: "Value bottom",
        optional: true
    },
    "fields.$.valueLeft": {
        type: Number,
        decimal: true,
        label: "Value left",
        optional: true
    },
    "fields.$.valueWidth": {
        type: Number,
        decimal: true,
        label: "Value width",
        optional: true
    }
}));

PrintTemplates.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

if (Meteor.isServer) {
    Meteor.publish("printTemplates", function () {
        return PrintTemplates.find({});
    });
}