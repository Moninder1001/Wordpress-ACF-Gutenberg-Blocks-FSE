/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Contact_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Contact-data */ "./assets/scripts/modules/Contact-data.js");
/* harmony import */ var _modules_Overview_proceedings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Overview-proceedings */ "./assets/scripts/modules/Overview-proceedings.js");
/* harmony import */ var _modules_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Location */ "./assets/scripts/modules/Location.js");
/* harmony import */ var _modules_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Contact */ "./assets/scripts/modules/Contact.js");
//Import Class




var contactdata = new _modules_Contact_data__WEBPACK_IMPORTED_MODULE_0__["default"]();
var proceedingdata = new _modules_Overview_proceedings__WEBPACK_IMPORTED_MODULE_1__["default"]();
var locationdata = new _modules_Location__WEBPACK_IMPORTED_MODULE_2__["default"]();
var contactperson = new _modules_Contact__WEBPACK_IMPORTED_MODULE_3__["default"]();
jQuery(document).ready(function ($) {
  //popup image
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      // duration of the effect, in milliseconds
      easing: 'ease-in-out',
      // CSS transition easing function

      opener: function opener(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  //popup video
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  jQuery('.video-button-run').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function id(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1&muted=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function id(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1&muted=1"'
        }
      }
    }
  });
  //popup image

  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      // duration of the effect, in milliseconds
      easing: 'ease-in-out',
      // CSS transition easing function

      opener: function opener(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  //popup video
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });

  //Header menü
  var mainNav = document.getElementById("menu-header-menu");
  var navBarToggle = document.getElementById("js-navbar-toggle");
  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  //Swiper Verfahren Video
  var swiper = new Swiper(".mySwiper2", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    preloadImages: false,
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

//mySwiperImageGallery 18.02
var swiper = new Swiper(".mySwiperImageGallery", {
  slidesPerView: "auto",
  centeredSlides: true,
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  pagination: {
    el: '.wrapper-video-pagination > .swiper-pagination-video-new',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '"></span>';
      ;
    }
  },
  navigation: {
    nextEl: ".wrapper-video-pagination > .swiper-button-video-next",
    prevEl: ".wrapper-video-pagination > .swiper-button-video-prev"
  }
});

//Verfahren Header Image Gallery
var swiper = new Swiper(".mySwiperProceedingsHeader", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

//Location Header Image Gallery
var swiper = new Swiper(".mySwiperlocationHeader", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
if (jQuery(".sidebarmenu")[0]) {
  var is_toc = false;
  var css_class = "";
  jQuery(".toc").each(function () {
    is_toc = true;
    jQuery(".sidebarmenu ol").append("<li><a href='#" + jQuery(this).attr("id") + "'>" + jQuery(this).attr("data-toctitle") + "</a></li>");
  });
  if (!is_toc) {
    jQuery(".subnav .navpoints").hide();
  }
}

//List numbering
jQuery(".nummber").each(function (i) {
  jQuery(this).find("number").remove().end().prepend("<span class='number'>" + (i + 1) + ". </span>");
});

//Smoothscroll Verfahren
jQuery(document).on("scroll", onScroll);

//smoothscroll
jQuery('#nav-id ol li a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  jQuery(document).off("scroll");
  jQuery('a').each(function () {
    jQuery(this).removeClass('active');
  });
  jQuery(this).addClass('active');
  var target = this.hash,
    menu = target;
  target = jQuery(target);
  jQuery('html, body').stop().animate({
    'scrollTop': target.offset().top + 2
  }, 500, 'swing', function () {
    window.location.hash = target;
    jQuery(document).on("scroll", onScroll);
  });
});
function onScroll(event) {
  var scrollPos = jQuery(document).scrollTop();
  jQuery('#nav-id a').each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));
    var refElement_pos = refElement.offset().top;
    var header_height = jQuery('.navbar ').height();
    var refElement_pos_total = refElement_pos;
    var scrollPos_total = scrollPos + header_height;
    if (refElement_pos < scrollPos_total && refElement_pos + refElement.height() > scrollPos_total) {
      jQuery('#nav-id ol li a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

//Verfahren Page menu
jQuery(".down").click(function () {
  jQuery('html, body').animate({
    scrollTop: jQuery(".up").offset().top
  }, 1500);
});
var btn = jQuery('#button');
btn.on('click', function (e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: 0
  }, '300');
});
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

//PopUp https://codepen.io/kaiak/pen/yLyqxOY
// jQuery("#popupIdVideo").click(function() {
//   jQuery(".popup").fadeIn(500);
// });
jQuery(".close").click(function () {
  jQuery(".popup").fadeOut(500);
});

//open popup
jQuery('.popup-button').on('click', function (event) {
  event.preventDefault();
  var number = jQuery(this).data("number");
  console.log('.popup-' + number);
  jQuery('.popup-' + number).fadeIn(500);
});

//https://stackoverflow.com/questions/57375427/multiple-popup-in-same-page
// //close popup
// $('.popup').on('click', function(event){
//   if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
//     event.preventDefault();
//     $(this).removeClass('is-visible');
//   }
// });

// //close popup when clicking the esc keyboard button
// $(document).keyup(function(event){
//     if(event.which=='27'){
//       $('.popup').removeClass('is-visible');
//     }
//   });

/***/ }),

/***/ "./assets/scripts/modules/Contact-data.js":
/*!************************************************!*\
  !*** ./assets/scripts/modules/Contact-data.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var contactData = /*#__PURE__*/function () {
  function contactData() {
    _classCallCheck(this, contactData);
    this.getDataId();
    this.getProcedureLocation();
  }
  _createClass(contactData, [{
    key: "getProcedureLocation",
    value: function getProcedureLocation() {
      this.dataId = jQuery("#dataId").val();
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/procedurelocation/v1/data/?term=' + this.dataId, function (data) {
        var locationHtml = "";
        var country_data = [];
        jQuery.each(data, function (i, item) {
          if (!country_data.includes(item.country_code)) {
            if (item.country_code == item.country_code) {
              locationHtml += "<li>" + item.country_code + "</li>";
              country_data.push(item.country_code);
            }
          }
        });
        var ul = jQuery('#procedurelocation');
        ul.append(locationHtml);
      });
    }
  }, {
    key: "getSwiperJS",
    value: function getSwiperJS() {
      //Contact Proceedings
      var swiperImage = new Swiper(".mySwiperImge", {
        direction: "vertical",
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
      var swiperContact = new Swiper(".mySwiperContakt", {
        direction: 'horizontal',
        observer: true,
        observeParents: true,
        pagination: {
          el: '.wrapper-pagination > .swiper-pagination-new',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '"></span>';
            ;
          }
        },
        navigation: {
          nextEl: ".wrapper-pagination > .swiper-button-next",
          prevEl: ".wrapper-pagination > .swiper-button-prev"
        }
      });
      swiperImage.controller.control = swiperContact;
      swiperContact.controller.control = swiperImage;
    }
  }, {
    key: "getDataId",
    value: function getDataId() {
      this.getSwiperJS();
      this.dataId = jQuery("#dataId").val();
      var img = '';
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedings/v1/data/?term=' + this.dataId, function (data) {
        if (data.length == 0) {
          jQuery('.proceedings-contact').css("display", "none");
          jQuery('.no-data').html('<h1>Kein Standort ausgewählt</h1>');
          jQuery('.proceedings-contact').removeClass('toc');
          jQuery('.call-to-action').css("display", "none");
          jQuery('.proceedings-contact').removeAttr('data-toctitle');
        } else {
          //Array true
          jQuery('.no-data').css("display", "none");
          jQuery.each(data, function (key, val) {
            jQuery("#wrapper-contact-js").after("\n                        <div class=\"swiper-slide\">\n                            <div class=\"wrapper-contact\">\n                                <div class=\"header-contact\">\n                                    <div class=\"code\">\n                                    <span>\n                                       ".concat(val.country_code, "\n                                    </span>   \n                                    </div>\n                                    <div class=\"country\">\n                                        ").concat(val.name, "\n                                    </div>\n                                </div>\n                                <div class=\"body-contact\">\n                                    <div class=\"address\">\n                                        <ul>\n                                            <li>").concat(val.street_number, "</li>\n                                            <li>").concat(val.postcode, "</li>\n                                            <li>").concat(val.country, "</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"contact\">\n                                        <ul>\n                                            <li class=\"email\"><a href=\"\">").concat(val.email, "</a></li>\n                                            <li class=\"phone\"><a href=\"\">").concat(val.phone, "</a></li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"contact-cta\">\n                                        <span class=\"btn-decor-left\"></span>\n                                        <a href=\"").concat(val.permalink, "\">Zum Standort</a>\n                                        <span class=\"btn-decor-right\"></span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    "));
          });
          jQuery.each(data, function (key, val) {
            // console.log(val.slider_image);
            // console.log(val.thumbnail);

            if (val.slider_image !== false) {
              img += "<img src=\"".concat(val.slider_image, "\" alt=\"").concat(val.name, "\" height=\"").concat(val.slider_image_size.proceeding_header.width, "\" width=\"").concat(val.slider_image_size.proceeding_header.height, "\">");
            }

            //console.log(val.slider_image_size.proceeding_header);
            // }else if(val.thumbnail !== false){
            //     img += `<img src="${val.thumbnail}" alt="${val.name}">`;
            // }else{
            //     img += `<img src="https://dummyimage.com/640x360/fff/aaa" alt="">`;
            // }

            jQuery("#wrapper-image-js").after("\n                    <div class=\"swiper-slide\">\n                        <div class=\"main-image\">\n                        ".concat(img, "\n                        </div>\n                    </div>\n                    "));
          });
        }
      });
    }
  }]);
  return contactData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactData);

/***/ }),

/***/ "./assets/scripts/modules/Contact.js":
/*!*******************************************!*\
  !*** ./assets/scripts/modules/Contact.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var contactPerson = /*#__PURE__*/function () {
  function contactPerson() {
    _classCallCheck(this, contactPerson);
    //function
    this.getData();
  }
  _createClass(contactPerson, [{
    key: "getData",
    value: function getData() {
      this.dataId = jQuery("#dataIdContact").val();
      //console.log(this.dataId)
      // jQuery.getJSON( '' + this.dataId, function($data){
      //     console.log(this.dataId)
      // })
    }
  }]);
  return contactPerson;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPerson);

/***/ }),

