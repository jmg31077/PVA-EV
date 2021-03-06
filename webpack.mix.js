let mix = require('laravel-mix')

mix.js('resources/assets/js/app.js', 'public/js')
  .copy('resources/assets/css/roboto-fontface.css', 'public/css')
  .copy('resources/assets/img', 'public/img', false)
  .copy('resources/assets/fonts', 'public/fonts', false)
  .sass('resources/assets/sass/report-print.scss', 'public/css')