Router.route('admin.companies', {
    path: '/admin/companies',
    controller: CompaniesViewController
});

Router.route('admin.companies.edit', {
    path: '/admin/companies/edit/:_id',
    controller: CompaniesEditController
});