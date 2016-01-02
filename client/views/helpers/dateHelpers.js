Template.registerHelper('formatDate', function(date) {
    return moment(date).format('D/M/YYYY');
});