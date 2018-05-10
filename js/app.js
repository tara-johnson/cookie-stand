'use strict';

var storeLocation = ['1st & Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki']

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// array to hold our stores
var allStores = [];

// access the table that is in the DOM
var storeTable = document.getElementById('stores');

// ============================================================
// WEDNESDAY LAB - ADD LOCATION VIA SUBMIT AND EVENT LISTENER //
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

  console.log(newStore);

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  // This empties the form fields after the data has been grabbed
  event.target.name.value = null;
  event.target.minCustomersPerHour.value = null;
  maxCustomersPerHour = event.target.maxCustomersPerHour.value = null;
  event.target.avgCookiesPerCustomer.value = null;

  renderAll();

};

// Event handler for the submission of new store
function checkSubmit(event) {
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.name', event.target.name);
  console.log(event.target.name.value);

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event
}

// Event listener for location submit
submitForm.addEventListener('submit', AddStore);

// ============================================================


// constructor for store objects
function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalDailyCookieSales = 0;
  allStores.push(this);
}

Store.prototype.calcCustomersEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    // Calculate a random number between min/max and put it into the string
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  }
  
Store.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour();
  // Multiply our random customers by the average cookies per hour
  for (var i = 0; i < hours.length; i++){
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
  }
}

Store.prototype.render = function() {

  this.calcCookiesSoldEachHour();

  // create tr
  var trEl = document.createElement('tr');

  // create td
  var tdEl = document.createElement('td');
  tdEl.style.backgroundColor = 'lightgrey';
  // give td content (name for individual stores)
  tdEl.textContent = this.name;
  // append the td to the tr
  trEl.appendChild(tdEl);

  for (var i = 0; i < this.cookiesSoldEachHour.length; i++){
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
  thEl.style.border = 'none';
  // give th content
  thEl.textContent = 'Store Location';
  // append the th to the tr
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
  // create th
  thEl = document.createElement('th');
  thEl.style.backgroundColor = 'lightgrey';
    // give th content (store hours)
  thEl.textContent = hours[i];
  // append the th to the tr
  trEl.appendChild(thEl);
  }

  // create td
  var thEl = document.createElement('th');
  thEl.style.backgroundColor = 'lightgrey';
  // give th content (daily location total)
  thEl.textContent = 'Daily Location Total';
  // append the th to the tr
  trEl.appendChild(thEl);

  // append the tr to the table
  storeTable.appendChild(trEl);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

// creation of store instances
new Store('Pike Place', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capital Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function renderAll() {
  // table header row
  makeHeaderRow();

  document.getElementById('stores').innerHTML = "";

  // Call the render function to create the page
  for (var i = 0; i < allStores.length; i++){
    allStores[i].render();
  };
}

renderAll();

// console.table(allStores);