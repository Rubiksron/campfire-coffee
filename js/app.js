'use strict';

CoffeeShop.hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm' ];
CoffeeShop.stores = [];
CoffeeShop.tableDataEl = document.getElementById('tableData');
CoffeeShop.perHourColumnTotals = [];

function CoffeeShop (minCust, maxCust, avgCups, locName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  this.locName = locName;
  this.dailySales = 0;
  this.salesPerHourArray = [];
  this.total = 0;
  this.renderShopRow();
  CoffeeShop.stores.push(this);
}

CoffeeShop.prototype.randomCustomer = function(min, max) {
  return (Math.random() * ((max - min) + 1) + min);
};

CoffeeShop.prototype.generateHourlyCoffee = function() {
  for (var i = 0; i < CoffeeShop.hours.length; i++) {
    var coffee = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
    this.salesPerHourArray.push(coffee);
    this.total += coffee;
  }
};

CoffeeShop.prototype.renderHeaderRow = function() {
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
CoffeeShop.prototype.renderHeaderRow();


CoffeeShop.prototype.renderShopRow = function() {
  this.generateHourlyCoffee();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < this.salesPerHourArray.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.salesPerHourArray[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.total;
  trEl.appendChild(tdElem);
  CoffeeShop.tableDataEl.appendChild(trEl);
};

//THE BELOW IS BROKEN BECAUSE OF THE LOG AND THE LOG CANNOT READ PROPERTY OF salesPerHourArray OF UNDEFINED////
var sumPerHourColumn = function() {
  for( var i = 0; i < CoffeeShop.hours.length; i++ ) {
    var storesHourlyTotals = 0;
    for( var j = 0; j < CoffeeShop.stores.length; j++) {
      storesHourlyTotals += CoffeeShop.stores[j].salesPerHourArray[i];
    }
    CoffeeShop.perHourColumnTotals.push(storesHourlyTotals);
    console.log('CoffeeShop.perHourColumnTotals: ', CoffeeShop.perHourColumnTotals);
    // console.log('this.salesPerHourArray: ', this.salesPerHourArray);
  }
};
sumPerHourColumn();
////////////////////////////////////////////////////////////////////////////////

//THE FUNCTION BELOW DOES NOT WORK/////////////////////////////////////////////////////

// CoffeeShop.prototype.removeStore = function ( store ) {
//   console.log('stores: ', CoffeeShop.stores);
//   CoffeeShop.stores.splice( store, 1 );
//   this.generateHourlyCoffee();
//   this.renderShopRow();
// };
////////////////////////////////////////////////////////////////////////////////////

new CoffeeShop(48, 155, 2.2, 'Pike Place Market');
new CoffeeShop(34, 95, 3.2, 'Capitol Hill');
new CoffeeShop(12, 55, 2.2, 'Seattle Public Library');
new CoffeeShop(47, 105, 1.5, 'South Lake Union');
new CoffeeShop(79, 255, 1.1, 'Sea-Tac Airport');
new CoffeeShop(13, 55, 1.9, 'Website Sales');


var submitButton = document.getElementById('user_form');
submitButton.addEventListener('submit', addLocation);

function addLocation(e){
  e.preventDefault();

  var locName = e.target.loc_name.value;
  var minCust = e.target.minimum_customer.value;
  var maxCust = e.target.maximum_customer.value;
  var avgCups = e.target.average_cups.value;

  if( !loc_name || !minCust || !maxCust || !avgCups) {
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
  if(isNaN(avgCups)) {
    e.target.average_cups.value = null;
    return alert('Please enter a number for the average cups field!');
  }




  if(minCust > maxCust) {
    return alert('Your minimum customer must be less than the maximum customer!');
  }

  if(minCust < 0 || maxCust < 0 || avgCups < 0) {
    return alert('You must enter a positive number!');
  }

//THE BELOW CONDITIONAL VALIDATES A NUMBER ENTRY, IT GETS STUCK RETURNING THE ALERT EVERYTIME, EXCEPT WHEN I USE A DEPRECATED METHOD TO COMPARE. MAYBE LOOK AT TO HOW I'M CALLING typeof.
  ////////////////////////////////////////////////////////////////////////////////////////////


//THE BELOW FUNCTION IS TO COMPARE THE ENTRY WITH THE EXISTING STORES AND UPDATE THE EXISTING ROW
  // for (var i = 0; i < stores.length; i++) {
  //   if(locName === stores[i].locName) {
      // console.log('same name found');
  //     use the existing stores name but add the new numbers.
  //   }
  // }
////////////////////////////////////////////////////////////////////////////////////////////


  new CoffeeShop(+minCust, +maxCust, +avgCups, locName);

  e.target.loc_name.value = null;
  e.target.minimum_customer.value = null;
  e.target.maximum_customer.value = null;
  e.target.average_cups.value = null;
}
