var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm'];

var stores = ['pikePlaceMarket', 'capitolHill', 'seattlePublicLibrary', 'southLakeUnion', 'seaTacAirport', 'websiteSales'];

function CoffeeShop (minCust, maxCust, avgCups, locName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCups = avgCups;
  // this.avgPounds = avgPounds;
  this.locName = locName;
  this.perHourArray = [];
  this.total = 0;
  this.renderShopRow();
}
CoffeeShop.prototype.randomCustomer = function(min, max) {
  return Math.floor(Math.random()*((max - min) + 1) + min);
}
CoffeeShop.prototype.generateHourly = function() {
  for (var i = 0; i < hours.length; i++) {
    var coffee = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
    this.perHourArray.push(coffee);
    this.total += coffee;
  }
}
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

  for (var i = 0; i < this.perHourArray.length; i++) {

    var tdEl = document.createElement('td');
    tdEl.textContent = this.perHourArray[i];
    trEl.appendChild(tdEl);
  }
  tableDataEl.appendChild(trEl);
}

function renderHeaderRow() {
  var tableDataEl = document.getElementById('tableData');

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);
  var thElem = document.createElement('th');
  thElem.textContent = 'total';
  trEl.appendChild(thElem);

for (var i = 0; i < hours.length; i++) {
  var tdEl = document.createElement('td');
  tdEl.textContent = hours[i];
  trEl.appendChild(tdEl);
}
tableDataEl.appendChild(trEl);
}
renderHeaderRow();

var pikePlaceMarket = new CoffeeShop(14, 55, 1.2, 'pikePlaceMarket');
var capitolHill = new CoffeeShop(14, 55, 1.2, 'capitolHill');
var seattlePublicLibrary = new CoffeeShop(14, 55, 1.2, 'seattlePublicLibrary');
var southLakeUnion = new CoffeeShop(14, 55, 1.2, 'southLakeUnion');
var seaTacAirport = new CoffeeShop(14, 55, 1.2, 'seaTacAirport');
var websiteSales = new CoffeeShop(14, 55, 1.2, 'websiteSales');