/***/ "./assets/scripts/modules/Location.js":
/*!********************************************!*\
  !*** ./assets/scripts/modules/Location.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var locationData = /*#__PURE__*/function () {
  function locationData() {
    _classCallCheck(this, locationData);
    this.getLoacationData();
  }
  _createClass(locationData, [{
    key: "getLoacationData",
    value: function getLoacationData() {
      //console.log('getLoacationData in location.js');
      this.dataId = jQuery("#dataIdLoacation").val();
      var catid = this.dataId ? this.dataId : '';
      var url = proceedingsData.root_url + '/wp-json/locationresult/v1/data/?term=' + catid;
      jQuery.getJSON(url, function (data) {
        //console.log('getLoacationData data:', data);
        var results = data.results;
        //grouping by category first

        var allCats = {};
        jQuery.each(results, function (i, item) {
          if (!item.cat) {
            return true;
          }
          if (!(item.cat in allCats)) {
            allCats[item.cat] = [];
          }
          allCats[item.cat].push(item.name);
          return true;
        });

        //console.log('getLoacationData allCats:', allCats);
        var locationHtml = "";
        jQuery.each(allCats, function (cat, locs) {
          //console.log(item.name);
          locationHtml += "<li>" + cat + '<ul>';
          jQuery.each(locs, function (j, loc) {
            locationHtml += "<li>" + loc + "</li>";
          });
          locationHtml += "</ul>";
        });
        var ul = jQuery('#wrapper-location>ul');
        // remove its children
        ul.children().remove();
        ul.append(locationHtml);
      });
    }
  }]);
  return locationData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationData);

/***/ }),

/***/ "./assets/scripts/modules/Overview-proceedings.js":
/*!********************************************************!*\
  !*** ./assets/scripts/modules/Overview-proceedings.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var proceedingData = /*#__PURE__*/function () {
  /*  */

  function proceedingData() {
    _classCallCheck(this, proceedingData);
    //Buttons
    this.useButton = jQuery("#use");
    this.useLocationButton = jQuery("#location");
    this.useSearchButton = jQuery("#serach");

    //Elemente
    this.wrapper = jQuery("#wrapper");
    this.bgDistance = jQuery("#bg-distance");
    this.wrapperSerachResults = jQuery("#wrapper-serach-results");
    this.wrapperLocationResults = jQuery("#wrapper-location-results");
    this.wrapperUseResults = jQuery("#wrapper-use-results");
    this.lottieview = jQuery("#lottieview");
    this.openCloseButton = jQuery("#open-close-button");
    this.useFilter = jQuery('.use-filter');
    this.locatFilter = jQuery('.location-filter');
    this.serachFilter = jQuery('.serach-filter');
    this.filterMain = jQuery('.filter-main');
    this.filterBody = jQuery('.filter-body');
    this.events();
    //this.lottie() 
    this.getDataResults();
    this.getDataUse();
    this.getDataLocations();
  }
  _createClass(proceedingData, [{
    key: "events",
    value: function events() {
      this.useSearchButton.on("click", this.activeSerachResults.bind(this));
      this.useLocationButton.on("click", this.activeLocationResults.bind(this));
      this.useButton.on("click", this.activeUseResults.bind(this));
      this.openCloseButton.on("click", this.close.bind(this));
    }
  }, {
    key: "typingLogic",
    value: function typingLogic() {}

    //Gib mir die freie Suche
  }, {
    key: "getDataSearch",
    value: function getDataSearch() {}

    //Gib mir alle Kategorien von Verfahren
  }, {
    key: "getDataUse",
    value: function getDataUse() {
      var that = this;
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatarestapi/v1/data/', function (data) {
        //console.log('got data in getDataUse:', data)
        var cat = data.categorie;
        var partyHTML = '';
        var valHTML = '';
        jQuery.each(cat, function (i, object) {
          if (object.name !== undefined) {
            var nam = i;
            if (valHTML !== "") {
              partyHTML += "<ul>" + valHTML + "</ul>" + '</li>';
              valHTML = "";
            }
            partyHTML += '<li class="item first-child"><span class="main-head">' + object.name + '</span>';
          } else if (object.title !== undefined) {
            valHTML += '<li><input type="checkbox" value="' + object.title + '" name="cat[]">' + object.title + '</li>';
          }
        });
        jQuery("#wrapper-ur").append(partyHTML);
      });
    }

    //Gib mir die Standorte nach Verfahren
  }, {
    key: "getDataLocations",
    value: function getDataLocations() {
      var that = this;
      jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatalocationsrestapi/v1/data/', function (data) {
        //console.log('got data in getDataUse:', data)
        var cat = data.categorie;
        var partyHTML = '';
        var valHTML = '';
        jQuery.each(cat, function (i, object) {
          if (object.name !== undefined) {
            var nam = i;
            if (valHTML !== "") {
              partyHTML += "<ul>" + valHTML + "</ul>" + '</li>';
              valHTML = "";
            }
            partyHTML += '<li class="item first-child"><span class="main-head">' + object.name + '</span>';
          } else if (object.title !== undefined) {
            valHTML += '<li><input type="checkbox" value="' + object.postid + '" name="locations[]">' + object.title + '</li>';
          }
        });
        jQuery("#wrapper-locations").append(partyHTML);
      });
    }

    //Zeig mir alle Ergebnisse an.
  }, {
    key: "getDataResults",
    value: function getDataResults() {
      var selected = new Array();
      jQuery("#wrapper-locations input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
      });
      var serializedForm = {
        locations: selected
      };
      jQuery.post(proceedingsData.root_url + '/wp-json/proceedingsdata/v1/data/', serializedForm, function (data) {
        var proceedings = data.proceedingsresults;
        jQuery.each(proceedings, function (key, val) {
          jQuery("#wrapper-results").after("\n                <div class=\"col-12 col-md-4\">\n                    <div class=\"header-img\">\n                    ".concat(val.thumbnail ? "<img src=\"".concat(val.thumbnail, "\"") : "<img src=\"https://via.placeholder.com/640x360\">", "\n                    </div>\n                    <div class=\"body\">\n                        <p>").concat(val.title, "</p>   \n                    </div>\n                </div>\n                "));
        });
      });

      /*jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdata/v1/data/', function(data){
           var proceedings = data.proceedingsresults;
          jQuery.each(proceedings, function(key, val){
               jQuery("#wrapper-results").after(`
              <div class="col-12 col-md-4">
                  <div class="header-img">
                  ${val.thumbnail ? `<img src="${val.thumbnail}"` : `<img src="https://via.placeholder.com/640x360">` }
                  </div>
                  <div class="body">
                      <p>${val.title}</p>   
                  </div>
              </div>
              `)
          })
       })*/
    }

    //Activierung
  }, {
    key: "activeUseResults",
    value: function activeUseResults() {
      var _this = this;
      if (!this.wrapper.hasClass('active')) {
        //this.runLottie()
        setTimeout(function () {
          return _this.openUseOverlay();
        }, 100);
        this.wrapperActive();
      } else {
        //this.runLottie()
        this.wrapperActive();
        this.openUseOverlay();
      }
    }
  }, {
    key: "activeLocationResults",
    value: function activeLocationResults() {
      var _this2 = this;
      if (!this.wrapper.hasClass('active')) {
        //this.runLottie()
        setTimeout(function () {
          return _this2.openLocationOverlay();
        }, 100);
        this.wrapperActive();
      } else {
        //this.runLottie()
        this.wrapperActive();
        this.openLocationOverlay();
      }
    }
  }, {
    key: "activeSerachResults",
    value: function activeSerachResults() {
      var _this3 = this;
      if (!this.wrapper.hasClass('active')) {
        //this.runLottie()
        setTimeout(function () {
          return _this3.openSearchOverlay();
        }, 100);
        this.wrapperActive();
      } else {
        //this.runLottie()
        this.wrapperActive();
        this.openSearchOverlay();
      }
    }
  }, {
    key: "wrapperActive",
    value: function wrapperActive() {
      if (this.wrapper.hasClass('active')) {
        if (this.wrapperSerachResults.hasClass('results-display')) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
        if (this.wrapperLocationResults.hasClass('results-display')) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
        if (this.wrapperUseResults.hasClass('results-display')) {
          this.removeUseResults();
          this.removeLocationResults();
          this.removeSerachResults();
        }
      }
    }

    //Deaktivierung
  }, {
    key: "removeUseResults",
    value: function removeUseResults() {
      this.wrapperUseResults.addClass('results-none');
      this.wrapperUseResults.removeClass('results-display');
      this.locatFilter.removeClass('active');
      this.serachFilter.removeClass('active');
    }
  }, {
    key: "removeLocationResults",
    value: function removeLocationResults() {
      this.wrapperLocationResults.addClass('results-none');
      this.wrapperLocationResults.removeClass('results-display');
      this.useFilter.removeClass('active');
      this.serachFilter.removeClass('active');
    }
  }, {
    key: "removeSerachResults",
    value: function removeSerachResults() {
      this.wrapperSerachResults.addClass('results-none');
      this.wrapperSerachResults.removeClass('results-display');
      this.useFilter.removeClass('active');
      this.locatFilter.removeClass('active');
    }

    //Overlay Open Filter
  }, {
    key: "openSearchOverlay",
    value: function openSearchOverlay() {
      this.overlay();
      this.wrapperSerachResults.removeClass('results-none');
      this.wrapperSerachResults.addClass('results-display');
      this.serachFilter.addClass('active');
    }
  }, {
    key: "openLocationOverlay",
    value: function openLocationOverlay() {
      this.overlay();
      this.wrapperLocationResults.removeClass('results-none');
      this.wrapperLocationResults.addClass('results-display');
      this.locatFilter.addClass('active');
    }
  }, {
    key: "openUseOverlay",
    value: function openUseOverlay() {
      this.overlay();
      this.wrapperUseResults.removeClass('results-none');
      this.wrapperUseResults.addClass('results-display');
      this.useFilter.addClass('active');
    }

    //Basic
  }, {
    key: "overlay",
    value: function overlay() {
      this.wrapper.addClass('wrapper-filter-style');
      this.bgDistance.addClass('bg-distance');
      this.openCloseButton.addClass('close-button-display');
      this.wrapper.addClass('active');
      this.filterMain.addClass('active-main');
      this.filterBody.addClass('active-main');
    }

    // runLottie(){
    //     if (!this.wrapper.hasClass('active')){
    //         console.log('Lotti')
    //         this.lottieview.css('display', 'block')
    //         this.wrapper.css('display', 'none')
    //         setTimeout(() => 
    //             this.lottieview.css('display', 'none'), 
    //         2500)
    //     }

    // }
  }, {
    key: "close",
    value: function close() {
      this.removeUseResults();
      this.removeLocationResults();
      this.removeSerachResults();
      this.wrapper.removeClass('wrapper-filter-style');
      this.bgDistance.removeClass('bg-distance');
      this.openCloseButton.removeClass('close-button-display');
      this.filterMain.removeClass('active-main');
      this.filterBody.removeClass('active-main');
      this.getDataResults();
    }

    // lottie(){
    //     let iconSkipForward = document.querySelector('.lottie');
    //     let animationSkipForward = bodymovin.loadAnimation({
    //             container: iconSkipForward,
    //             renderer: 'svg',
    //             loop: true,
    //             autoplay: true,
    //             path: "/wp-content/themes/haertha/images/HG_Logo_Animation_LA2.json"
    //     });
    //     animationSkipForward.playSegments([0,60], true);
    // }
  }]);
  return proceedingData;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proceedingData);

// getDataUse(){
//     jQuery.getJSON(proceedingsData.root_url + '/wp-json/proceedingsdatarestapi/v1/data/', function(data){
//         //var cat = data.categorie;

