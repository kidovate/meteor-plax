Package.describe({
  summary: "jQuery powered parallaxing."
});

Package.on_use(function (api, where) {
  api.use('jquery');
  api.add_files('lib/plax/js/plax.js', 'client');
});

