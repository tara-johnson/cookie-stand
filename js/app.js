'use strict';

var storeLocation = ['1st & Pike', 'SeaTac Airport', 'Seattle Center', 'Capital Hill', 'Alki']

var hoursOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']


var firstPike = {
  counter: 0,
  minCustomerHour: 23,
  maxCustomerHour: 65,
  avgPerCustomer: 6.3,
  cookiesPike: [],
  randomCustomerHour: function(){
    return Math.floor((Math.random() * (this.maxCustomerHour - this.minCustomerHour)) + this.minCustomerHour);
  },
  cookiesHour: function(){
    for (var i = 0; i < hoursOperation.length; i++){
      var avgPerHour = Math.ceil(this.avgPerCustomer * this.randomCustomerHour());
    this.cookiesPike.push(avgPerHour);
    }
  },
  renderHours: function(){
    console.log('cookiesPike ' + this.cookiesPike);
    var timeOfDay = document.getElementById('pike-sales');
    var newLi = document.createElement('li');
    newLi.textContent = this.cookiesPike;
    timeOfDay.appendChild(newLi);
  },
  renderTime: function(){
    for (var i = 0; i < hoursOperation.length; i++){
      hoursOperation[i].renderHours();
    }
  }
}

  // renderHours: function(){
  //   var timeOfDay = document.getElementById('pike-sales');
  //   var newLi = document.createElement('li');
  //   newLi.textContent = this.cookiesPike;
  //   timeOfDay.appendChild(newLi);
  // },
  // renderTime: function(){
  //   for (var i = 0; i < hoursOperation.length; i++){
  //     hoursOperation[i].renderHours();
//   //   }
//   }
// }


// renderFlavors: function () {
//   for (var i = 0; i < iceCreamStore.flavors.length; i++) {
//       iceCreamStore.flavors[i].renderIceCream();
//   }
// }


firstPike.randomCustomerHour();
firstPike.cookiesHour();
firstPike.renderHours();

// console.log('object ', firstPike);
// console.log('randomCustomerHour ', firstPike.randomCustomerHour());
// console.log('cookiesHour ', firstPike.cookiesHour());