//         // var catDate = {};
//         // jQuery.each(data, function() {
//         //     var r = catDate[this.results] = [];
//         //     r.push(this);
//         // });

//         //console.log(catDate)

//         var mandrill_events = data.categorie;

//         console.log(mandrill_events)

//         var result = mandrill_events[0];
//         var result = mandrill_events[4];
//         var result = mandrill_events[9];
//         var result = mandrill_events[13];
//         var result = mandrill_events[16];
//         var result = mandrill_events[21];

//         jQuery.each(result, function(i, object){
//             //console.log(i +'('+object.length+')')
//             //console.log(object);
//         //    console.log(object)
//            //console.log(object)
//             // jQuery.each(object, function (index, obj) {
//             //     //console.log(index)
//             //     //console.log(obj[index]);
//             //     //console.log(obj)
//             //     //console.log(obj[i])
//             //     // jQuery.each(obj, function (i, varr) {

//             //     //     // console.log(varr)
//             //     //     // console.log(varr.permalink)

//             //     //     // console.log(varr.title)

//             //     //     jQuery("#wrapper-use-results").append(`
//             //     //     <ul id="wrapper-ur">
//             //     //         <li> ${varr[0]} </li>
//             //     //         <li> ${varr.title} </li>

//             //     //     </ul>
//             //     //     `)

//             //     // });

//             //     //console.log(obj );
//             //     // console.log(obj[index]);
//             //     //console.log(obj.permalink);

