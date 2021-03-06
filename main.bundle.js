/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	$(document).ready(function () {
	  $.ajax({
	    type: 'GET',
	    url: 'https://enigmatic-beach-47018.herokuapp.com/api/v1/foods',
	    success: function success(result) {
	      var foodData = result;
	      displayFood(foodData);
	    }
	  });
	});

	$(document).ready(function () {
	  $.ajax({
	    type: 'GET',
	    url: 'https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/1/foods',
	    success: function success(result) {
	      var breakfastData = result;
	      displayBreakfast(breakfastData);
	    }
	  });
	});

	$(document).ready(function () {
	  $.ajax({
	    type: 'GET',
	    url: 'https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/2/foods',
	    success: function success(result) {
	      var lunchData = result;
	      displayLunch(lunchData);
	    }
	  });
	});

	$(document).ready(function () {
	  $.ajax({
	    type: 'GET',
	    url: 'https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/3/foods',
	    success: function success(result) {
	      var dinnerData = result;
	      displayDinner(dinnerData);
	    }
	  });
	});

	function addBreakfast(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 1 + '/foods/' + food, {
	    type: 'POST'
	  });
	  location.reload();
	  displayTotals();
	}

	function addLunch(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 2 + '/foods/' + food, {
	    type: 'POST'
	  });
	  location.reload();
	  displayTotals();
	}

	function addDinner(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 3 + '/foods/' + food, {
	    type: 'POST'
	  });
	  location.reload();
	  displayTotals();
	}

	function displayFood(foodData) {
	  foodData.forEach(function (food, index) {
	    $('#foods-table tbody').append('<tr>\n        <td>' + food.name + '</td>\n        <td>' + food.calories + ' </td>\n\n        <td> <button onclick= "addBreakfast(' + food.id + ')">Add</button></td>\n\n        <td> <button onclick= "addLunch(' + food.id + ')" >Add</button></td>\n\n        <td> <button onclick= "addDinner(' + food.id + ')" >Add</button></td>\n\n      </tr>');
	  });
	};

	function displayBreakfast(breakfastData) {
	  breakfastData.foods.forEach(function (food, index) {
	    $('#breakfast-table tbody').append('<tr>\n      <td>' + food.name + '</td>\n      <td>' + food.calories + ' </td>\n      <td><button onclick = "deleteBreakfastItem(' + food.id + ')">Delete</button> </td>\n    </tr>');
	  });
	  $('#breakfast-total-cals').append(' ' + addMealTotal(breakfastData));
	};

	function displayLunch(lunchData) {
	  lunchData.foods.forEach(function (food, index) {
	    $('#lunch-table tbody').append('<tr>\n      <td>' + food.name + '</td>\n      <td>' + food.calories + ' </td>\n    </tr>');
	  });
	  $('#lunch-total-cals').append('' + addMealTotal(lunchData));
	};

	function displayDinner(dinnerData) {
	  dinnerData.foods.forEach(function (food, index) {
	    $('#dinner-table tbody').append('<tr>\n      <td>' + food.name + '</td>\n      <td>' + food.calories + ' </td>\n    </tr>');
	  });
	  $('#dinner-total-cals').append('' + addMealTotal(dinnerData));
	  displayTotals();
	};

	function addMealTotal(mealInfo) {
	  var calNums = [];
	  mealInfo.foods.forEach(function (food, index) {
	    calNums.push(food.calories);
	  });
	  return calNums.reduce(function (x, y) {
	    return x + y;
	  });
	}

	function displayTotals() {
	  br_cal = $('tfoot td#breakfast-total-cals').text();
	  ln_cal = $('tfoot td#lunch-total-cals').text();
	  dn_cal = $('tfoot td#dinner-total-cals').text();
	  total_cal = +br_cal + +ln_cal + +dn_cal;
	  goal_cal = 2000;
	  $('#totals-table tbody').append('<tr>\n    <td>' + goal_cal + '</td>\n    <td>' + total_cal + ' </td>\n    <td>' + (goal_cal - total_cal) + ' </td>\n  </tr>');
	}

	function deleteBreakfastItem(food) {
	  $.ajax('https://enigmatic-beach-47018.herokuapp.com/api/v1/meals/' + 1 + '/foods/' + food, {
	    type: 'DELETE'
	  });
	  location.reload();
	  displayTotals();
	}

/***/ })
/******/ ]);