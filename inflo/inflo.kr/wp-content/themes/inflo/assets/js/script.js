"use strcit";

//---------------------------------------------------------------------------------------------------------
//
//wechatpopup

$(document).ready(function () {
  $('.wechat_btn').on("click", function() {
    $(".wechat_popup").toggleClass("open");
  });

  $(".modal-btn").on("click", function() {
    $(".wechat_popup").toggleClass("open");
  });
});

//CONTACT

jQuery(function ($) {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    let self = $(this),
    user_name = self.find('input[name="contact_name"]').val();
    user_email = self.find('input[name="contact_email"]').val();
    user_message = self.find('textarea[name="contact_message"]').val();

    if (user_name == "" || user_name == "") {
      if (user_name == "") {
        $("#contact_name").css({
          "border-color": "red",
          "box-shadow": "rgba(255, 87, 87, 0.24) 0px 3px 8px ",
        });
      } else user_email == "";
      {
        $("#contact_email").css({
          "border-color": "red",
          "box-shadow": "rgba(255, 87, 87, 0.24) 0px 3px 8px ",
        });
      }
      self.append('<p class = "msg-error">Field can not be empty!</p>');
      e.preventDefault();
      return;
    }

    $.ajax({
      url: self.attr("data-url"),
      data: {
        action: "contact_form",
        form: {
          user_name: user_name,
          user_email: user_email,
          user_message: user_message,
        },
      },
      type: "POST",
      success: function (json) {
        //let data = JSON.parse(json);
        self.append('<p class = "msg-success">' + json.data.message + "</p>");
        $("#contact-form")[0].reset();
      },
      fail: function () {
        self.append('<p class = "msg-error">Произошла ошибка</p>');
      },
    });
  });
});

$(document).ready(function () {
  $("#contact_name").on("focus", function () {
    $("#contact_name").css({ "border-color": "#ccc", "box-shadow": "none" });
    $(".msg-error").hide();

  });

  $("#contact_email").on("focus", function () {
    $("#contact_email").css({ "border-color": "#ccc", "box-shadow": "none" });
    $(".msg-error").hide();
  });
});


jQuery(function ($) {
  $("#clinic-contact").on("submit", function (e) {  
	 
    e.preventDefault();
	  console.log('clicked');
    let self = $(this),
    clinic_name = self.find('input[name="clinic_name"]').val();
    manager_name = self.find('input[name="manager_name"]').val();
    contact_number = self.find('input[name="contact_number"]').val();

    if (clinic_name == "" || contact_number == "") {
      if (clinic_name == "") {
        $("#clinic_name").css({
          "border-color": "red",
          "box-shadow": "rgba(255, 87, 87, 0.24) 0px 3px 8px ",
        });
      } else contact_number == "";
      {
        $("#contact_number").css({
          "border-color": "red",
          "box-shadow": "rgba(255, 87, 87, 0.24) 0px 3px 8px ",
        });
      }
      self.append('<p class = "msg-error">필수필드입니다.</p>');
      e.preventDefault();
      return;
    }

    $.ajax({
      url: self.attr("data-url"),
      data: {
        action: "clinic_contact",
        form: {
          clinic_name: clinic_name,
          manager_name: manager_name,
          contact_number: contact_number,
        },
      },
      type: "POST",
      success: function (json) {
        //let data = JSON.parse(json);
        self.append('<p class = "msg-success">' + json.data.message + "</p>");
        $("#clinic-contact")[0].reset();
      },
      fail: function () {
        self.append('<p class = "msg-error">Error.</p>');
      },
    });
  });
});

//---------------------------------------------------------------------------------------------------------
//  MENU

$(document).ready(function () {
  // Handle click on main menu items
  $(".menu-item").click(function () {
    $(".menu-item").removeClass("active"); // Remove active class from all items
    $(this).addClass("active"); // Add active class to the clicked item
  });

  // Handle click on smaller menu items
  $(".small-menu-item").click(function () {
    // Example action on smaller menu item click
    // alert("Clicked " + $(this).text());
    $(".small-menu-item").removeClass("active"); // Remove active class from all items
    $(this).addClass("active");
  });
});

//---------------------------------------------------------------------------------------------------------

// SCROLL UP

let lastScrollTop = 0;
const headerHeight = $("#site-header").outerHeight();

$(window).scroll(function () {
  let st = $(this).scrollTop();
  // Check if user is scrolling up or down
  if (st > lastScrollTop && st > headerHeight) {
    // Scroll down and below header height, hide the header
    $("#site-header").css("top", `-${headerHeight}px`);
    $("#site-header").css("background", "unset");
  } else {
    // Scroll up or at the top, show the header
    $("#site-header").css("top", "30px");
    $("#site-header").css("background", "#000000");
  }
  lastScrollTop = st;
	
if (st == 0) {
	$("#site-header").css("background", "#00000000");
}
});

//---------------------------------------------------------------------------------------------------------

$("#country").countrySelect();

//---------------------------------------------------------------------------------------------------------

$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordeon .acc-head').on('click', f_acc);
	$('#accordeon .acc-head').on('click', function() {
		console.log('test click');
	});
});

function f_acc(){
//скрываем все кроме того, что должны открыть
  $('#accordeon .acc-body').not($(this).next()).slideUp(500);
  $('#accordeon .acc-head').not($(this)).removeClass('active-acc');
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(500);
    $(this).toggleClass('active-acc');
	console.log('hi');
}


