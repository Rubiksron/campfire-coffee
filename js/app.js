'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm'];
var stores = [];
var tableDataEl = document.getElementById('tableData');

function CoffeeShop (minCust, maxCust, avgCups, locName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.locName = locName;
  this.perHourArray = [];
  this.total = 0;
  this.renderShopRow();
}

CoffeeShop.prototype.randomCustomer = function(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1) + min);
};

CoffeeShop.prototype.generateHourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var coffee = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
    this.perHourArray.push(coffee);
    this.total += coffee;
  }
  console.log(this.perHourArray, 'this.perHourArray');
};

CoffeeShop.prototype.renderShopRow = function() {
  this.generateHourly();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < this.perHourArray.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.perHourArray[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.total;
  trEl.appendChild(tdElem);
  tableDataEl.appendChild(trEl);
};

function renderHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }

  var thElem = document.createElement('th');
  thElem.textContent = 'total';
  trEl.appendChild(thElem);
  tableDataEl.appendChild(trEl);
}
renderHeaderRow();

var pikePlaceMarket = new CoffeeShop(14, 55, 1.2, 'Pike Place Market');
var capitolHill = new CoffeeShop(14, 55, 1.2, 'Capitol Hill');
var seattlePublicLibrary = new CoffeeShop(14, 55, 1.2, 'Seattle Public Library');
var southLakeUnion = new CoffeeShop(14, 55, 1.2, 'South Lake Union');
var seaTacAirport = new CoffeeShop(14, 55, 1.2, 'Sea-Tac Airport');
var websiteSales = new CoffeeShop(14, 55, 1.2, 'Website Sales');