// var pikePlaceMarket = {
//   perHourArray: [],
//   total: 0,
//   minCust: 14,
//   maxCust: 55,
//   avgPounds: 3.7,
//   avgCups: 1.2,
//   name: "Pike Place Market",
//
//
//   randomCustomer:function(min, max) {
//     return Math.floor(Math.random()*((max - min) + 1) +
//     min);
//     console.log();
//   },
//   generateHourly: function() {
//     for (i = 0; i < hours.length; i++) {
//       var cups = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
//       this.perHourArray.push(cups);
//       this.total += cups;
//     }
//   },
//   render: function() {
//     this.generateHourly();
//     var thEl = document.createElement("th");
//     thEl.appendChild(document.createTextNode(this.name));
//     var sectionElement = document.getElementById("data");
//     sectionElement.appendChild(thEl);
//     for (var i = 0; i < hours.length; i++) {
//       var tdEl = document.createElement("td");
//       tdEl.textContent = hours[i] + " : " + this.perHourArray[i];
//       thEl.appendChild(tdEl);
//     }
//     var totalCups = document.createElement("td");
//     totalCups.textContent = "total :"  + this.total;
//     thEl.appendChild(totalCups);
//   }
// };
// pikePlaceMarket.render();
//
//
// var capitolHill = {
//   perHourArray: [],
//   total: 0,
//   minCust: 14,
//   maxCust: 55,
//   avgPounds: 3.7,
//   avgCups: 1.2,
//   name: "Capitol Hill",
//
//
//   randomCustomer:function(min, max) {
//     return Math.floor(Math.random()*((max - min) + 1) +
//     min);
//     console.log();
//   },
//   generateHourly: function() {
//     for (i = 0; i < hours.length; i++) {
//       var cups = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
//       this.perHourArray.push(cups);
//       this.total += cups;
//     }
//   },
//   render: function() {
//     this.generateHourly();
//     var ulEl = document.createElement("ul");
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionElement = document.getElementById("data");
//     sectionElement.appendChild(ulEl);
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hours[i] + " : " + this.perHourArray[i];
//       ulEl.appendChild(liEl);
//     }
//     var totalCups = document.createElement("li");
//     totalCups.textContent = "total :"  + this.total;
//     ulEl.appendChild(totalCups);
//   }
// };
// capitolHill.render();
//
//
// var seattlePublicLibrary = {
//   perHourArray: [],
//   total: 0,
//   minCust: 14,
//   maxCust: 55,
//   avgPounds: 3.7,
//   avgCups: 1.2,
//   name: "Seattle Public Library",
//
//
//   randomCustomer:function(min, max) {
//     return Math.floor(Math.random()*((max - min) + 1) +
//     min);
//     console.log();
//   },
//   generateHourly: function() {
//     for (i = 0; i < hours.length; i++) {
//       var cups = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
//       this.perHourArray.push(cups);
//       this.total += cups;
//     }
//   },
//   render: function() {
//     this.generateHourly();
//     var ulEl = document.createElement("ul");
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionElement = document.getElementById("data");
//     sectionElement.appendChild(ulEl);
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hours[i] + " : " + this.perHourArray[i];
//       ulEl.appendChild(liEl);
//     }
//     var totalCups = document.createElement("li");
//     totalCups.textContent = "total :"  + this.total;
//     ulEl.appendChild(totalCups);
//   }
// };
// seattlePublicLibrary.render();
//
//
// var southLakeUnion = {
//   perHourArray: [],
//   total: 0,
//   minCust: 14,
//   maxCust: 55,
//   avgPounds: 3.7,
//   avgCups: 1.2,
//   name: "South Lake Union",
//
//
//   randomCustomer:function(min, max) {
//     return Math.floor(Math.random()*((max - min) + 1) +
//     min);
//     console.log();
//   },
//   generateHourly: function() {
//     for (i = 0; i < hours.length; i++) {
//       var cups = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
//       this.perHourArray.push(cups);
//       this.total += cups;
//     }
//   },
//   render: function() {
//     this.generateHourly();
//     var ulEl = document.createElement("ul");
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionElement = document.getElementById("data");
//     sectionElement.appendChild(ulEl);
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hours[i] + " : " + this.perHourArray[i];
//       ulEl.appendChild(liEl);
//     }
//     var totalCups = document.createElement("li");
//     totalCups.textContent = "total :"  + this.total;
//     ulEl.appendChild(totalCups);
//   }
// };
// southLakeUnion.render();
//
//
// var seaTacAirport = {
//   perHourArray: [],
//   total: 0,
//   minCust: 14,
//   maxCust: 55,
//   avgPounds: 3.7,
//   avgCups: 1.2,
//   name: "Sea-Tac Airport",
//
//
//   randomCustomer:function(min, max) {
//     return Math.floor(Math.random()*((max - min) + 1) +
//     min);
//     console.log();
//   },
//   generateHourly: function() {
//     for (i = 0; i < hours.length; i++) {
//       var cups = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
//       this.perHourArray.push(cups);
//       this.total += cups;
//     }
//   },
//   render: function() {
//     this.generateHourly();
//     var ulEl = document.createElement("ul");
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionElement = document.getElementById("data");
//     sectionElement.appendChild(ulEl);
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hours[i] + " : " + this.perHourArray[i];
//       ulEl.appendChild(liEl);
//     }
//     var totalCups = document.createElement("li");
//     totalCups.textContent = "total :"  + this.total;
//     ulEl.appendChild(totalCups);
//   }
// };
// seaTacAirport.render();
//
//
// var websiteSales = {
//   perHourArray: [],
//   total: 0,
//   minCust: 14,
//   maxCust: 55,
//   avgPounds: 3.7,
//   avgCups: 1.2,
//   name: "Website Sales",
//
//
//   randomCustomer:function(min, max) {
//     return Math.floor(Math.random()*((max - min) + 1) +
//     min);
//     console.log();
//   },
//   generateHourly: function() {
//     for (i = 0; i < hours.length; i++) {
//       var cups = Math.ceil(this.avgCups * this.randomCustomer(this.minCust, this.maxCust));
//       this.perHourArray.push(cups);
//       this.total += cups;
//     }
//   },
//   render: function() {
//     this.generateHourly();
//     var ulEl = document.createElement("ul");
//     ulEl.appendChild(document.createTextNode(this.name));
//     var sectionElement = document.getElementById("data");
//     sectionElement.appendChild(ulEl);
//     for (var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement("li");
//       liEl.textContent = hours[i] + " : " + this.perHourArray[i];
//       ulEl.appendChild(liEl);
//     }
//     var totalCups = document.createElement("li");
//     totalCups.textContent = "total :"  + this.total;
//     ulEl.appendChild(totalCups);
//   }
// };
// websiteSales.render();
