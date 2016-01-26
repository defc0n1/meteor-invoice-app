Template.invoicesPrint.onRendered(function() {
    var printTemplate = this.data.item.printTemplate,
        page = {
            marginTop: printTemplate.pageMarginTop,
            marginRight: printTemplate.pageMarginRight,
            marginBottom: printTemplate.pageMarginBottom,
            marginLeft: printTemplate.pageMarginLeft
        };

    // page
    $('#Page').css({
        width: printTemplate.pageSizeX + 'mm',
        height: printTemplate.pageSizeY + 'mm',
        padding: page.marginTop + 'mm ' + page.marginRight + 'mm ' + page.marginBottom + 'mm ' + page.marginLeft + 'mm'
    });

    console.log(page.marginTop + 'mm ' + page.marginRight + 'mm ' + page.marginBottom + 'mm ' + page.marginLeft + 'mm');

    // fields
    $.each(this.data.item.printTemplate.fields, function(index, field) {


        // line items
        if (field.name == "lineItems_table") {
            $("table#" + field.name).css({
                top: field.labelTop + page.marginTop + 'mm',
                left: field.labelLeft + page.marginLeft + 'mm'
            });
        }

        var lineItemFields = [
            'lineItems_number',
            'lineItems_name',
            'lineItems_unit',
            'lineItems_unitPrice',
            'lineItems_quantity',
            'lineItems_totalPrice'
        ];

        var totalFields = [
            'total_beforeGST',
            'total_GST',
            'total_afterGST'
        ];

        if (_.contains(lineItemFields, field.name)) {
            // line items fields

            $("#" + field.name).css({
                width: field.valueWidth + 'mm'
            });

        } else {
            if (_.contains(totalFields, field.name)) {
                // total fields

                $("#" + field.name + " .key").css({
                    top: field.labelTop + page.marginTop + 'mm',
                    right: field.labelRight + page.marginRight + 'mm',
                    'text-align': 'right'
                });
                $("#" + field.name + " .value").css({
                    top: field.valueTop + page.marginTop + 'mm',
                    right: field.valueRight + page.marginRight + 'mm',
                    'text-align': 'right'
                });

            } else {
                // normal fields

                $("#" + field.name + " .key").css({
                    top: field.labelTop + page.marginTop + 'mm',
                    left: field.labelLeft + page.marginLeft + 'mm'
                });
                $("#" + field.name + " .value").css({
                    top: field.valueTop + page.marginTop + 'mm',
                    left: field.valueLeft + page.marginLeft + 'mm'
                });
            }
        }
    });

});