'use strict';

var storeLocation = ['1st & Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki']

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// array to hold our stores
var allStores = [];

// access the table that is in the DOM
var storeTable = document.getElementById('stores');

// Global variables for DOM access and such
var submitForm = document.getElementById('add-store-location-form');

// event handler
var AddStore = function(event){
  // console.log(event);

  var name = event.target.name.value;
  var minCustomersPerHour = event.target.minCustomersPerHour.value;
  var maxCustomersPerHour = event.target.maxCustomersPerHour.value;
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  var newStore = new Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer);

  // console.log(newStore);

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  // This empties the form fields after the data has been grabbed
  event.target.name.value = null;
  event.target.minCustomersPerHour.value = null;
  maxCustomersPerHour = event.target.maxCustomersPerHour.value = null;
  event.target.avgCookiesPerCustomer.value = null;
  
  renderAll();
  
};

// Event listener for location submit
submitForm.addEventListener('submit', AddStore);

// Event handler for the submission of new store
// function checkSubmit(event) {
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.name', event.target.name);
  // console.log(event.target.name.value);

  // event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event
// }

// constructor for store objects
function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalDailyCookieSales = 0;
  this.cookiesPerStorePerHour = []
  this.totalCookiesPerStorePerHour = 0;
  allStores.push(this);
}

Store.prototype.calcCustomersEachHour = function(){
    for (var i in hours){
      // calculate a random number between min/max and put it into the string
      this.customersEachHour[i] = (random(this.minCustomersPerHour, this.maxCustomersPerHour));
      }
  }
  
Store.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour();
  // multiply our random customers by the average cookies per hour
  for (var i in hours){
    this.cookiesSoldEachHour[i] = (Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales += this.cookiesSoldEachHour[i];
  }
}

// Store.prototype.calcTotalCookiesPerStorePerHour = function(){
//   this.calcCookiesSoldEachHour();
//   // create new array of cookies per store per hour
//   for (var i in hours){
//     for (j = 0; j < allStores.length; j++){
//       this.cookiesPerStorePerHour.push(allStores[j][i]);
//     }
//   }
//   for (var i in hours){
//     this.totalCookiesPerStorePerHour = this.totalCookiesPerStorePerHour += this.cookiesPerStorePerHour[i];
//   }
// }


Store.prototype.render = function() {

  this.calcCookiesSoldEachHour();

  // create tr
  var trEl = document.createElement('tr');

  // create td
  var tdEl = document.createElement('td');
  // give td content (name for individual stores)
  tdEl.textContent = this.name;
  tdEl.style.fontWeight = 'bold';
  // append the td to the tr
  trEl.appendChild(tdEl);

  for (var i in hours){
    // create td
    tdEl = document.createElement('td');
    // give td content (Hours for individual stores)
    tdEl.textContent = this.cookiesSoldEachHour[i];
    // append the td to the tr
    trEl.appendChild(tdEl);
  };

  // create td
  var tdEl = document.createElement('td');
  // give td content (total daily cookie sales)
  tdEl.textContent = this.totalDailyCookieSales;
  tdEl.style.fontWeight = 'bold';
  // append the td to the tr
  trEl.appendChild(tdEl);

  // append the tr to the table
  storeTable.appendChild(trEl);
}

// table heaader function
function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');

  // create td
  var thEl = document.createElement('th');
  // give th content
  thEl.textContent = 'Store Location';
  thEl.style.fontWeight = 'bold';
  // append the th to the tr
  trEl.appendChild(thEl);

  for (var i in hours){
  // create th
  thEl = document.createElement('th');
    // give th content (store hours)
  thEl.textContent = hours[i];
  thEl.style.fontWeight = 'bold';
  // append the th to the tr
  trEl.appendChild(thEl);
  }

  // create td
  var thEl = document.createElement('th');
  // give th content (daily location total)
  thEl.textContent = 'Daily Location Total';
  thEl.style.fontWeight = 'bold';
  // append the th to the tr
  trEl.appendChild(thEl);

  // append the tr to the table
  storeTable.appendChild(trEl);
}

// // table footer function

// this.calcTotalCookiesPerStorePerHour();

// function makeHourlyTotalsRow() {
//   // create tr
//   var trEl = document.createElement('tr');

//   // create td
//   var thEl = document.createElement('th');
//   thEl.style.border = 'none';
//   // give th content
//   thEl.textContent = 'Hourly Totals';
//   // append the th to the tr
//   trEl.appendChild(thEl);

//   for (var i in hours){
//   // create th
//   thEl = document.createElement('th');
//   thEl.style.backgroundColor = 'lightgrey';
//     // give th content (store hours)
//   thEl.textContent = totalCookiesPerStorePerHour;
//   // append the th to the tr
//   trEl.appendChild(thEl);
//   }

//   // create td
//   var thEl = document.createElement('th');
//   thEl.style.backgroundColor = 'lightgrey';
//   // give th content (daily location total)
//   thEl.textContent = 'Daily Location Total';
//   // append the th to the tr
//   trEl.appendChild(thEl);

//   // append the tr to the table
//   storeTable.appendChild(trEl);
// }

function random(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

// creation of store instances
new Store('Pike Place', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function renderAll() {
  storeTable.innerHTML = '';  

  // table header row
  makeHeaderRow();

  // Call the render function to create the page
  for (var i in allStores){
    allStores[i].render();
  };

  // table footer row of hourly totals
  // makeHourlyTotalsRow();
}

renderAll();