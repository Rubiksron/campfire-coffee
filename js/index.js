'use strict';


var hamburgerIconBtnEl = document.getElementById('hamburger-icon-btn');
hamburgerIconBtnEl.addEventListener('click', handleClickHamburgerBtn);
console.log(hamburgerIconBtnEl, 'hamburgerIconBtnEl');

function handleClickHamburgerBtn() {
  console.log('hello from handleClickHamburgerBtn!!');
  ulMenu.removeAttribute('hidden');
};
