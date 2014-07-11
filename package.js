Package.describe({
    summary: "Make your credit card form better in one line of code."
});

Package.on_use(function (api) {
    api.use('jquery');
    api.add_files('card.js', 'client');
    api.add_files('card.css', 'client');
});
