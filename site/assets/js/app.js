/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  'use strict';

  var $page = $('#app'),
      options = {
    debug: true,
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 1250, // Duration of our animation
      render: function render($container) {
        // Add your CSS animation reversing class
        $('.offCanvas').removeClass('offCanvas-open');
        $('.overlay').removeClass('overlay-active');
        $('.content').removeClass('offCanvas-open');
        $container.removeClass('is-entered');
        $container.addClass('is-exiting');
        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 1250,
      render: function render($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');
        $container.addClass('is-entered');
        // Inject the new content
        $container.html($newContent);

        $('.hamburger').click(function () {
          $('.offCanvas').toggleClass('offCanvas-open');
          $('.overlay').toggleClass('overlay-active');
          $('.content').toggleClass('offCanvas-open');
        });
        $('.overlay').click(function () {
          $('.offCanvas').removeClass('offCanvas-open');
          $('.overlay').removeClass('overlay-active');
          $('.content').removeClass('offCanvas-open');
          $('.modal').removeClass('modal-open');
        });

        var modelPlan = $('li[data-model]');
        var modal = $('.modal');
        var modalImage = $('.modal img');

        modelPlan.click(function () {
          $('.overlay').addClass('overlay-active');
          var src = $(this).find('img').attr('src');

          modalImage.attr('src', src);
          modal.addClass('modal-open');
        });
      }
    }
  },
      smoothState = $page.smoothState(options).data('smoothState');
});

/***/ })
/******/ ]);