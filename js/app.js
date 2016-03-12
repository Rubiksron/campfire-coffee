'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm'];

function CoffeeShop (minCust, maxCust, avgCups, avgLbs, locName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.avgLbs = avgLbs;
  this.locName = locName;
  this.perHourArray = [];
  this.total = 0;
  this.perHourLbsArray = [];
  this.perHourLbs = 0;
  this.renderShopRow();
  console.log(this);
}
CoffeeShop.prototype.randomCustomer = function(min, max) {
  return Math.ceil(Math.random()*((max - min) + 1) + min);
}
CoffeeShop.prototype.generateHourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var coffee = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
     this.perHourArray.push(coffee);
    this.total += coffee;
  }
}

// CoffeeShop.prototype.generateHourlyLbs = function() {
//   for (var i = 0; i < hours.length; i++) {
//     var coffeeLbs = Math.ceil(this.avgLbs * this.randomCustomer(this.minCust, this.maxCust));
//     this.perHourLbsArray.push(coffeeLbs);
//     this.perHourLbs += coffeeLbs;
//   }
// }


CoffeeShop.prototype.renderShopRow = function() {
  this.generateHourly();
  var tableDataEl = document.getElementById('tableData');

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);
  var tdElem = document.createElement('td');
  tdElem.textContent = this.total;
  trEl.appendChild(tdElem);
  //this adds content to Average Lbs
  // var tdElement = document.createElement('td');
  // tdElement.textContent = this.perHourLbs;
  // trEl.appendChild(tdElement);
  //this adds content to Average Lbs
  for (var i = 0; i < this.perHourArray.length; i++) {

    var tdEl = document.createElement('td');
    tdEl.textContent = this.perHourArray[i];

  // for (var j = 0; i < this.perHourLbsArray.length; j++) {
  //   tdElem = document.createElement('td');
  //   tdElem.textContent = this.perHourLbsArray[j];
  //   trEl.appendChild(tdElem);
  // }
    trEl.appendChild(tdEl);
  }
  tableDataEl.appendChild(trEl);
}

function renderHeaderRow() {
  var tableDataEl = document.getElementById('tableData');

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  var thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trEl.appendChild(thElem);
  //added this Average Lbs row
  // var thElement = document.createElement('th');
  // thElement.textContent = 'Average Lbs';
  // trEl.appendChild(thElement);
  //ending here
for (var i = 0; i < hours.length; i++) {
  var tdEl = document.createElement('td');
  tdEl.textContent = hours[i];
  trEl.appendChild(tdEl);
}
tableDataEl.appendChild(trEl);
}
renderHeaderRow();

var pikePlaceMarket = new CoffeeShop(14, 55, 1.2, 3, 'Pike Place Market');
var capitolHill = new CoffeeShop(14, 55, 1.2, 3, 'Capitol Hill');
var seattlePublicLibrary = new CoffeeShop(14, 55, 1.2, 3, 'Seattle Public Library');
var southLakeUnion = new CoffeeShop(14, 55, 1.2, 3, 'South Lake Union');
var seaTacAirport = new CoffeeShop(14, 55, 1.2, 3, 'Sea-Tac Airport');
var websiteSales = new CoffeeShop(14, 55, 1.2, 3, 'Website Sales');


var submitButton = document.getElementById('user_form');
submitButton.addEventListener('submit', addLocation);

function addLocation(e){
  console.log(e);
  e.preventDefault();

  var minCust = e.target.minimum_customer.value;
  var maxCust = e.target.maximum_customer.value;
  var avgCups = e.target.average_cups.value;
  // var avgLbs = e.target.average_lbs.value;
  var locName = e.target.loc_name.value;

  var newLocation = new CoffeeShop(+minCust, +maxCust, +avgCups, locName);
}