//             // });
//         });

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {
//         //         console.log(arr)
//         //         // jQuery.each(arr, function(index, value){
//         //         //     //console.log(value)
//         //         // })
//         //     });
//         // })

//         // jQuery.each(cat, function(i, item) {

//         //     jQuery("#wrapper-use-results").append(`
//         //     <ul id="wrapper-ur">

//         //         ${ jQuery.each(item, function(key, arry){
//         //             `<li> ${arry.permalink}  ${arry.title}</li>`
//         //         }) }

//         //     </ul>
//         //     `)

//         // });

//     //     data.categorie.map( item => console.log(item))
//     //    //data.categorie.map( item => console.log(item + item.permalink + item.titel))

//     //     jQuery("#wrapper-use-results").append(`
//     //     <ul id="wrapper-ur">
//     //     ${data.categorie.map( item => item ) }
//     //     </ul>
//     //     `)

//         // var results = data.results;
//         // console.log(data);

//         // var catResults = data.categorie;

//         // jQuery.each(catResults, function(i, item) {
//         //     //console.log(item);
//         //     console.log(i);
//         //     console.log(item.title);
//         //     console.log(item.permalink);
//         //     item.results.map( item => item.permalink)

//         // });

//         //let catResults = numberArray.map((num) => num.title)

//         // jQuery.each(data,function(){

//         //     console.log( this.title ,this.permalink);

//         //     })

//         ///df.categorieresults.map(item_ => console.log(item_.id))

//         // jQuery.each(catResults.concat(results), function(i, item) {
//         //     //console.log(item.cat);

//         // });

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {

//         //         console.log(arr.categorie);       
//         //     console.log("...",arr.categorie, arr.name);

//         //     });
//         // })

//         // jQuery.each(data, function(i, e) {
//         //     jQuery.each(e, function(key, arr) {
//         //         jQuery.each(arr, function(index, obj) {
//         //             console.log("...", index, obj.value);
//         //         });
//         //     });
//         // })

//         //var cat = data;
//         // jQuery.each(data, function(kay, val){

//         //     // console.log(data.results.permalink)
//         //     //val.map(item => `<li><a href="${item}">${item.title}</a></li>`).join("")
//         //     //val.categorie.map( item => console.log(item))

//         //     //console.log(val.id)
//         //     //console.log(val)

//         //     // console.log(keys);
//         //     // if(rusalts.id == cat.id){
//         //     //     //console.log(rusalts.title)
//         //     // }
//         // })
//     })
// }

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin.scss":
/*!**********************************!*\
  !*** ./assets/styles/admin.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/magnific-popup.scss":
/*!*******************************************!*\
  !*** ./assets/styles/magnific-popup.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/scripts/main": 0,
/******/ 			"dist/styles/magnific-popup": 0,
/******/ 			"dist/styles/admin": 0,
/******/ 			"dist/styles/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhaertha"] = self["webpackChunkhaertha"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/scripts/main.js")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/styles/main.scss")))
/******/ 	__webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/styles/admin.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/styles/magnific-popup","dist/styles/admin","dist/styles/main"], () => (__webpack_require__("./assets/styles/magnific-popup.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbkRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9Db250YWN0LWRhdGEuanMiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9PdmVydmlldy1wcm9jZWVkaW5ncy5qcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vaGFlcnRoYS8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2NzcyIsIndlYnBhY2s6Ly9oYWVydGhhLy4vYXNzZXRzL3N0eWxlcy9tYWduaWZpYy1wb3B1cC5zY3NzIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hhZXJ0aGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oYWVydGhhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaGFlcnRoYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgLy9JbXBvcnQgQ2xhc3NcbiAgaW1wb3J0IENvbnRhY3REYXRhIGZyb20gXCIuL21vZHVsZXMvQ29udGFjdC1kYXRhXCJcbiAgaW1wb3J0IFByb2NlZWRpbmdEYXRhIGZyb20gXCIuL21vZHVsZXMvT3ZlcnZpZXctcHJvY2VlZGluZ3NcIlxuICBpbXBvcnQgTG9jYXRpb25EYXRhIGZyb20gXCIuL21vZHVsZXMvTG9jYXRpb25cIlxuICBpbXBvcnQgQ29udGFjdFBlcnNvbiBmcm9tIFwiLi9tb2R1bGVzL0NvbnRhY3RcIlxuXG4gIGNvbnN0IGNvbnRhY3RkYXRhID0gbmV3IENvbnRhY3REYXRhKClcbiAgY29uc3QgcHJvY2VlZGluZ2RhdGEgPSBuZXcgUHJvY2VlZGluZ0RhdGEoKVxuICBjb25zdCBsb2NhdGlvbmRhdGEgPSBuZXcgTG9jYXRpb25EYXRhKClcbiAgY29uc3QgY29udGFjdHBlcnNvbiA9IG5ldyBDb250YWN0UGVyc29uKClcblxuXG4gIGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XG5cbiAgICAvL3BvcHVwIGltYWdlXG4gICAgJCgnLmltYWdlLXBvcHVwLXZlcnRpY2FsLWZpdCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIG1haW5DbGFzczogJ21mcC13aXRoLXpvb20nLCBcbiAgICAgIGdhbGxlcnk6e1xuICAgICAgICBlbmFibGVkOnRydWVcbiAgICAgIH0sXG4gICAgXG4gICAgICB6b29tOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsIFxuICAgIFxuICAgICAgICBkdXJhdGlvbjogMzAwLCAvLyBkdXJhdGlvbiBvZiB0aGUgZWZmZWN0LCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAvLyBDU1MgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAgICBcbiAgICAgICAgb3BlbmVyOiBmdW5jdGlvbihvcGVuZXJFbGVtZW50KSB7XG4gICAgXG4gICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoJ2ltZycpID8gb3BlbmVyRWxlbWVudCA6IG9wZW5lckVsZW1lbnQuZmluZCgnaW1nJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vcG9wdXAgdmlkZW9cbiAgICAkKCcucG9wdXAteW91dHViZScpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lmcmFtZSdcbiAgICB9KTtcblxuXG5cbiAgICBqUXVlcnkoJy52aWRlby1idXR0b24tcnVuJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICBpZnJhbWU6IHtcbiAgICAgICAgICAgIHBhdHRlcm5zOiB7XG4gICAgICAgICAgICAgICAgeW91dHViZToge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogJ3lvdXR1YmUuY29tLycsIFxuICAgICAgICAgICAgICAgICAgICBpZDogZnVuY3Rpb24odXJsKSB7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gdXJsLm1hdGNoKC9bXFxcXD9cXFxcJl12PShbXlxcXFw/XFxcXCZdKykvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIW0gfHwgIW1bMV0gKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtWzFdO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzcmM6ICcvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTEmbXV0ZWQ9MSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZpbWVvOiB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAndmltZW8uY29tLycsIFxuICAgICAgICAgICAgICAgICAgICBpZDogZnVuY3Rpb24odXJsKSB7ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gdXJsLm1hdGNoKC8oaHR0cHM/OlxcL1xcLyk/KHd3dy4pPyhwbGF5ZXIuKT92aW1lby5jb21cXC8oW2Etel0qXFwvKSooWzAtOV17NiwxMX0pWz9dPy4qLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoICFtIHx8ICFtWzVdICkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbVs1XTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiAnLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyVpZCU/YXV0b3BsYXk9MSZtdXRlZD0xXCInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9wb3B1cCBpbWFnZVxuXG4gICAgJCgnLmltYWdlLXBvcHVwLXZlcnRpY2FsLWZpdCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIG1haW5DbGFzczogJ21mcC13aXRoLXpvb20nLCBcbiAgICAgIGdhbGxlcnk6e1xuICAgICAgICBlbmFibGVkOnRydWVcbiAgICAgIH0sXG4gICAgXG4gICAgICB6b29tOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsIFxuICAgIFxuICAgICAgICBkdXJhdGlvbjogMzAwLCAvLyBkdXJhdGlvbiBvZiB0aGUgZWZmZWN0LCBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAvLyBDU1MgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAgICBcbiAgICAgICAgb3BlbmVyOiBmdW5jdGlvbihvcGVuZXJFbGVtZW50KSB7XG4gICAgXG4gICAgICAgICAgcmV0dXJuIG9wZW5lckVsZW1lbnQuaXMoJ2ltZycpID8gb3BlbmVyRWxlbWVudCA6IG9wZW5lckVsZW1lbnQuZmluZCgnaW1nJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vcG9wdXAgdmlkZW9cbiAgICAkKCcucG9wdXAteW91dHViZScpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgdHlwZTogJ2lmcmFtZSdcbiAgICB9KTtcbiAgICBcbiAgICAvL0hlYWRlciBtZW7DvFxuICAgIGxldCBtYWluTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWhlYWRlci1tZW51XCIpO1xuICAgIGxldCBuYXZCYXJUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLW5hdmJhci10b2dnbGVcIik7XG5cbiAgICBuYXZCYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgbWFpbk5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgLy9Td2lwZXIgVmVyZmFocmVuIFZpZGVvXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXIyXCIsIHtcbiAgICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgICAgZmFkZUVmZmVjdDoge1xuICAgICAgICBjcm9zc0ZhZGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgICBsYXp5OiB0cnVlLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgfSlcblxuICAvL215U3dpcGVySW1hZ2VHYWxsZXJ5IDE4LjAyXG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVySW1hZ2VHYWxsZXJ5XCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLndyYXBwZXItdmlkZW8tcGFnaW5hdGlvbiA+IC5zd2lwZXItcGFnaW5hdGlvbi12aWRlby1uZXcnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+PC9zcGFuPic7O1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi53cmFwcGVyLXZpZGVvLXBhZ2luYXRpb24gPiAuc3dpcGVyLWJ1dHRvbi12aWRlby1uZXh0XCIsXG4gICAgICBwcmV2RWw6IFwiLndyYXBwZXItdmlkZW8tcGFnaW5hdGlvbiA+IC5zd2lwZXItYnV0dG9uLXZpZGVvLXByZXZcIixcbiAgICB9LFxuXG4gIH0pO1xuXG5cbiAgLy9WZXJmYWhyZW4gSGVhZGVyIEltYWdlIEdhbGxlcnlcbiAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJQcm9jZWVkaW5nc0hlYWRlclwiLCB7XG4gICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cblxuICAvL0xvY2F0aW9uIEhlYWRlciBJbWFnZSBHYWxsZXJ5XG4gIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVybG9jYXRpb25IZWFkZXJcIiwge1xuICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG4gIH0pO1xuXG5cbiAgaWYgKGpRdWVyeShcIi5zaWRlYmFybWVudVwiKVswXSl7XG4gICAgbGV0IGlzX3RvYyA9IGZhbHNlO1xuICAgIGxldCBjc3NfY2xhc3MgPSBcIlwiO1xuICAgIGpRdWVyeShcIi50b2NcIikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpc190b2MgPSB0cnVlO1xuICAgICAgICBqUXVlcnkoXCIuc2lkZWJhcm1lbnUgb2xcIikuYXBwZW5kKFwiPGxpPjxhIGhyZWY9JyNcIitqUXVlcnkodGhpcykuYXR0cihcImlkXCIpK1wiJz5cIitqUXVlcnkodGhpcykuYXR0cihcImRhdGEtdG9jdGl0bGVcIikrXCI8L2E+PC9saT5cIik7XG4gICAgfSk7XG4gICAgaWYoIWlzX3RvYyl7XG4gICAgICBqUXVlcnkoXCIuc3VibmF2IC5uYXZwb2ludHNcIikuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vTGlzdCBudW1iZXJpbmdcbiAgalF1ZXJ5KFwiLm51bW1iZXJcIikuZWFjaChmdW5jdGlvbihpKXtcbiAgICBqUXVlcnkodGhpcykuZmluZChcIm51bWJlclwiKS5yZW1vdmUoKS5lbmQoKVxuICAgICAgLnByZXBlbmQoXCI8c3BhbiBjbGFzcz0nbnVtYmVyJz5cIiArIChpICsgMSkgKyBcIi4gPC9zcGFuPlwiKTtcbiAgfSk7XG5cbiBcbiAgLy9TbW9vdGhzY3JvbGwgVmVyZmFocmVuXG4gIGpRdWVyeShkb2N1bWVudCkub24oXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xuXG4gIFxuICAvL3Ntb290aHNjcm9sbFxuICBqUXVlcnkoJyNuYXYtaWQgb2wgbGkgYVtocmVmXj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGpRdWVyeShkb2N1bWVudCkub2ZmKFwic2Nyb2xsXCIpO1xuXG4gICAgalF1ZXJ5KCdhJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSlcbiAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuaGFzaCxcbiAgICAgIG1lbnUgPSB0YXJnZXQ7XG4gICAgdGFyZ2V0ID0galF1ZXJ5KHRhcmdldCk7XG4gICAgalF1ZXJ5KCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgJ3Njcm9sbFRvcCc6IHRhcmdldC5vZmZzZXQoKS50b3AgKyAyXG4gICAgfSwgNTAwLCAnc3dpbmcnLCBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xuICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcInNjcm9sbFwiLCBvblNjcm9sbCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbFBvcyA9IGpRdWVyeShkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgalF1ZXJ5KCcjbmF2LWlkIGEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnJMaW5rID0galF1ZXJ5KHRoaXMpO1xuICAgICAgdmFyIHJlZkVsZW1lbnQgPSBqUXVlcnkoY3VyckxpbmsuYXR0cihcImhyZWZcIikpO1xuICAgICAgdmFyIHJlZkVsZW1lbnRfcG9zID0gcmVmRWxlbWVudC5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgaGVhZGVyX2hlaWdodCA9IGpRdWVyeSgnLm5hdmJhciAnKS5oZWlnaHQoKSA7XG4gICAgICB2YXIgcmVmRWxlbWVudF9wb3NfdG90YWwgPSByZWZFbGVtZW50X3BvcztcbiAgICAgIHZhciBzY3JvbGxQb3NfdG90YWwgPSBzY3JvbGxQb3MgKyBoZWFkZXJfaGVpZ2h0O1xuXG4gICAgICBpZiAocmVmRWxlbWVudF9wb3MgPCBzY3JvbGxQb3NfdG90YWwgJiYgcmVmRWxlbWVudF9wb3MgKyByZWZFbGVtZW50LmhlaWdodCgpID4gc2Nyb2xsUG9zX3RvdGFsKSB7XG4gICAgICAgIGpRdWVyeSgnI25hdi1pZCBvbCBsaSBhJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIGN1cnJMaW5rLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckxpbmsucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgLy9WZXJmYWhyZW4gUGFnZSBtZW51XG4gIGpRdWVyeShcIi5kb3duXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogalF1ZXJ5KFwiLnVwXCIpLm9mZnNldCgpLnRvcFxuICAgICAgfSwgMTUwMCk7XG4gIH0pO1xuXG4gIHZhciBidG4gPSBqUXVlcnkoJyNidXR0b24nKTtcblxuICBidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sICczMDAnKTtcbiAgfSk7XG5cbiAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgYnRuLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ0bi5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9Qb3BVcCBodHRwczovL2NvZGVwZW4uaW8va2FpYWsvcGVuL3lMeXF4T1lcbiAgLy8galF1ZXJ5KFwiI3BvcHVwSWRWaWRlb1wiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgLy8gICBqUXVlcnkoXCIucG9wdXBcIikuZmFkZUluKDUwMCk7XG4gIC8vIH0pO1xuICBqUXVlcnkoXCIuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgalF1ZXJ5KFwiLnBvcHVwXCIpLmZhZGVPdXQoNTAwKTtcbiAgfSk7XG5cblxuICAvL29wZW4gcG9wdXBcbiAgalF1ZXJ5KCcucG9wdXAtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG51bWJlciA9IGpRdWVyeSh0aGlzKS5kYXRhKFwibnVtYmVyXCIpO1xuICAgIGNvbnNvbGUubG9nKCcucG9wdXAtJytudW1iZXIpXG4gICAgalF1ZXJ5KCcucG9wdXAtJytudW1iZXIpLmZhZGVJbig1MDApO1xuICB9KTtcbiAgXG4gIC8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTczNzU0MjcvbXVsdGlwbGUtcG9wdXAtaW4tc2FtZS1wYWdlXG4gIC8vIC8vY2xvc2UgcG9wdXBcbiAgLy8gJCgnLnBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAvLyAgIGlmKCAkKGV2ZW50LnRhcmdldCkuaXMoJy5wb3B1cC1jbG9zZScpIHx8ICQoZXZlbnQudGFyZ2V0KS5pcygnLnBvcHVwJykgKSB7XG4gIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG4gIFxuICAvLyAvL2Nsb3NlIHBvcHVwIHdoZW4gY2xpY2tpbmcgdGhlIGVzYyBrZXlib2FyZCBidXR0b25cbiAgLy8gJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZXZlbnQpe1xuICAvLyAgICAgaWYoZXZlbnQud2hpY2g9PScyNycpe1xuICAvLyAgICAgICAkKCcucG9wdXAnKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuXG4iLCJcbmNsYXNzIGNvbnRhY3REYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdldERhdGFJZCgpXG4gICAgICAgIHRoaXMuZ2V0UHJvY2VkdXJlTG9jYXRpb24oKVxuXG4gICAgfVxuXG5cbiAgICBcblxuICAgIGdldFByb2NlZHVyZUxvY2F0aW9uKCl7XG4gICAgICAgIHRoaXMuZGF0YUlkID0galF1ZXJ5KFwiI2RhdGFJZFwiKS52YWwoKVxuICAgICAgICBqUXVlcnkuZ2V0SlNPTihwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vcHJvY2VkdXJlbG9jYXRpb24vdjEvZGF0YS8/dGVybT0nICsgdGhpcy5kYXRhSWQsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uSHRtbCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5X2RhdGEgPSBbXTtcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIWNvdW50cnlfZGF0YS5pbmNsdWRlcyhpdGVtLmNvdW50cnlfY29kZSkpe1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uY291bnRyeV9jb2RlID09IGl0ZW0uY291bnRyeV9jb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25IdG1sICs9IFwiPGxpPlwiICsgIGl0ZW0uY291bnRyeV9jb2RlICsgXCI8L2xpPlwiO1xuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5X2RhdGEucHVzaChpdGVtLmNvdW50cnlfY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB1bCA9IGpRdWVyeSgnI3Byb2NlZHVyZWxvY2F0aW9uJylcbiAgICAgICAgICAgIHVsLmFwcGVuZChsb2NhdGlvbkh0bWwpO1xuICAgICAgICB9KSAgXG4gICAgfVxuXG5cblxuXG5cbiAgICBnZXRTd2lwZXJKUygpe1xuICAgICAgICAvL0NvbnRhY3QgUHJvY2VlZGluZ3NcbiAgICAgICAgdmFyIHN3aXBlckltYWdlID0gbmV3IFN3aXBlcihcIi5teVN3aXBlckltZ2VcIiwge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdmFyIHN3aXBlckNvbnRhY3QgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyQ29udGFrdFwiLCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgZWw6ICcud3JhcHBlci1wYWdpbmF0aW9uID4gLnN3aXBlci1wYWdpbmF0aW9uLW5ldycsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj48L3NwYW4+Jzs7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLndyYXBwZXItcGFnaW5hdGlvbiA+IC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLndyYXBwZXItcGFnaW5hdGlvbiA+IC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXBlckltYWdlLmNvbnRyb2xsZXIuY29udHJvbCA9IHN3aXBlckNvbnRhY3Q7XG4gICAgICAgIHN3aXBlckNvbnRhY3QuY29udHJvbGxlci5jb250cm9sID0gc3dpcGVySW1hZ2U7XG4gICAgfVxuXG5cbiAgICBnZXREYXRhSWQoKXtcbiAgICAgICAgdGhpcy5nZXRTd2lwZXJKUygpXG4gICAgICAgIHRoaXMuZGF0YUlkID0galF1ZXJ5KFwiI2RhdGFJZFwiKS52YWwoKVxuICAgICAgICB2YXIgaW1nID0gJyc7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHByb2NlZWRpbmdzRGF0YS5yb290X3VybCArICcvd3AtanNvbi9wcm9jZWVkaW5ncy92MS9kYXRhLz90ZXJtPScgKyB0aGlzLmRhdGFJZCwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wcm9jZWVkaW5ncy1jb250YWN0JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5uby1kYXRhJykuaHRtbCgnPGgxPktlaW4gU3RhbmRvcnQgYXVzZ2V3w6RobHQ8L2gxPicpXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucHJvY2VlZGluZ3MtY29udGFjdCcpLnJlbW92ZUNsYXNzKCd0b2MnKVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmNhbGwtdG8tYWN0aW9uJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcblxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnByb2NlZWRpbmdzLWNvbnRhY3QnKS5yZW1vdmVBdHRyKCdkYXRhLXRvY3RpdGxlJylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vQXJyYXkgdHJ1ZVxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm5vLWRhdGEnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLWNvbnRhY3QtanNcIikuYWZ0ZXIoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3ZhbC5jb3VudHJ5X2NvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt2YWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke3ZhbC5zdHJlZXRfbnVtYmVyfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4ke3ZhbC5wb3N0Y29kZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+JHt2YWwuY291bnRyeX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJlbWFpbFwiPjxhIGhyZWY9XCJcIj4ke3ZhbC5lbWFpbH08L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGhvbmVcIj48YSBocmVmPVwiXCI+JHt2YWwucGhvbmV9PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY3RhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tZGVjb3ItbGVmdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt2YWwucGVybWFsaW5rfVwiPlp1bSBTdGFuZG9ydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1kZWNvci1yaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWwpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwuc2xpZGVyX2ltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsLnRodW1ibmFpbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbC5zbGlkZXJfaW1hZ2UgIT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyArPSBgPGltZyBzcmM9XCIke3ZhbC5zbGlkZXJfaW1hZ2V9XCIgYWx0PVwiJHt2YWwubmFtZX1cIiBoZWlnaHQ9XCIke3ZhbC5zbGlkZXJfaW1hZ2Vfc2l6ZS5wcm9jZWVkaW5nX2hlYWRlci53aWR0aH1cIiB3aWR0aD1cIiR7dmFsLnNsaWRlcl9pbWFnZV9zaXplLnByb2NlZWRpbmdfaGVhZGVyLmhlaWdodH1cIj5gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsLnNsaWRlcl9pbWFnZV9zaXplLnByb2NlZWRpbmdfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2UgaWYodmFsLnRodW1ibmFpbCAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1nICs9IGA8aW1nIHNyYz1cIiR7dmFsLnRodW1ibmFpbH1cIiBhbHQ9XCIke3ZhbC5uYW1lfVwiPmA7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1nICs9IGA8aW1nIHNyYz1cImh0dHBzOi8vZHVtbXlpbWFnZS5jb20vNjQweDM2MC9mZmYvYWFhXCIgYWx0PVwiXCI+YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1pbWFnZS1qc1wiKS5hZnRlcihgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3REYXRhXG4iLCJjbGFzcyBjb250YWN0UGVyc29ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vZnVuY3Rpb25cbiAgICAgICAgdGhpcy5nZXREYXRhKCkgICAgICAgIFxuICAgIH1cblxuICAgIGdldERhdGEoKXtcbiAgICAgICAgdGhpcy5kYXRhSWQgPSBqUXVlcnkoXCIjZGF0YUlkQ29udGFjdFwiKS52YWwoKVxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YUlkKVxuICAgICAgICAvLyBqUXVlcnkuZ2V0SlNPTiggJycgKyB0aGlzLmRhdGFJZCwgZnVuY3Rpb24oJGRhdGEpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5kYXRhSWQpXG4gICAgICAgIC8vIH0pXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQZXJzb24iLCJjbGFzcyBsb2NhdGlvbkRhdGF7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5nZXRMb2FjYXRpb25EYXRhKClcbiAgICB9XG5cbiAgICBnZXRMb2FjYXRpb25EYXRhKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldExvYWNhdGlvbkRhdGEgaW4gbG9jYXRpb24uanMnKTtcbiAgICAgICAgdGhpcy5kYXRhSWQgPSBqUXVlcnkoXCIjZGF0YUlkTG9hY2F0aW9uXCIpLnZhbCgpO1xuICAgICAgICBjb25zdCBjYXRpZCA9IHRoaXMuZGF0YUlkP3RoaXMuZGF0YUlkOicnO1xuICAgICAgICBjb25zdCB1cmwgPSBwcm9jZWVkaW5nc0RhdGEucm9vdF91cmwgKyAnL3dwLWpzb24vbG9jYXRpb25yZXN1bHQvdjEvZGF0YS8/dGVybT0nICsgY2F0aWQ7XG4gICAgICAgIGpRdWVyeS5nZXRKU09OKHVybCwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRMb2FjYXRpb25EYXRhIGRhdGE6JywgZGF0YSk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgICAgICAgIC8vZ3JvdXBpbmcgYnkgY2F0ZWdvcnkgZmlyc3RcblxuICAgICAgICAgICAgbGV0IGFsbENhdHMgPSB7fTtcblxuICAgICAgICAgICAgalF1ZXJ5LmVhY2gocmVzdWx0cywgZnVuY3Rpb24oaSwgaXRlbSkge1xuXG4gICAgICAgICAgICAgICAgaWYoIWl0ZW0uY2F0KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKGl0ZW0uY2F0IGluIGFsbENhdHMpKXtcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2F0c1tpdGVtLmNhdF0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxsQ2F0c1tpdGVtLmNhdF0ucHVzaChpdGVtLm5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0TG9hY2F0aW9uRGF0YSBhbGxDYXRzOicsIGFsbENhdHMpO1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uSHRtbCA9IFwiXCI7XG5cbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGFsbENhdHMsIGZ1bmN0aW9uKGNhdCwgbG9jcykge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5uYW1lKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkh0bWwgKz0gXCI8bGk+XCIgKyBjYXQgKyAnPHVsPic7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2gobG9jcywgZnVuY3Rpb24oaiwgbG9jKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSHRtbCArPSBcIjxsaT5cIiArIGxvYyArIFwiPC9saT5cIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbkh0bWwgKz0gXCI8L3VsPlwiO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVsID0galF1ZXJ5KCcjd3JhcHBlci1sb2NhdGlvbj51bCcpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGl0cyBjaGlsZHJlblxuICAgICAgICAgICAgdWwuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHVsLmFwcGVuZChsb2NhdGlvbkh0bWwpO1xuXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhdGlvbkRhdGEiLCJjbGFzcyBwcm9jZWVkaW5nRGF0YSB7XG5cblxuICAgIC8qICAqL1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvL0J1dHRvbnNcbiAgICAgICAgdGhpcy51c2VCdXR0b24gPSBqUXVlcnkoXCIjdXNlXCIpXG4gICAgICAgIHRoaXMudXNlTG9jYXRpb25CdXR0b24gPSBqUXVlcnkoXCIjbG9jYXRpb25cIilcbiAgICAgICAgdGhpcy51c2VTZWFyY2hCdXR0b24gPSBqUXVlcnkoXCIjc2VyYWNoXCIpXG4gICAgICAgIFxuICAgICAgICAvL0VsZW1lbnRlXG4gICAgICAgIHRoaXMud3JhcHBlciA9IGpRdWVyeShcIiN3cmFwcGVyXCIpXG4gICAgICAgIHRoaXMuYmdEaXN0YW5jZSA9IGpRdWVyeShcIiNiZy1kaXN0YW5jZVwiKVxuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzID0galF1ZXJ5KFwiI3dyYXBwZXItc2VyYWNoLXJlc3VsdHNcIilcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzID0galF1ZXJ5KFwiI3dyYXBwZXItbG9jYXRpb24tcmVzdWx0c1wiKVxuICAgICAgICB0aGlzLndyYXBwZXJVc2VSZXN1bHRzID0galF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIilcblxuICAgICAgICB0aGlzLmxvdHRpZXZpZXcgPSBqUXVlcnkoXCIjbG90dGlldmlld1wiKVxuICAgICAgICB0aGlzLm9wZW5DbG9zZUJ1dHRvbiA9IGpRdWVyeShcIiNvcGVuLWNsb3NlLWJ1dHRvblwiKVxuXG4gICAgICAgIHRoaXMudXNlRmlsdGVyID0galF1ZXJ5KCcudXNlLWZpbHRlcicpXG4gICAgICAgIHRoaXMubG9jYXRGaWx0ZXIgPSBqUXVlcnkoJy5sb2NhdGlvbi1maWx0ZXInKSBcbiAgICAgICAgdGhpcy5zZXJhY2hGaWx0ZXIgPSBqUXVlcnkoJy5zZXJhY2gtZmlsdGVyJylcbiAgICAgICAgdGhpcy5maWx0ZXJNYWluID0galF1ZXJ5KCcuZmlsdGVyLW1haW4nKVxuICAgICAgICB0aGlzLmZpbHRlckJvZHkgPSBqUXVlcnkoJy5maWx0ZXItYm9keScpXG5cbiAgICAgICAgdGhpcy5ldmVudHMoKVxuICAgICAgICAvL3RoaXMubG90dGllKCkgXG4gICAgICAgIHRoaXMuZ2V0RGF0YVJlc3VsdHMoKVxuICAgICAgICB0aGlzLmdldERhdGFVc2UoKVxuICAgICAgICB0aGlzLmdldERhdGFMb2NhdGlvbnMoKVxuICAgIH1cblxuICAgIGV2ZW50cygpe1xuICAgICAgICB0aGlzLnVzZVNlYXJjaEJ1dHRvbi5vbihcImNsaWNrXCIsIHRoaXMuYWN0aXZlU2VyYWNoUmVzdWx0cy5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnVzZUxvY2F0aW9uQnV0dG9uLm9uKFwiY2xpY2tcIiwgdGhpcy5hY3RpdmVMb2NhdGlvblJlc3VsdHMuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy51c2VCdXR0b24ub24oXCJjbGlja1wiLCB0aGlzLmFjdGl2ZVVzZVJlc3VsdHMuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5vcGVuQ2xvc2VCdXR0b24ub24oXCJjbGlja1wiLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpXG5cbiAgICB9XG5cbiAgICB0eXBpbmdMb2dpYygpe31cblxuICAgIC8vR2liIG1pciBkaWUgZnJlaWUgU3VjaGVcbiAgICBnZXREYXRhU2VhcmNoKCl7fVxuXG4gICAgLy9HaWIgbWlyIGFsbGUgS2F0ZWdvcmllbiB2b24gVmVyZmFocmVuXG4gICAgZ2V0RGF0YVVzZSgpe1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgalF1ZXJ5LmdldEpTT04ocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZWRpbmdzZGF0YXJlc3RhcGkvdjEvZGF0YS8nLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dvdCBkYXRhIGluIGdldERhdGFVc2U6JywgZGF0YSlcbiAgICAgICAgICAgIHZhciBjYXQgPSBkYXRhLmNhdGVnb3JpZTtcblxuICAgICAgICAgICAgdmFyIHBhcnR5SFRNTCA9ICcnO1xuICAgICAgICAgICAgdmFyIHZhbEhUTUwgPSAnJztcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGNhdCwgZnVuY3Rpb24oaSwgb2JqZWN0KXtcblxuICAgICAgICAgICAgICAgIGlmKG9iamVjdC5uYW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsSFRNTCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0gXCI8dWw+XCIgKyB2YWxIVE1MICsgXCI8L3VsPlwiICsgJzwvbGk+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbEhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSAnPGxpIGNsYXNzPVwiaXRlbSBmaXJzdC1jaGlsZFwiPjxzcGFuIGNsYXNzPVwibWFpbi1oZWFkXCI+JyArIG9iamVjdC5uYW1lICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKG9iamVjdC50aXRsZSAhPT0gdW5kZWZpbmVkKXtcblxuICAgICAgICAgICAgICAgICAgICB2YWxIVE1MICs9ICc8bGk+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwiJyArIG9iamVjdC50aXRsZSArICdcIiBuYW1lPVwiY2F0W11cIj4nICsgb2JqZWN0LnRpdGxlICsgJzwvbGk+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgIGpRdWVyeShcIiN3cmFwcGVyLXVyXCIpLmFwcGVuZChwYXJ0eUhUTUwpO1xuICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgICAvL0dpYiBtaXIgZGllIFN0YW5kb3J0ZSBuYWNoIFZlcmZhaHJlblxuICAgIGdldERhdGFMb2NhdGlvbnMoKXtcblxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgalF1ZXJ5LmdldEpTT04ocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZWRpbmdzZGF0YWxvY2F0aW9uc3Jlc3RhcGkvdjEvZGF0YS8nLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dvdCBkYXRhIGluIGdldERhdGFVc2U6JywgZGF0YSlcbiAgICAgICAgICAgIHZhciBjYXQgPSBkYXRhLmNhdGVnb3JpZTtcblxuICAgICAgICAgICAgdmFyIHBhcnR5SFRNTCA9ICcnO1xuICAgICAgICAgICAgdmFyIHZhbEhUTUwgPSAnJztcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKGNhdCwgZnVuY3Rpb24oaSwgb2JqZWN0KXtcblxuICAgICAgICAgICAgICAgIGlmKG9iamVjdC5uYW1lICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsSFRNTCAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0eUhUTUwgKz0gXCI8dWw+XCIgKyB2YWxIVE1MICsgXCI8L3VsPlwiICsgJzwvbGk+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbEhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcnR5SFRNTCArPSAnPGxpIGNsYXNzPVwiaXRlbSBmaXJzdC1jaGlsZFwiPjxzcGFuIGNsYXNzPVwibWFpbi1oZWFkXCI+JyArIG9iamVjdC5uYW1lICsgJzwvc3Bhbj4nIDtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCl7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFsSFRNTCArPSAnPGxpPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIicgKyBvYmplY3QucG9zdGlkICsgJ1wiIG5hbWU9XCJsb2NhdGlvbnNbXVwiPicgKyBvYmplY3QudGl0bGUgKyAnPC9saT4nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItbG9jYXRpb25zXCIpLmFwcGVuZChwYXJ0eUhUTUwpO1xuICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vWmVpZyBtaXIgYWxsZSBFcmdlYm5pc3NlIGFuLlxuICAgIGdldERhdGFSZXN1bHRzKCl7XG5cbiAgICAgIHZhciBzZWxlY3RlZCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1sb2NhdGlvbnMgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2godGhpcy52YWx1ZSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICBcbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRGb3JtID0ge2xvY2F0aW9uczpzZWxlY3RlZH07XG5cbiAgICAgICAgalF1ZXJ5LnBvc3QocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZWRpbmdzZGF0YS92MS9kYXRhLycsIHNlcmlhbGl6ZWRGb3JtLCBmdW5jdGlvbihkYXRhKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHByb2NlZWRpbmdzID0gZGF0YS5wcm9jZWVkaW5nc3Jlc3VsdHM7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChwcm9jZWVkaW5ncywgZnVuY3Rpb24oa2V5LCB2YWwpe1xuXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiI3dyYXBwZXItcmVzdWx0c1wiKS5hZnRlcihgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgICAke3ZhbC50aHVtYm5haWwgPyBgPGltZyBzcmM9XCIke3ZhbC50aHVtYm5haWx9XCJgIDogYDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHgzNjBcIj5gIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ZhbC50aXRsZX08L3A+ICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIC8qalF1ZXJ5LmdldEpTT04ocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZWRpbmdzZGF0YS92MS9kYXRhLycsIGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgICAgICB2YXIgcHJvY2VlZGluZ3MgPSBkYXRhLnByb2NlZWRpbmdzcmVzdWx0cztcbiAgICAgICAgICAgIGpRdWVyeS5lYWNoKHByb2NlZWRpbmdzLCBmdW5jdGlvbihrZXksIHZhbCl7XG5cbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIjd3JhcHBlci1yZXN1bHRzXCIpLmFmdGVyKGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dmFsLnRodW1ibmFpbCA/IGA8aW1nIHNyYz1cIiR7dmFsLnRodW1ibmFpbH1cImAgOiBgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MFwiPmAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7dmFsLnRpdGxlfTwvcD4gICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSkqL1xuICAgIH1cblxuICAgIC8vQWN0aXZpZXJ1bmdcbiAgICBhY3RpdmVVc2VSZXN1bHRzKCl7XG4gICAgICAgIGlmICghdGhpcy53cmFwcGVyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgLy90aGlzLnJ1bkxvdHRpZSgpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFxuICAgICAgICAgICAgICAgIHRoaXMub3BlblVzZU92ZXJsYXkoKVxuICAgICAgICAgICAgLCAxMDApXG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vdGhpcy5ydW5Mb3R0aWUoKVxuICAgICAgICAgICAgdGhpcy53cmFwcGVyQWN0aXZlKClcbiAgICAgICAgICAgIHRoaXMub3BlblVzZU92ZXJsYXkoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZlTG9jYXRpb25SZXN1bHRzKCl7XG4gICAgICAgIGlmICghdGhpcy53cmFwcGVyLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgLy90aGlzLnJ1bkxvdHRpZSgpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkxvY2F0aW9uT3ZlcmxheSgpXG4gICAgICAgICAgICAsIDEwMClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy90aGlzLnJ1bkxvdHRpZSgpXG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKVxuICAgICAgICAgICAgdGhpcy5vcGVuTG9jYXRpb25PdmVybGF5KClcbiAgICAgICAgfSAgXG4gICAgfVxuXG4gICAgYWN0aXZlU2VyYWNoUmVzdWx0cygpeyBcbiAgICAgICAgaWYgKCF0aGlzLndyYXBwZXIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAvL3RoaXMucnVuTG90dGllKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU2VhcmNoT3ZlcmxheSgpXG4gICAgICAgICAgICAsIDEwMClcbiAgICAgICAgICAgIHRoaXMud3JhcHBlckFjdGl2ZSgpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy90aGlzLnJ1bkxvdHRpZSgpXG4gICAgICAgICAgICB0aGlzLndyYXBwZXJBY3RpdmUoKVxuICAgICAgICAgICAgdGhpcy5vcGVuU2VhcmNoT3ZlcmxheSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3cmFwcGVyQWN0aXZlKCl7XG4gICAgICAgIGlmKHRoaXMud3JhcHBlci5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgICAgICAgaWYodGhpcy53cmFwcGVyU2VyYWNoUmVzdWx0cy5oYXNDbGFzcygncmVzdWx0cy1kaXNwbGF5Jykpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVXNlUmVzdWx0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMb2NhdGlvblJlc3VsdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VyYWNoUmVzdWx0cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLndyYXBwZXJMb2NhdGlvblJlc3VsdHMuaGFzQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVVzZVJlc3VsdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9jYXRpb25SZXN1bHRzKClcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlcmFjaFJlc3VsdHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy53cmFwcGVyVXNlUmVzdWx0cy5oYXNDbGFzcygncmVzdWx0cy1kaXNwbGF5Jykpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVXNlUmVzdWx0cygpXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMb2NhdGlvblJlc3VsdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VyYWNoUmVzdWx0cygpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vRGVha3RpdmllcnVuZ1xuICAgIHJlbW92ZVVzZVJlc3VsdHMoKXtcbiAgICAgICAgdGhpcy53cmFwcGVyVXNlUmVzdWx0cy5hZGRDbGFzcygncmVzdWx0cy1ub25lJylcbiAgICAgICAgdGhpcy53cmFwcGVyVXNlUmVzdWx0cy5yZW1vdmVDbGFzcygncmVzdWx0cy1kaXNwbGF5JylcbiAgICAgICAgdGhpcy5sb2NhdEZpbHRlci5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgdGhpcy5zZXJhY2hGaWx0ZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfSAgIFxuXG4gICAgcmVtb3ZlTG9jYXRpb25SZXN1bHRzKCl7XG4gICAgICAgIHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5hZGRDbGFzcygncmVzdWx0cy1ub25lJylcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLnJlbW92ZUNsYXNzKCdyZXN1bHRzLWRpc3BsYXknKVxuICAgICAgICB0aGlzLnVzZUZpbHRlci5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgdGhpcy5zZXJhY2hGaWx0ZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgcmVtb3ZlU2VyYWNoUmVzdWx0cygpe1xuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLmFkZENsYXNzKCdyZXN1bHRzLW5vbmUnKVxuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLnJlbW92ZUNsYXNzKCdyZXN1bHRzLWRpc3BsYXknKVxuICAgICAgICB0aGlzLnVzZUZpbHRlci5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgdGhpcy5sb2NhdEZpbHRlci5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICAvL092ZXJsYXkgT3BlbiBGaWx0ZXJcbiAgICBvcGVuU2VhcmNoT3ZlcmxheSgpe1xuICAgICAgICB0aGlzLm92ZXJsYXkoKVxuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLnJlbW92ZUNsYXNzKCdyZXN1bHRzLW5vbmUnKVxuICAgICAgICB0aGlzLndyYXBwZXJTZXJhY2hSZXN1bHRzLmFkZENsYXNzKCdyZXN1bHRzLWRpc3BsYXknKVxuICAgICAgICB0aGlzLnNlcmFjaEZpbHRlci5hZGRDbGFzcygnYWN0aXZlJylcbiAgICB9XG5cbiAgICBvcGVuTG9jYXRpb25PdmVybGF5KCl7XG4gICAgICAgIHRoaXMub3ZlcmxheSgpXG4gICAgICAgIHRoaXMud3JhcHBlckxvY2F0aW9uUmVzdWx0cy5yZW1vdmVDbGFzcygncmVzdWx0cy1ub25lJylcbiAgICAgICAgdGhpcy53cmFwcGVyTG9jYXRpb25SZXN1bHRzLmFkZENsYXNzKCdyZXN1bHRzLWRpc3BsYXknKVxuICAgICAgICB0aGlzLmxvY2F0RmlsdGVyLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIG9wZW5Vc2VPdmVybGF5KCl7XG4gICAgICAgIHRoaXMub3ZlcmxheSgpXG4gICAgICAgIHRoaXMud3JhcHBlclVzZVJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Jlc3VsdHMtbm9uZScpXG4gICAgICAgIHRoaXMud3JhcHBlclVzZVJlc3VsdHMuYWRkQ2xhc3MoJ3Jlc3VsdHMtZGlzcGxheScpXG4gICAgICAgIHRoaXMudXNlRmlsdGVyLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIC8vQmFzaWNcbiAgICBvdmVybGF5KCl7XG4gICAgICAgIHRoaXMud3JhcHBlci5hZGRDbGFzcygnd3JhcHBlci1maWx0ZXItc3R5bGUnKVxuICAgICAgICB0aGlzLmJnRGlzdGFuY2UuYWRkQ2xhc3MoJ2JnLWRpc3RhbmNlJylcbiAgICAgICAgdGhpcy5vcGVuQ2xvc2VCdXR0b24uYWRkQ2xhc3MoJ2Nsb3NlLWJ1dHRvbi1kaXNwbGF5JylcbiAgICAgICAgdGhpcy53cmFwcGVyLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLmZpbHRlck1haW4uYWRkQ2xhc3MoJ2FjdGl2ZS1tYWluJylcbiAgICAgICAgdGhpcy5maWx0ZXJCb2R5LmFkZENsYXNzKCdhY3RpdmUtbWFpbicpXG4gICAgfVxuXG4gICAgLy8gcnVuTG90dGllKCl7XG4gICAgLy8gICAgIGlmICghdGhpcy53cmFwcGVyLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTG90dGknKVxuICAgIC8vICAgICAgICAgdGhpcy5sb3R0aWV2aWV3LmNzcygnZGlzcGxheScsICdibG9jaycpXG4gICAgLy8gICAgICAgICB0aGlzLndyYXBwZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxvdHRpZXZpZXcuY3NzKCdkaXNwbGF5JywgJ25vbmUnKSwgXG4gICAgLy8gICAgICAgICAyNTAwKVxuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG5cbiAgICBjbG9zZSgpe1xuICAgICAgICB0aGlzLnJlbW92ZVVzZVJlc3VsdHMoKVxuICAgICAgICB0aGlzLnJlbW92ZUxvY2F0aW9uUmVzdWx0cygpXG4gICAgICAgIHRoaXMucmVtb3ZlU2VyYWNoUmVzdWx0cygpXG4gICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVDbGFzcygnd3JhcHBlci1maWx0ZXItc3R5bGUnKVxuICAgICAgICB0aGlzLmJnRGlzdGFuY2UucmVtb3ZlQ2xhc3MoJ2JnLWRpc3RhbmNlJylcbiAgICAgICAgdGhpcy5vcGVuQ2xvc2VCdXR0b24ucmVtb3ZlQ2xhc3MoJ2Nsb3NlLWJ1dHRvbi1kaXNwbGF5JykgXG4gICAgICAgIHRoaXMuZmlsdGVyTWFpbi5yZW1vdmVDbGFzcygnYWN0aXZlLW1haW4nKVxuICAgICAgICB0aGlzLmZpbHRlckJvZHkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1tYWluJylcbiAgICAgICAgdGhpcy5nZXREYXRhUmVzdWx0cygpXG4gICAgfVxuXG4gICAgLy8gbG90dGllKCl7XG4gICAgLy8gICAgIGxldCBpY29uU2tpcEZvcndhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG90dGllJyk7XG4gICAgLy8gICAgIGxldCBhbmltYXRpb25Ta2lwRm9yd2FyZCA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKHtcbiAgICAvLyAgICAgICAgICAgICBjb250YWluZXI6IGljb25Ta2lwRm9yd2FyZCxcbiAgICAvLyAgICAgICAgICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgLy8gICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICBwYXRoOiBcIi93cC1jb250ZW50L3RoZW1lcy9oYWVydGhhL2ltYWdlcy9IR19Mb2dvX0FuaW1hdGlvbl9MQTIuanNvblwiXG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICBhbmltYXRpb25Ta2lwRm9yd2FyZC5wbGF5U2VnbWVudHMoWzAsNjBdLCB0cnVlKTtcbiAgICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvY2VlZGluZ0RhdGFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBnZXREYXRhVXNlKCl7XG4vLyAgICAgalF1ZXJ5LmdldEpTT04ocHJvY2VlZGluZ3NEYXRhLnJvb3RfdXJsICsgJy93cC1qc29uL3Byb2NlZWRpbmdzZGF0YXJlc3RhcGkvdjEvZGF0YS8nLCBmdW5jdGlvbihkYXRhKXtcbi8vICAgICAgICAgLy92YXIgY2F0ID0gZGF0YS5jYXRlZ29yaWU7XG5cbi8vICAgICAgICAgLy8gdmFyIGNhdERhdGUgPSB7fTtcbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIC8vICAgICB2YXIgciA9IGNhdERhdGVbdGhpcy5yZXN1bHRzXSA9IFtdO1xuLy8gICAgICAgICAvLyAgICAgci5wdXNoKHRoaXMpO1xuLy8gICAgICAgICAvLyB9KTtcblxuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKGNhdERhdGUpXG5cblxuICBcblxuLy8gICAgICAgICB2YXIgbWFuZHJpbGxfZXZlbnRzID0gZGF0YS5jYXRlZ29yaWU7XG5cbi8vICAgICAgICAgY29uc29sZS5sb2cobWFuZHJpbGxfZXZlbnRzKVxuXG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbMF07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbNF07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbOV07XG4vLyAgICAgICAgIHZhciByZXN1bHQgPSBtYW5kcmlsbF9ldmVudHNbMTNdO1xuLy8gICAgICAgICB2YXIgcmVzdWx0ID0gbWFuZHJpbGxfZXZlbnRzWzE2XTtcbi8vICAgICAgICAgdmFyIHJlc3VsdCA9IG1hbmRyaWxsX2V2ZW50c1syMV07XG5cblxuLy8gICAgICAgICBqUXVlcnkuZWFjaChyZXN1bHQsIGZ1bmN0aW9uKGksIG9iamVjdCl7XG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGkgKycoJytvYmplY3QubGVuZ3RoKycpJylcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqZWN0KTtcbi8vICAgICAgICAgLy8gICAgY29uc29sZS5sb2cob2JqZWN0KVxuLy8gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9iamVjdClcbi8vICAgICAgICAgICAgIC8vIGpRdWVyeS5lYWNoKG9iamVjdCwgZnVuY3Rpb24gKGluZGV4LCBvYmopIHtcbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGluZGV4KVxuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqW2luZGV4XSk7XG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvYmopXG4vLyAgICAgICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvYmpbaV0pXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8galF1ZXJ5LmVhY2gob2JqLCBmdW5jdGlvbiAoaSwgdmFycikge1xuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codmFycilcbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codmFyci5wZXJtYWxpbmspXG4gICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh2YXJyLnRpdGxlKVxuXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIGpRdWVyeShcIiN3cmFwcGVyLXVzZS1yZXN1bHRzXCIpLmFwcGVuZChgXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gICAgIDx1bCBpZD1cIndyYXBwZXItdXJcIj5cbi8vICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIDxsaT4gJHt2YXJyWzBdfSA8L2xpPlxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgPGxpPiAke3ZhcnIudGl0bGV9IDwvbGk+XG4gICAgICAgICAgIFxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICA8L3VsPlxuLy8gICAgICAgICAgICAgLy8gICAgIC8vICAgICBgKVxuXG4vLyAgICAgICAgICAgICAvLyAgICAgLy8gfSk7XG5cbi8vICAgICAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG9iaiApO1xuLy8gICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKG9ialtpbmRleF0pO1xuLy8gICAgICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2cob2JqLnBlcm1hbGluayk7XG5cblxuXG4vLyAgICAgICAgICAgICAvLyB9KTtcbi8vICAgICAgICAgfSk7XG5cblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihpLCBlKSB7XG4vLyAgICAgICAgIC8vICAgICBqUXVlcnkuZWFjaChlLCBmdW5jdGlvbihrZXksIGFycikge1xuLy8gICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGFycilcbi8vICAgICAgICAgLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChhcnIsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSl7XG4vLyAgICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2codmFsdWUpXG4vLyAgICAgICAgIC8vICAgICAgICAgLy8gfSlcbi8vICAgICAgICAgLy8gICAgIH0pO1xuLy8gICAgICAgICAvLyB9KVxuXG5cblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChjYXQsIGZ1bmN0aW9uKGksIGl0ZW0pIHtcblxuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5KFwiI3dyYXBwZXItdXNlLXJlc3VsdHNcIikuYXBwZW5kKGBcbi8vICAgICAgICAgLy8gICAgIDx1bCBpZD1cIndyYXBwZXItdXJcIj5cbiAgICAgICAgICAgICAgICBcblxuLy8gICAgICAgICAvLyAgICAgICAgICR7IGpRdWVyeS5lYWNoKGl0ZW0sIGZ1bmN0aW9uKGtleSwgYXJyeSl7XG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIGA8bGk+ICR7YXJyeS5wZXJtYWxpbmt9ICAke2FycnkudGl0bGV9PC9saT5gXG4vLyAgICAgICAgIC8vICAgICAgICAgfSkgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICA8L3VsPlxuLy8gICAgICAgICAvLyAgICAgYClcblxuLy8gICAgICAgICAvLyB9KTtcblxuXG5cbi8vICAgICAvLyAgICAgZGF0YS5jYXRlZ29yaWUubWFwKCBpdGVtID0+IGNvbnNvbGUubG9nKGl0ZW0pKVxuLy8gICAgIC8vICAgIC8vZGF0YS5jYXRlZ29yaWUubWFwKCBpdGVtID0+IGNvbnNvbGUubG9nKGl0ZW0gKyBpdGVtLnBlcm1hbGluayArIGl0ZW0udGl0ZWwpKVxuXG4vLyAgICAgLy8gICAgIGpRdWVyeShcIiN3cmFwcGVyLXVzZS1yZXN1bHRzXCIpLmFwcGVuZChgXG4vLyAgICAgLy8gICAgIDx1bCBpZD1cIndyYXBwZXItdXJcIj5cbi8vICAgICAvLyAgICAgJHtkYXRhLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gaXRlbSApIH1cbi8vICAgICAvLyAgICAgPC91bD5cbi8vICAgICAvLyAgICAgYClcblxuXG5cbi8vICAgICAgICAgLy8gdmFyIHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuXG5cbi8vICAgICAgICAgLy8gdmFyIGNhdFJlc3VsdHMgPSBkYXRhLmNhdGVnb3JpZTtcblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChjYXRSZXN1bHRzLCBmdW5jdGlvbihpLCBpdGVtKSB7XG4vLyAgICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pO1xuLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaSk7XG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLnRpdGxlKTtcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0ucGVybWFsaW5rKTtcbi8vICAgICAgICAgLy8gICAgIGl0ZW0ucmVzdWx0cy5tYXAoIGl0ZW0gPT4gaXRlbS5wZXJtYWxpbmspXG5cbi8vICAgICAgICAgLy8gfSk7XG5cbi8vICAgICAgICAgLy9sZXQgY2F0UmVzdWx0cyA9IG51bWJlckFycmF5Lm1hcCgobnVtKSA9PiBudW0udGl0bGUpXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSxmdW5jdGlvbigpe1xuXG4vLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyggdGhpcy50aXRsZSAsdGhpcy5wZXJtYWxpbmspO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgIC8vICAgICB9KVxuXG5cbi8vICAgICAgICAgLy8vZGYuY2F0ZWdvcmllcmVzdWx0cy5tYXAoaXRlbV8gPT4gY29uc29sZS5sb2coaXRlbV8uaWQpKVxuXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goY2F0UmVzdWx0cy5jb25jYXQocmVzdWx0cyksIGZ1bmN0aW9uKGksIGl0ZW0pIHtcbi8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2coaXRlbS5jYXQpO1xuXG4vLyAgICAgICAgIC8vIH0pO1xuXG5cbi8vICAgICAgICAgLy8galF1ZXJ5LmVhY2goZGF0YSwgZnVuY3Rpb24oaSwgZSkge1xuLy8gICAgICAgICAvLyAgICAgalF1ZXJ5LmVhY2goZSwgZnVuY3Rpb24oa2V5LCBhcnIpIHtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGFyci5jYXRlZ29yaWUpOyAgICAgICBcbi8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiLi4uXCIsYXJyLmNhdGVnb3JpZSwgYXJyLm5hbWUpO1xuXG4vLyAgICAgICAgIC8vICAgICB9KTtcbi8vICAgICAgICAgLy8gfSlcblxuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihpLCBlKSB7XG4vLyAgICAgICAgIC8vICAgICBqUXVlcnkuZWFjaChlLCBmdW5jdGlvbihrZXksIGFycikge1xuLy8gICAgICAgICAvLyAgICAgICAgIGpRdWVyeS5lYWNoKGFyciwgZnVuY3Rpb24oaW5kZXgsIG9iaikge1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi4uLlwiLCBpbmRleCwgb2JqLnZhbHVlKTtcbi8vICAgICAgICAgLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgLy8gICAgIH0pO1xuLy8gICAgICAgICAvLyB9KVxuXG4gICAgICAgIFxuLy8gICAgICAgICAvL3ZhciBjYXQgPSBkYXRhO1xuLy8gICAgICAgICAvLyBqUXVlcnkuZWFjaChkYXRhLCBmdW5jdGlvbihrYXksIHZhbCl7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cy5wZXJtYWxpbmspXG4vLyAgICAgICAgIC8vICAgICAvL3ZhbC5tYXAoaXRlbSA9PiBgPGxpPjxhIGhyZWY9XCIke2l0ZW19XCI+JHtpdGVtLnRpdGxlfTwvYT48L2xpPmApLmpvaW4oXCJcIilcbi8vICAgICAgICAgLy8gICAgIC8vdmFsLmNhdGVnb3JpZS5tYXAoIGl0ZW0gPT4gY29uc29sZS5sb2coaXRlbSkpXG4gICAgICAgICAgICBcbi8vICAgICAgICAgLy8gICAgIC8vY29uc29sZS5sb2codmFsLmlkKVxuLy8gICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh2YWwpXG5cblxuLy8gICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coa2V5cyk7XG4vLyAgICAgICAgIC8vICAgICAvLyBpZihydXNhbHRzLmlkID09IGNhdC5pZCl7XG4vLyAgICAgICAgIC8vICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhydXNhbHRzLnRpdGxlKVxuLy8gICAgICAgICAvLyAgICAgLy8gfVxuLy8gICAgICAgICAvLyB9KVxuLy8gICAgIH0pXG4vLyB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2Rpc3Qvc2NyaXB0cy9tYWluXCI6IDAsXG5cdFwiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIjogMCxcblx0XCJkaXN0L3N0eWxlcy9hZG1pblwiOiAwLFxuXHRcImRpc3Qvc3R5bGVzL21haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raGFlcnRoYVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtoYWVydGhhXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGlzdC9zdHlsZXMvbWFnbmlmaWMtcG9wdXBcIixcImRpc3Qvc3R5bGVzL2FkbWluXCIsXCJkaXN0L3N0eWxlcy9tYWluXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL3NjcmlwdHMvbWFpbi5qc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3R5bGVzL21haW4uc2Nzc1wiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3NcIikpKVxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkaXN0L3N0eWxlcy9tYWduaWZpYy1wb3B1cFwiLFwiZGlzdC9zdHlsZXMvYWRtaW5cIixcImRpc3Qvc3R5bGVzL21haW5cIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvc3R5bGVzL21hZ25pZmljLXBvcHVwLnNjc3NcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJDb250YWN0RGF0YSIsIlByb2NlZWRpbmdEYXRhIiwiTG9jYXRpb25EYXRhIiwiQ29udGFjdFBlcnNvbiIsImNvbnRhY3RkYXRhIiwicHJvY2VlZGluZ2RhdGEiLCJsb2NhdGlvbmRhdGEiLCJjb250YWN0cGVyc29uIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsIm1haW5DbGFzcyIsImdhbGxlcnkiLCJlbmFibGVkIiwiem9vbSIsImR1cmF0aW9uIiwiZWFzaW5nIiwib3BlbmVyIiwib3BlbmVyRWxlbWVudCIsImlzIiwiZmluZCIsImlmcmFtZSIsInBhdHRlcm5zIiwieW91dHViZSIsImluZGV4IiwiaWQiLCJ1cmwiLCJtIiwibWF0Y2giLCJzcmMiLCJ2aW1lbyIsIm1haW5OYXYiLCJnZXRFbGVtZW50QnlJZCIsIm5hdkJhclRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJlZmZlY3QiLCJmYWRlRWZmZWN0IiwiY3Jvc3NGYWRlIiwic2xpZGVzUGVyVmlldyIsInNwZWVkIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlcmVkU2xpZGVzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInNwYWNlQmV0d2VlbiIsInJlbmRlckJ1bGxldCIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsImlzX3RvYyIsImNzc19jbGFzcyIsImVhY2giLCJhcHBlbmQiLCJhdHRyIiwiaGlkZSIsImkiLCJyZW1vdmUiLCJlbmQiLCJwcmVwZW5kIiwib24iLCJvblNjcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0YXJnZXQiLCJoYXNoIiwibWVudSIsInN0b3AiLCJhbmltYXRlIiwib2Zmc2V0IiwidG9wIiwid2luZG93IiwibG9jYXRpb24iLCJldmVudCIsInNjcm9sbFBvcyIsInNjcm9sbFRvcCIsImN1cnJMaW5rIiwicmVmRWxlbWVudCIsInJlZkVsZW1lbnRfcG9zIiwiaGVhZGVyX2hlaWdodCIsImhlaWdodCIsInJlZkVsZW1lbnRfcG9zX3RvdGFsIiwic2Nyb2xsUG9zX3RvdGFsIiwiY2xpY2siLCJidG4iLCJzY3JvbGwiLCJmYWRlT3V0IiwibnVtYmVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmYWRlSW4iLCJjb250YWN0RGF0YSIsImdldERhdGFJZCIsImdldFByb2NlZHVyZUxvY2F0aW9uIiwiZGF0YUlkIiwidmFsIiwiZ2V0SlNPTiIsInByb2NlZWRpbmdzRGF0YSIsInJvb3RfdXJsIiwibG9jYXRpb25IdG1sIiwiY291bnRyeV9kYXRhIiwiaXRlbSIsImluY2x1ZGVzIiwiY291bnRyeV9jb2RlIiwicHVzaCIsInVsIiwic3dpcGVySW1hZ2UiLCJzd2lwZXJDb250YWN0IiwiY29udHJvbGxlciIsImNvbnRyb2wiLCJnZXRTd2lwZXJKUyIsImltZyIsImxlbmd0aCIsImNzcyIsImh0bWwiLCJyZW1vdmVBdHRyIiwia2V5IiwiYWZ0ZXIiLCJuYW1lIiwic3RyZWV0X251bWJlciIsInBvc3Rjb2RlIiwiY291bnRyeSIsImVtYWlsIiwicGhvbmUiLCJwZXJtYWxpbmsiLCJzbGlkZXJfaW1hZ2UiLCJzbGlkZXJfaW1hZ2Vfc2l6ZSIsInByb2NlZWRpbmdfaGVhZGVyIiwid2lkdGgiLCJjb250YWN0UGVyc29uIiwiZ2V0RGF0YSIsImxvY2F0aW9uRGF0YSIsImdldExvYWNhdGlvbkRhdGEiLCJjYXRpZCIsInJlc3VsdHMiLCJhbGxDYXRzIiwiY2F0IiwibG9jcyIsImoiLCJsb2MiLCJjaGlsZHJlbiIsInByb2NlZWRpbmdEYXRhIiwidXNlQnV0dG9uIiwidXNlTG9jYXRpb25CdXR0b24iLCJ1c2VTZWFyY2hCdXR0b24iLCJ3cmFwcGVyIiwiYmdEaXN0YW5jZSIsIndyYXBwZXJTZXJhY2hSZXN1bHRzIiwid3JhcHBlckxvY2F0aW9uUmVzdWx0cyIsIndyYXBwZXJVc2VSZXN1bHRzIiwibG90dGlldmlldyIsIm9wZW5DbG9zZUJ1dHRvbiIsInVzZUZpbHRlciIsImxvY2F0RmlsdGVyIiwic2VyYWNoRmlsdGVyIiwiZmlsdGVyTWFpbiIsImZpbHRlckJvZHkiLCJldmVudHMiLCJnZXREYXRhUmVzdWx0cyIsImdldERhdGFVc2UiLCJnZXREYXRhTG9jYXRpb25zIiwiYWN0aXZlU2VyYWNoUmVzdWx0cyIsImJpbmQiLCJhY3RpdmVMb2NhdGlvblJlc3VsdHMiLCJhY3RpdmVVc2VSZXN1bHRzIiwiY2xvc2UiLCJ0aGF0IiwiY2F0ZWdvcmllIiwicGFydHlIVE1MIiwidmFsSFRNTCIsIm9iamVjdCIsInVuZGVmaW5lZCIsIm5hbSIsInRpdGxlIiwicG9zdGlkIiwic2VsZWN0ZWQiLCJBcnJheSIsInZhbHVlIiwic2VyaWFsaXplZEZvcm0iLCJsb2NhdGlvbnMiLCJwb3N0IiwicHJvY2VlZGluZ3MiLCJwcm9jZWVkaW5nc3Jlc3VsdHMiLCJ0aHVtYm5haWwiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJvcGVuVXNlT3ZlcmxheSIsIndyYXBwZXJBY3RpdmUiLCJvcGVuTG9jYXRpb25PdmVybGF5Iiwib3BlblNlYXJjaE92ZXJsYXkiLCJyZW1vdmVVc2VSZXN1bHRzIiwicmVtb3ZlTG9jYXRpb25SZXN1bHRzIiwicmVtb3ZlU2VyYWNoUmVzdWx0cyIsIm92ZXJsYXkiXSwic291cmNlUm9vdCI6IiJ9