$(function () {
  $("#clinic-accordion").accordion({
    header: "h3",
    collapsible: true,
    active: false,
  });
});

var mainSwiper = new Swiper(".mainSwiper", {
autoHeight: true,
  loop: true,
//   autoplay: {
//     delay: 6000,
//   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperPhoto = new Swiper(".swiperPhoto", {
  // Default parameters
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
	 clicable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiperReview = new Swiper(".swiperReview", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".review-swiper-button-next",
    prevEl: ".review-swiper-button-prev",
  },
  pagination: {
    el: ".review-swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//---------------------------------------------------------------------------------------------------------

$(".invisible-review").hide();

$(".content_toggle").click(function (event) {
  var isLike = event.currentTarget.parentElement.firstElementChild;
  var btnText = $(".invisible-review").is(":visible") ? '+ READ MORE' : 'HIDE';
  $(event.currentTarget).html(btnText);
  $(isLike).parent(".review-text").find(".invisible-review").toggle();
  $(isLike).parent(".review-text").find(".visible-review").toggle();
});

//---------------------------------------------------------------------------------------------------------

var $grid = $(".grid-fav").isotope({
  itemSelector: ".fav-item",
  layoutMode: "packery",
  percentPosition: true,
});

var buttonFilters = {};
var buttonFilter;
// quick search regex
var qsRegex;

// init Isotope
var $grid = $(".grid").isotope({
  layoutMode: "packery",
  sortBy: "random",
  itemSelector: ".color-shape",
  gutter: 10,
  percentPosition: true,
//   filter: function () {
//     var $this = $(this);
//     var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
//     var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
//     return searchResult && buttonResult;
//   },
});

// init Infinite Scroll
$grid.infiniteScroll({
  // Infinite Scroll options
  // do not set append
  // do not set outlayer
  path: ".next-page>a",
	status: ".page-load-status",
   hideNav: ".pagination",
	//debug: true,
}				
);

    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });

// append items on load
$grid.on( 'load.infiniteScroll', function( event, response, path ) {
  var $items = $( response ).find('.color-shape');
  // append items after images loaded
  $items.imagesLoaded( function() {
    $grid.append( $items );
	  $items.fadeIn();
	  //was 'insert' made 'appended'
    $grid.isotope( 'appended', $items );
	   $grid.isotope('layout');
  });
});

//2024-07-31 old infinity scroll
// var iso = $grid.data("isotope");
// $grid
//   .infiniteScroll({
//     path: ".next-page>a",
//     append: ".color-shape",
//     outlayer: iso,
//     history: false,
//         scrollThreshold: 100,
//     status: ".page-load-status",
//     hideNav: ".pagination",
// 	debug: true
//   })
//   .on("load.infiniteScroll", function (event, response, path, items) {
//     $grid.isotope("appended", $(items));
    
//   });


//2024-07-31 test
//  var $window = $(window);
//  var $big_container = $('.grid');

//   $big_container.on('layoutComplete', function(){
//         $window.trigger("scroll");
//     });



var filters = {};

$(".filter-button-group").on("click change", ".button", function () {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.closest(".button-group");
  var filterGroup = $buttonGroup.attr("data-filter-group");
  // set filter for group
  filters[filterGroup] = $this.attr("data-filter");
  // combine filters
  var filterValue = concatValues(filters);
  $grid.isotope({ filter: filterValue });
});


// flatten object by concatting values
function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

// use value of search field to filter
var $quicksearch = $(".quicksearch").keyup(
  debounce(function () {
    qsRegex = new RegExp($quicksearch.val(), "gi");
    $grid.isotope();
  })
);

// change is-checked class on buttons
$(".button-group").each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", ".button", function () {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
  });
});

// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout(timeout);
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply(_this, args);
    }
    timeout = setTimeout(delayed, threshold);
  };
}

$( function() {
	  $(document).ready(function(){
      var theHash = window.location.hash;
      var theHash = theHash.substr(1);  
      //console.log(theHash);

    if(theHash == "clinic" || theHash == "doctor" || theHash == "youtube" || theHash == "sns" || theHash == "review"){

      $(".filter-link").removeClass("is-checked");				

    }

    if (theHash != '') {
      if(theHash == "clinic"){
        $('span.cnt-menu-text[data-filter=".clinic-css-class"]').trigger("click");    
      } 
      if(theHash == "doctor"){
        $('span.cnt-menu-text[data-filter=".doctor-css-class"]').trigger("click");   
      }       
      if(theHash == "youtube"){
        $('span.cnt-menu-text[data-filter=".youtube-css-class"]').trigger("click");   
      }
      if(theHash == "sns"){
        $('span.cnt-menu-text[data-filter=".sns-css-class"]').trigger("click");   
      }
      if(theHash == "review"){
        $('span.cnt-menu-text[data-filter=".review-css-class"]').trigger("click");   
      }
    } 
     
  }); 
  

});

//---------------------------------------------------------------------------------------------------------

var swiper_test = new Swiper(".test-swiper", {
  slidesPerView: 5,
  initialSlide: 0,
  observer: true,
  observeParents: true,
});

var swiper_test_review = new Swiper(".test-review-swiper", {
  slidesPerView: 3,
  initialSlide: 0,
  observer: true,
  observeParents: true,
});
