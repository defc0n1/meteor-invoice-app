Template.invoicesPrint.onRendered(function() {
  var
    printTemplate = this.data.item.printTemplate,
    page = {
      marginTop: printTemplate.pageMarginTop,
      marginRight: printTemplate.pageMarginTop,
      marginBottom: printTemplate.pageMarginTop,
      marginLeft: printTemplate.pageMarginTop
    };

  $.each(this.data.item.printTemplate.fields, function(index, field) {
    $("#" + field.name + " .key").css({
      top: field.labelTop + page.marginTop,
      left: field.labelLeft + page.marginLeft
    });
    $("#" + field.name + " .value").css({
      top: field.valueTop + page.marginTop,
      left: field.valueLeft + page.marginLeft
    });
  })
});