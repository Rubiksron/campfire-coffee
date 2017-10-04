'use strict';

CoffeeShop.hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm' ];
var allStores = [];
CoffeeShop.tableDataEl = document.getElementById('tableData');
var globalAccumulator = 0;

function CoffeeShop (minCust, maxCust, cupsPerCust, locName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cupsPerCust = cupsPerCust;
  this.hourlyCupsTotal = [];
  this.locName = locName;
  this.dailyCups = 0;
  allStores.push(this);
  this.generateHourlyCoffee();
  this.renderShopRow();
}

CoffeeShop.prototype.randomCustomer = function(min, max) {
  return Math.random() * ((max - min) + 1) + min;
};

CoffeeShop.prototype.generateHourlyCoffee = function() {
  for (var i = 0; i < CoffeeShop.hours.length; i++) {
    var coffee = Math.ceil(this.cupsPerCust * CoffeeShop.prototype.randomCustomer(this.minCust, this.maxCust));
    this.hourlyCupsTotal.push(coffee);
    this.dailyCups += coffee;
    globalAccumulator += coffee;
  }
};

var renderHeaderRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < CoffeeShop.hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = CoffeeShop.hours[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  CoffeeShop.tableDataEl.appendChild(trEl);
};

CoffeeShop.prototype.renderShopRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < this.hourlyCupsTotal.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCupsTotal[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.dailyCups;
  trEl.appendChild(tdElem);
  CoffeeShop.tableDataEl.appendChild(trEl);
};

CoffeeShop.prototype.renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals: ';
  trEl.appendChild(tdEl);

  for( var i = 0; i < CoffeeShop.hours.length; i++ ) {
    var storesHourlyTotals = 0;
    var td = document.createElement('td');

    for( var j = 0; j < allStores.length; j++) {
      storesHourlyTotals += allStores[j].hourlyCupsTotal[i];
      td.textContent = storesHourlyTotals;
      trEl.appendChild(td);
    }
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = globalAccumulator;
  trEl.appendChild(tdElem);
  CoffeeShop.tableDataEl.appendChild(trEl);
};

//THE BELOW FUNCTION STILL NEEDS TO MANIPULATE THE DOM.
CoffeeShop.removeStore = function(store) {
  console.log('allStores before: ', allStores);
  allStores.splice(store, 1);
  console.log('allStores after: ', allStores);
};

function initExistingShops() {
  new CoffeeShop(48, 155, 2.2, 'Pike Place Market');
  new CoffeeShop(34, 95, 3.2, 'Capitol Hill');
  new CoffeeShop(12, 55, 2.2, 'Seattle Public Library');
  new CoffeeShop(47, 105, 1.5, 'South Lake Union');
  new CoffeeShop(79, 255, 1.1, 'Sea-Tac Airport');
  new CoffeeShop(13, 55, 1.9, 'Website Sales');
}
renderHeaderRow();
initExistingShops();
CoffeeShop.prototype.renderFooterRow();

var submitButton = document.getElementById('user_form');
submitButton.addEventListener('submit', addLocation);

function addLocation(e){
  e.preventDefault();

  var locName = e.target.loc_name.value;
  var minCust = e.target.minimum_customer.value;
  var maxCust = e.target.maximum_customer.value;
  var cupsPerCust = e.target.average_cups.value;

  if( !loc_name || !minCust || !maxCust || !cupsPerCust) {
    return alert('Fields cannot be empty!');
  }
  if(isNaN(minCust)) {
    e.target.minimum_customer.value = null;
    return alert('Please enter a number for the minimum customer field!');
  }
  if(isNaN(maxCust)) {
    e.target.maximum_customer.value = null;
    return alert('Please enter a number for the maximum customer field!');
  }
  if(isNaN(cupsPerCust)) {
    e.target.average_cups.value = null;
    return alert('Please enter a number for the average cups field!');
  }
  if(minCust > maxCust) {
    return alert('Your minimum customer must be less than the maximum customer!');
  }
  if(minCust < 0 || maxCust < 0 || cupsPerCust < 0) {
    return alert('You must enter a positive number!');
  }
  //THE BELOW FUNCTION DOES NOT CHANGE THE DOM, IT DOES RESET THE PROPERTY VALUES TO THE INPUT VALUES.
  for (var i = 0; i < allStores.length; i++) {
    if(locName === allStores[i].locName) {
      console.log('allStores[i] before:  ', allStores[i]);
      allStores[i].minCust = +e.target.minimum_customer.value;
      allStores[i].maxCust = +e.target.maximum_customer.value;
      allStores[i].cupsPerCust = +e.target.average_cups.value;
      console.log('allStores[i] after:  ', allStores[i]);
      CoffeeShop.tableDataEl.innerHTML = '';
      renderHeaderRow();
      initExistingShops();
      renderFooterRow();
      e.target.loc_name.value = null;
      e.target.minimum_customer.value = null;
      e.target.maximum_customer.value = null;
      e.target.average_cups.value = null;
      return;
    }
  }
  //THE LINE BELOW REMOVES THE PREVIOUS FOOTER BEFORE APPENDING THE NEW STORE'S ROW.
  tableData.deleteRow(-1);

  new CoffeeShop(+minCust, +maxCust, +cupsPerCust, locName);

  CoffeeShop.prototype.renderFooterRow();

  e.target.loc_name.value = null;
  e.target.minimum_customer.value = null;
  e.target.maximum_customer.value = null;
  e.target.average_cups.value = null;
}
