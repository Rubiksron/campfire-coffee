'use strict';
//THE BELOW FUNCTION WAS FOUND AT https://www.cssscript.com/basic-hamburger-toggle-menu-css-vanilla-javascript/ ALSO THE RELATIVE CSS AND HTML FILES.
(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  });
}());











//
