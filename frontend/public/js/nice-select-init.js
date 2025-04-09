document.addEventListener('DOMContentLoaded', function () {
  if (typeof $ !== 'undefined' && typeof $.fn.niceSelect !== 'undefined') {
    $('select').niceSelect();
  } else {
    console.error('jQuery or Nice Select is not loaded.');
  }
});