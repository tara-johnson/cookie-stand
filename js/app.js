'use strict';

var storeLocation = ['1st & Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki']

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

// ------------------------------
// Pike Place Object
// ------------------------------

var pikePlace = {
  name: '1st and Pike',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour:[],
  cookiesSoldEachHour:[],
  totalDailyCookieSales: 0
};

pikePlace.calcCustomersEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    // calc a random number between min/max and put it into the string
    this.customersEachHour.push(random(this.minCustomersPerHour,
      this.maxCustomersPerHour));
  }
}

pikePlace.calcCookiesSoldEachHour = function(){
  // multiply our random customers by the average cookies per
  for (var i = 0; i < hours.length; i++){
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
  }
}

pikePlace.calcCustomersEachHour();
pikePlace.calcCookiesSoldEachHour();

pikePlace.render = function(){
  // grab the parent from the DOM
  var ulEl = document.getElementById('pike-sales');
  for (var i = 0; i < hours.length; i++){
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
    // append the child to the parent
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookieSales + 'cookies';
  ulEl.appendChild(liEl);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

pikePlace.render();

// ------------------------------
//  SeaTac Airport Object
// ------------------------------

var SeaTac = {
  name: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour:[],
  cookiesSoldEachHour:[],
  totalDailyCookieSales: 0
};

SeaTac.calcCustomersEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    // calc a random number between min/max and put it into the string
    this.customersEachHour.push(random(this.minCustomersPerHour,
      this.maxCustomersPerHour));
  }
}

SeaTac.calcCookiesSoldEachHour = function(){
  // multiply our random customers by the average cookies per
  for (var i = 0; i < hours.length; i++){
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
  }
}

SeaTac.calcCustomersEachHour();
SeaTac.calcCookiesSoldEachHour();

SeaTac.render = function(){
  // grab the parent from the DOM
  var ulEl = document.getElementById('seatac-sales');
  for (var i = 0; i < hours.length; i++){
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
    // append the child to the parent
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookieSales + 'cookies';
  ulEl.appendChild(liEl);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

SeaTac.render();

// ------------------------------
//  Seattle Center Object
// ------------------------------

var SeattleCenter = {
  name: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersEachHour:[],
  cookiesSoldEachHour:[],
  totalDailyCookieSales: 0
};

SeattleCenter.calcCustomersEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    // calc a random number between min/max and put it into the string
    this.customersEachHour.push(random(this.minCustomersPerHour,
      this.maxCustomersPerHour));
  }
}

SeattleCenter.calcCookiesSoldEachHour = function(){
  // multiply our random customers by the average cookies per
  for (var i = 0; i < hours.length; i++){
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
  }
}

SeattleCenter.calcCustomersEachHour();
SeattleCenter.calcCookiesSoldEachHour();

SeattleCenter.render = function(){
  // grab the parent from the DOM
  var ulEl = document.getElementById('seattle-center-sales');
  for (var i = 0; i < hours.length; i++){
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
    // append the child to the parent
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookieSales + 'cookies';
  ulEl.appendChild(liEl);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

SeattleCenter.render();

// ------------------------------
//  Capitol Hill Object
// ------------------------------

var CapitolHill = {
  name: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour:[],
  cookiesSoldEachHour:[],
  totalDailyCookieSales: 0
};

CapitolHill.calcCustomersEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    // calc a random number between min/max and put it into the string
    this.customersEachHour.push(random(this.minCustomersPerHour,
      this.maxCustomersPerHour));
  }
}

CapitolHill.calcCookiesSoldEachHour = function(){
  // multiply our random customers by the average cookies per
  for (var i = 0; i < hours.length; i++){
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
  }
}

CapitolHill.calcCustomersEachHour();
CapitolHill.calcCookiesSoldEachHour();

CapitolHill.render = function(){
  // grab the parent from the DOM
  var ulEl = document.getElementById('capitol-hill-sales');
  for (var i = 0; i < hours.length; i++){
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
    // append the child to the parent
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookieSales + 'cookies';
  ulEl.appendChild(liEl);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

CapitolHill.render();

// ------------------------------
//  Alki Object
// ------------------------------

var Alki = {
  name: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersEachHour:[],
  cookiesSoldEachHour:[],
  totalDailyCookieSales: 0
};

Alki.calcCustomersEachHour = function(){
  for (var i = 0; i < hours.length; i++){
    // calc a random number between min/max and put it into the string
    this.customersEachHour.push(random(this.minCustomersPerHour,
      this.maxCustomersPerHour));
  }
}

Alki.calcCookiesSoldEachHour = function(){
  // multiply our random customers by the average cookies per
  for (var i = 0; i < hours.length; i++){
    this.cookiesSoldEachHour.push(Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookieSales = this.totalDailyCookieSales + this.cookiesSoldEachHour[i];
  }
}

Alki.calcCustomersEachHour();
Alki.calcCookiesSoldEachHour();

Alki.render = function(){
  // grab the parent from the DOM
  var ulEl = document.getElementById('alki-sales');
  for (var i = 0; i < hours.length; i++){
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
    // append the child to the parent
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDailyCookieSales + 'cookies';
  ulEl.appendChild(liEl);
}

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN
}

Alki.render();