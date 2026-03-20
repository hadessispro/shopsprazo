/* Main js */
(function ($) {
  "use strict";

  /*  Loader  */
  $(window).on("load", function () {
    $(".sp-loader").fadeOut("slow");
  });

  /*  Aos animation on scroll  */
  AOS.init({
    once: true,
  });

  /*  Custom select  */
  $("select").each(function () {
    var $this = $(this),
      selectOptions = $(this).children("option").length;

    $this.addClass("hide-select");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="custom-select"></div>');

    var $customSelect = $this.next("div.custom-select");
    $customSelect.text($this.children("option").eq(0).text());

    var $optionlist = $("<ul />", {
      class: "select-options",
    }).insertAfter($customSelect);

    for (var i = 0; i < selectOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($optionlist);
    }

    var $optionlistItems = $optionlist.children("li");

    $customSelect.on("click", function (e) {
      e.stopPropagation();
      $("div.custom-select.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });

      $(this).toggleClass("active").next("ul.select-options").slideToggle();
    });

    $optionlistItems.on("click", function (e) {
      e.stopPropagation();
      $customSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $optionlist.hide();
    });

    $(document).on("click", function () {
      $customSelect.removeClass("active");
      $optionlist.hide();
    });

    /*  Custom select  */
    $(".sp-sidebar-toggle").on("click", function () {
      $(".sp-category-popup").addClass("sp-category-open");
      $(".sp-category-popup-overlay").fadeIn();
      $(".sp-category-close").removeClass("sp-category-close-hide");
    });
    $(".sp-category-popup-overlay, .sp-category-close").on("click", function () {
      $(".sp-category-popup").removeClass("sp-category-open");
      $(".sp-category-popup-overlay").fadeOut();
      $(".sp-category-close").addClass("sp-category-close-hide");
    });
  });

  /*  Mobile menu sidebar JS  */
  $(".sp-toggle-menu").on("click", function () {
    $(".sp-mobile-menu-overlay").fadeIn();
    $(".sp-mobile-menu").addClass("sp-menu-open");
  });

  $(".sp-mobile-menu-overlay, .sp-close-menu").on("click", function () {
    $(".sp-mobile-menu-overlay").fadeOut();
    $(".sp-mobile-menu").removeClass("sp-menu-open");
  });
  function ResponsiveMobilemsMenu() {
    var $msNav = $(".sp-menu-content, .overlay-menu"),
      $msNavSubMenu = $msNav.find(".sub-menu");
    $msNavSubMenu.parent().prepend('<span class="menu-toggle"></span>');

    $msNav.on("click", "li a, .menu-toggle", function (e) {
      var $this = $(this);
      if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
        e.preventDefault();
        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  ResponsiveMobilemsMenu();

  /*  Stickey headre on scroll &&  Menu Fixed On Scroll Active  */
  var doc = document.documentElement;
  var w = window;

  var ecprevScroll = w.scrollY || doc.scrollTop;
  var eccurScroll;
  var ecdirection = 0;
  var ecprevDirection = 0;
  var ecscroll_top = $(window).scrollTop() + 1;
  var echeader = document.getElementById('sp-main-menu-desk');

  var checkScroll = function () {

    eccurScroll = w.scrollY || doc.scrollTop;
    if (eccurScroll > ecprevScroll) {
      //scrolled up
      ecdirection = 2;
    }
    else if (eccurScroll < ecprevScroll) {
      //scrolled down
      ecdirection = 1;
    }

    if (ecdirection !== ecprevDirection) {
      toggleHeader(ecdirection, eccurScroll);
    }

    ecprevScroll = eccurScroll;
  };

  var toggleHeader = function (ecdirection, eccurScroll) {

    if (ecdirection === 2 && eccurScroll > 180) {
      ecprevDirection = ecdirection;
      $(".sticky-nav").addClass("menu_fixed_up");
    }
    else if (ecdirection === 1) {
      ecprevDirection = ecdirection;
      $(".sticky-nav").addClass("menu_fixed");
      $(".sticky-nav").removeClass("menu_fixed_up");
    }
  };

  $(window).on("scroll", function () {
    // var distance = $('.sticky-header-next-sec').offset().top,
    //   $window = $(window);
    var distance = 50;
    var $window = $(window);
    if ($window.scrollTop() <= distance + 120) {
      $(".sticky-nav").removeClass("menu_fixed");
    }
    else {
      checkScroll();
    }
  });

  /*  Cart sidebar JS  */
  $(".sp-cart-toggle").on("click", function (e) {
    e.preventDefault();
    $(".sp-side-cart-overlay").fadeIn();
    $(".sp-side-cart").addClass("sp-open-cart");
  });
  $(".sp-side-cart-overlay, .sp-cart-close").on("click", function (e) {
    e.preventDefault();
    $(".sp-side-cart-overlay").fadeOut();
    $(".sp-side-cart").removeClass("sp-open-cart");
  });

  $(function () {
    const TAX_RATE = 0.20;

    function calculateTotals() {
      let subtotal = 0;

      $('.sp-cart-list-detail').each(function () {
        const price = parseFloat($(this).find('.cart-item-price').text());
        let qty = parseInt($(this).find('.qty-input').val(), 10);
        qty = isNaN(qty) || qty < 1 ? 1 : qty;

        const itemTotal = price * qty;
        $(this).find('.sp-item-total').text(itemTotal.toFixed(2));
        subtotal += itemTotal;

      });

      const tax = subtotal * TAX_RATE;
      const grandTotal = subtotal + tax;

      $('.cart-total-price').text(`$${subtotal.toFixed(2)}`);
      $('.tax-price').text(`$${tax.toFixed(2)}`);
      $('.grand-total').text(`$${grandTotal.toFixed(2)}`);
    }

    function bindEvents() {
      $('.inc.sp-qtybtn').off().on('click', function () {
        const $qty = $(this).siblings('.qty-input');
        $qty.val(parseInt($qty.val(), 10) + 1);
        calculateTotals();
      });

      $('.dec.sp-qtybtn').off().on('click', function () {
        const $qty = $(this).siblings('.qty-input');
        let newQty = parseInt($qty.val(), 10) - 1;
        $qty.val(newQty < 1 ? 1 : newQty);
        calculateTotals();
      });

      $('.qty-input').off().on('change', function () {
        let val = parseInt($(this).val(), 10);
        $(this).val((isNaN(val) || val < 1) ? 1 : val);
        calculateTotals();
      });

      $('.cart-remove-item').off().on('click', function () {
        $(this).closest('.cart-sidebar-list').remove();
        calculateTotals();
        cartCounter();

      });
    }

    function cartCounter() {
      var cart_product_count = $(".cart-sidebar-list").length;

      $(".sp-cart-count").text(cart_product_count);
      if (cart_product_count == 0) {
        $('.sp-cart-items').html('<p class="sp-cart-msg">Your Cart is empty!</p>');
      } else {
        $('.sp-cart-msg').remove();
      }
    }

    function popupNotifyCart(element, page) {
      $('.sp-popup-notify').remove();
      $('footer').after('<div class="sp-popup-notify"><p>Add <span class="red">' + element + '</span> products in <a href="' + page + '.html">' + page + '</a> Successfully!</p></div>');
      setTimeout(function () {
        $('.sp-popup-notify').fadeOut();
      }, 2000)
    }

    function popupNotify(element, page) {
      var is_compare = $(element).hasClass("active");

      $('.sp-popup-notify').remove();

      if (is_compare) {
        $(element).removeClass("active");
        $('footer').after('<div class="sp-popup-notify remove"><p>Removed product from <a href="' + page + '.html">' + page + '</a> successfully!</p></div>');
      } else {
        $(element).addClass("active");
        $('footer').after('<div class="sp-popup-notify"><p>Added product to <a href="' + page + '.html">' + page + '</a> successfully!</p></div>');
      }

      // Optional: Auto-remove the notification after a few seconds
      setTimeout(function () {
        $('.sp-popup-notify').fadeOut(300, function () { $(this).remove(); });
      }, 3000);
    }

    $('.add-to-cart').on('click', function () {
      var count = $(".sp-cart-count").html();
      count++;
      var page = 'cart';
      popupNotifyCart(count, page);

      $(".sp-cart-count").html(count);

      const img_url = $(this).parents().parents().siblings("a").children(".inner-img").find(".main-img").attr("src");
      const p_name = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".sp-pro-title a").html();
      const p_price = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".inner-price .new-price").text().trim();
      const p_new_price = parseFloat(p_price.replace('$', '')) || 0;

      const p_weight = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".last-items").html();

      const newRow = '<li class="cart-sidebar-list">' +
        '<a href="javascript:void(0)" class="cart-remove-item"><i class="ri-close-line"></i></a>' +
        '<a href="javascript:void(0)" class="sp-cart-pro-img">' +
        '<img src="' + img_url + '" alt="product-img-1">' +
        '</a>' +
        '<div class="sp-cart-list-detail">' +
        '<a href="product-left-sidebar.html" class="sp-cart-sub-title">' + p_name + '</a>' +
        '<span class="cart-price">' +
        '<span>$</span><span class="new-price cart-item-price">' + p_new_price + '</span> x ' + p_weight + '</span>' +
        '<div class="sp-value">' +
        '<div class="qty-plus-minus">' +
        '<div class="dec sp-qtybtn">-</div>' +
        '<input class="qty-input" type="text" name="sp-qtybtn" value="1">' +
        '<div class="inc sp-qtybtn">+</div>' +
        '</div>' +
        '$<div class="sp-item-total">' + p_new_price + '</div>' +
        '</div>' +
        '</div>' +
        '</li>';
      $('.sp-cart-items').append(newRow);

      bindEvents();
      calculateTotals();
      cartCounter();
    });

    $(".sp-wishlist").on("click", function () {
      $('.sp-wishlist-msg').remove();
      $('.wish-sidebar-list.btn').fadeIn();
      var countWishlist = $(".sp-wishlist-count").html();
      countWishlist++;
      var page = 'wishlist';
      popupNotifyCart(countWishlist, page);

      $(".sp-wishlist-count").html(countWishlist);

      const img_url = $(this).parents().parents().siblings("a").children(".inner-img").find(".main-img").attr("src");
      const p_name = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".sp-pro-title a").html();
      const p_price = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".inner-price .new-price").text().trim();
      const p_weight = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".last-items").html();

      const newRow = '<li class="wish-sidebar-list sp-list">' +
        '<a href="javascript:void(0)" class="wish-remove-item"><i class="ri-close-line"></i></a>' +
        '<a href="javascript:void(0)" class="sp-wish-pro-img">' +
        '<img src="' + img_url + '" alt="product-img-1">' +
        '</a>' +
        '<div class="sp-wish-contact">' +
        '<a href="product-left-sidebar.html" class="sp-wish-sub-title">' + p_name + '</a>' +
        '<span class="wish-price">' +
        '<span class="new-price">' + p_price + ' </span> x 1' + (p_weight ? ' - ' + p_weight : ''); +
          '<span class="stock red"></span>' +
          '</span>' +
          '</div>' +
          '</li>';
      $('.sp-list-block').prepend(newRow);
      removeWishlist();
    });

    /*  Wish list popup product remove JS  */
    function removeWishlist(element, page) {
      $(".wish-remove-item").on("click", function () {
        $(this).parents(".wish-sidebar-list").remove();
        var wish_product_count = $(".sp-list").length;
        if (wish_product_count == 0) {
          $('.sp-list-block').html('<li class="sp-wishlist-msg">Your Wishlist is empty!</li>');
          $('.wish-sidebar-list.btn').fadeOut(0);
        }
        $('.sp-wishlist-count').html(wish_product_count);
      });
    }

    $('.sp-compare').on('click', function () {
      var element = this;
      var page = 'compare';
      popupNotify(element, page);
    });

    $('.sp-quickview-btn').on('click', function () {
      $('.sp-quickview-overlay').fadeIn();
      $('.sp-quickview').addClass("sp-open-quickview");

      const img_1 = $(this).parents().parents().siblings("a").children(".inner-img").find(".main-img").attr("src");
      const img_2 = $(this).parents().parents().siblings("a").children(".inner-img").find(".hover-img").attr("src");
      const p_name = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".sp-pro-title a").html();
      const p_rating = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".sp-pro-rating").html();
      const p_newprice = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".inner-price .new-price").text().trim();
      const p_oldprice = $(this).parents().parents().parents().siblings(".sp-pro-details").find(".inner-price .old-price").text().trim();

      const newRow = '<div class="single-pro-img single-pro-img-no-sidebar">' +
        '<div class="single-product-scroll">' +
        '<div class="single-slide owl-carousel">' +
        '<img class="img-responsive" src="' + img_1 + '" alt="product-img-1">' +
        '<img class="img-responsive" src="' + img_2 + '" alt="product-img-1">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="quickview-pro-content">' +
        '<h5 class="sp-quick-title">' +
        '<a href="product-left-sidebar.html">' + p_name + '</a>' +
        '</h5>' +
        '<div class="sp-pro-rating">' +
        p_rating +
        '</div>' +
        '<p class="sp-quickview-desc">Lorem Ipsum is simply dummy text of the printing and' +
        ' typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever' +
        ' since the 1900s,</p>' +
        '<p class="sp-quickview-desc">Lorem Ipsum is simply dummy text of the printing and' +
        ' typesetting industry. Lorem Ipsum has been Ipsum is simply dummy the industrys standard dummy text ever' +
        ' since the 1900s,</p>' +
        '<div class="sp-quickview-price">' +
        '<span class="new-price">' + p_newprice + '</span>' +
        '<span class="old-price">' + p_oldprice + '</span>' +
        '</div>' +
        '<div class="sp-quickview-qty">' +
        '<div class="qty-common">' +
        '<input class="qty-input" type="text" name="sp-qtybtn" value="1">' +
        '</div>' +
        '<div class="sp-quickview-btn">' +
        '<a href="cart.html" class="sp-btn-1">' +
        '<i class="ri-shopping-bag-line"></i>Add To Cart' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>';
      $('.sp-quickview-box').html(newRow);

      $('.sp-quickview-overlay').on('click', function () {
        $('.sp-quickview-overlay').fadeOut();
        $('.sp-quickview').removeClass("sp-open-quickview");
      });

      quickView_slide();
      weightSelect();
      quantitySelect();
    });

    /*  List Grid View  */
    $('.sp-gl-btn').on('click', 'button', function () {
      var $this = $(this);
      $this.addClass('active').siblings().removeClass('active');
    });

    /*  Product & shop page category Toggle  */
    $(function () {
      $(".sp-sidebar-block.drop .sp-sb-block-content ul li ul").addClass("sp-cat-sub-dropdown");

      $(".sp-sidebar-block.drop .sp-sidebar-block-item").on("click", function () {
        var $this = $(this).closest('.sp-sb-block-content').find('.sp-cat-sub-dropdown');
        $this.slideToggle('slow');
        $('.sp-cat-sub-dropdown').not($this).slideUp('slow');
      });
    });

    /*  Price Range slider ( Shop page )  */
    const slider = document.getElementById('sp_sliderPrice');
    if (slider) {
      const rangeMin = parseInt(slider.dataset.min, 10);
      const rangeMax = parseInt(slider.dataset.max, 10);
      const step = parseInt(slider.dataset.step, 10);
      const filterInputs = document.querySelectorAll('input.filter__input');

      noUiSlider.create(slider, {
        start: [rangeMin, rangeMax],
        connect: true,
        step: step,
        range: {
          'min': rangeMin,
          'max': rangeMax
        },

        // make numbers whole
        format: {
          to: value => value,
          from: value => value
        }
      });

      // bind inputs with noUiSlider 
      slider.noUiSlider.on('update', (values, handle) => {
        filterInputs[handle].value = values[handle];
      });

      filterInputs.forEach((input, indexInput) => {
        input.addEventListener('change', () => {
          slider.noUiSlider.setHandle(indexInput, input.value);
        })
      });
    }
    /*  Shop Sidebar JS  */
    $(".brand ul li").on("click", function (e) {
      $(".brand ul li").removeClass("active");
      $(this).addClass("active");
    });

    // for 100% width list view
    function showList(e) {
      var $gridCont = $('.shop-pro-inner');
      var $listView = $('.pro-gl-content');
      e.preventDefault();
      $gridCont.addClass('list-view');
      $listView.addClass('width-100');
    }

    function gridList(e) {
      var $gridCont = $('.shop-pro-inner');
      var $gridView = $('.pro-gl-content');
      e.preventDefault();
      $gridCont.removeClass('list-view');
      $gridView.removeClass('width-100');
    }

    $(document).on('click', '.btn-grid', gridList);
    $(document).on('click', '.btn-list', showList);

    // for 50% width list view
    function showList50(e) {
      var $gridCont = $('.shop-pro-inner');
      var $listView = $('.pro-gl-content');
      e.preventDefault();
      $gridCont.addClass('list-view-50');
      $listView.addClass('width-50');
    }

    function gridList50(e) {
      var $gridCont = $('.shop-pro-inner');
      var $gridView = $('.pro-gl-content');
      e.preventDefault();
      $gridCont.removeClass('list-view-50');
      $gridView.removeClass('width-50');
    }

    $(document).on('click', '.btn-grid-50', gridList50);
    $(document).on('click', '.btn-list-50', showList50);

    /*  Filter Icon OnClick Open filter Sidebar on shop page  */
    $(".filter-toggle-icon").on("click", function () {
      $(".filter-sidebar-overlay").fadeIn();
      $(".sp-filter-sidebar").addClass("filter-sidebar-open");
    });

    $(".filter-close, .filter-sidebar-overlay").on("click", function () {
      $(".sp-filter-sidebar").removeClass("filter-sidebar-open");
      $(".filter-sidebar-overlay").fadeOut();
    });

    /*  Shop page JS  */
    $(".sp-select-cancel").on("click", function (e) {
      $(this).parents(".sp-select-btn").fadeOut();
    });
    $(".sp-select-clear").on("click", function (e) {
      $(this).parents().parents(".sp-select-bar").fadeOut();
    });

    /*  List Grid View  */
    $('.sp-gl-btn').on('click', 'button', function () {
      var $this = $(this);
      $this.addClass('active').siblings().removeClass('active');
    });

    /*  Footer Toggle  */
    $(".sp-footer-links").addClass("sp-footer-dropdown");

    $(".sp-footer-heading").append(
      "<div class='sp-heading-res'><i class='ri-arrow-down-s-line'></i></div>"
    );

    $(".sp-footer-heading .sp-heading-res").on("click", function () {
      $(this).children("i").remove();
      var $this = $(this).closest(".footer-top .col-sm-12").find(".sp-footer-dropdown");
      if ($(this).hasClass("sp-active")) {
        $this.slideUp("slow");
        $(this).removeClass("sp-active");
        $(this).children("i").remove();
        $(this).append(
          "<i class='ri-arrow-down-s-line'></i>"
        );
      } else {
        $(".sp-heading-res").removeClass("sp-active");
        $(this).addClass("sp-active");
        $this.slideDown("slow");
        $(".sp-footer-dropdown").not($this).slideUp("slow");
        $(".sp-heading-res").children("i").remove();
        $(".sp-heading-res").append(
          "<i class='ri-arrow-down-s-line'></i>"
        );
        $(this).children("i.ri-arrow-down-s-line").remove();
        $(this).append(
          "<i class='ri-arrow-up-s-line'></i>"
        );
      }
    });

    /*  Search on Category Popup  */
    $('.sp-category-popup-search').on('keyup', function () {
      let searchText = $(this).val().toLowerCase();

      $('.sp-cat-list .list').each(function () {
        let itemText = $(this).text().toLowerCase();

        if (searchText.length >= 1 && itemText.includes(searchText)) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });

    /*  Recent auto popup  */
    setInterval(function () { $(".sp-recent").stop().slideToggle('slow'); }, 10000);
    $(".recent-close").on("click", function () {
      $(".sp-recent").stop().slideToggle('slow');
    });


    function quickView_slide() {
      // Check if <body> has the class 'rtl'
      var isRTL = $("body").hasClass("rtl");

      $(".single-slide").owlCarousel({
        loop: true,
        rtl: isRTL, // Enable RTL only if 'rtl' class is present on body
        margin: 0,
        responsiveClass: true,
        dots: false,
        nav: false,
        pagination: false,
        autoplay: true,
        items: 1,
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
      });
    }

    function weightSelect() {
      /*  Product Weight select JS  */
      $(".sp-pro-variation ul li").on("click", function (e) {
        $(".sp-pro-variation ul li").removeClass("active");
        $(this).addClass("active");
      });
    }

    function quantitySelect() {
      /*  Common Qty Plus Minus Button  */
      var QtyPlusMinus = $(".qty-common");
      QtyPlusMinus.prepend('<div class="dec sp-qtybtn-common">-</div>');
      QtyPlusMinus.append('<div class="inc sp-qtybtn-common">+</div>');

      $("body").on("click", ".sp-qtybtn-common", function () {
        var $qtybutton = $(this);
        var QtyoldValue = $qtybutton.parent().find("input").val();
        if ($qtybutton.text() === "+") {
          var QtynewVal = parseFloat(QtyoldValue) + 1;
        } else {
          if (QtyoldValue > 1) {
            var QtynewVal = parseFloat(QtyoldValue) - 1;
          } else {
            QtynewVal = 1;
          }
        }
        $qtybutton.parent().find("input").val(QtynewVal);
      });
    }

    // Initial setup
    bindEvents();
    calculateTotals();
    cartCounter();
    removeWishlist();
    quickView_slide();
    weightSelect();
  });

  /*  Wishlist product remove JS  */
  $(".remove-product").on("click", function () {
    $(this).parents(".sp-product-box").remove();
    var wishlist_product_count = $(".sp-product-box").length;
    if (wishlist_product_count == 0) {
      $('.sp-wishlist-products').html('<span class="sp-wish-page-msg"><p>Your Wishlist is empty!</p><span>');
    }
  });

  /*  Compare product remove JS  */
  $(".remove-product-compare").on("click", function () {
    $(this).parents(".sp-product-box").remove();
    var wishlist_product_count = $(".sp-product-box").length;
    if (wishlist_product_count == 0) {
      $('.sp-compare-products').html('<span class="sp-compare-page-msg"><p>Your Compare List is empty!</p><span>');
    }
  });

  /*== Cart page Apply Coupan Toggle ==*/
  $(function () {
    $(".sp-cart-coupan").on("click", function () {
      $('.sp-cart-coupan-content').slideToggle('slow');
    });
    $(".sp-checkout-coupan").on("click", function () {
      $('.sp-checkout-coupan-content').slideToggle('slow');
    });
  });

  /*== Remove Product (Cart page) ==*/
  $('.sp-cart-pro-remove a').on("click", function () {
    $(this).parents(".sp-cart-product").remove();
    var cart_page_count = $(".sp-cart-product").length;
    if (cart_page_count == 0) {
      $('.cart_list').html('<p class="sp-cart-page-msg">Your Cart is empty!</p>');
    }
  });

  /*  Product Weight select JS  */
  $(".sp-pro-variation ul li").on("click", function (e) {
    $(".sp-pro-variation ul li").removeClass("active");
    $(this).addClass("active");
  });

  /*  Product Image Zoom  */
  $('.zoom-image-hover').zoom();

  /*  Single product Slider  */
  $('.single-product-cover').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.single-nav-thumb',
  });

  $('.single-nav-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.single-product-cover',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  });

  /* Hero slider */
  $(".sp-hero-slide").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    responsiveClass: true,
  });

  /*  Galary Single Product Slider  */
  $(".sp-single-slider").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      421: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });

  $(".add-more-item").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("sp-active")) {
      $(this).removeClass("sp-active");
    } else {
      $(this).addClass("sp-active");
    }
  });

  /*== Color Hover To Image Change ( Product Card ) ==*/
  var $mnproduct = $('.sp-product-card').find('.sp-opt-swatch');

  function initChangeImg($opt) {
    $opt.each(function () {
      var $this = $(this),
        ecChangeImg = $this.hasClass('sp-change-img');

      $this.on('mouseenter', 'li', function () {
        changeProductImg($(this));
      });

      $this.on('click', 'li', function () {
        changeProductImg($(this));
      });

      function changeProductImg(thisObj) {
        var $this = thisObj;
        var $load = $this.find('a');

        var $proimg = $this.closest('.sp-product-card').find('.sp-pro-img');

        if (!$load.hasClass('loaded')) {
          $proimg.addClass('pro-loading');
        }

        var $loaded = $this.find('a').addClass('loaded');

        $this.addClass('active').siblings().removeClass('active');
        if (ecChangeImg) {
          hoverAddImg($this);
        }
        setTimeout(function () {
          $proimg.removeClass("pro-loading");
        }, 1000);
        return false;
      }

    });
  }

  function hoverAddImg($this) {
    var $optData = $this.find('.sp-opt-clr-img'),
      $opImg = $optData.attr('data-src'),
      $opImgHover = $optData.attr('data-src-hover') || false,
      $optImgWrapper = $this.closest('.sp-product-card').find('.sp-pro-img'),
      $optImgMain = $optImgWrapper.find('.inner-img img.main-img'),
      $optImgMainHover = $optImgWrapper.find('.inner-img img.hover-img');
    if ($opImg.length) {
      $optImgMain.attr('src', $opImg);
    }
    if ($opImg.length) {
      var checkDisable = $optImgMainHover.closest('img.hover-img');
      $optImgMainHover.attr('src', $opImgHover);
      if (checkDisable.hasClass('disable')) {
        checkDisable.removeClass('disable');
      }
    }
    if ($opImgHover === false) {
      $optImgMainHover.closest('img.hover-img').addClass('disable');
    }
  }
  $(window).on('load', function () {
    initChangeImg($mnproduct);
  });
  $(function () {
    initChangeImg($mnproduct);
  });

  /*  Accordians toggle (faq page)  */
  $('.sp-accordion-header').on("click", function () {
    $(this).parent().siblings().children(".sp-accordion-body").slideUp();
    $(this).parent().find(".sp-accordion-body").slideToggle();
  });

  /*  Banners  */
  $(".sp-banner-list").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 500,
    merge: true,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  /*  Category  */
  $(".sp-category-slider").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 8,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      421: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 6,
      },
      1600: {
        items: 8,
      },
    },
  });

  /*  tabs with Slider  */
  $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    // $('.sp-product-slider, .sp-pro-list').hide();
    $('.sp-product-slider, .sp-pro-list').trigger('refresh.owl.carousel');
  });

  /*  Product Slider  */
  $(".sp-product-slider").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  /*  Popular Slider  */
  $(".sp-popular-slider").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      481: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  /*  Collection  */
  $(".sp-collection-slider").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  /*  Vendor Section  */
  $(".sp-pro-list").owlCarousel({
    margin: 15,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 3000,
    items: 5,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      421: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  /*  Testimonial Slider  */
  $(".sp-testimonial-slider").owlCarousel({
    margin: 24,
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 500,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      421: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });

  /*  Team (About Page)  */
  $('.sp-team').owlCarousel({
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      461: {
        items: 2,
        nav: false,
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1400: {
        items: 5
      }
    }
  });

  /*  back-to-top  */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  var progressPath = document.querySelector(".back-to-top-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".back-to-top-wrap").addClass("active-progress");
    } else {
      jQuery(".back-to-top-wrap").removeClass("active-progress");
    }
  });
  jQuery(".back-to-top-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  /*  Copyright years JS  */
  var date = new Date().getFullYear();
  document.getElementById("copyright_year").innerHTML = date;

  /*  Tools Sidebar  */
  $('.sp-tools-sidebar-toggle').on("click", function () {
    $('.sp-tools-sidebar').addClass("open-tools");
    $('.sp-tools-sidebar-overlay').fadeIn();
    $('.sp-tools-sidebar-toggle').hide();

  });
  $('.sp-tools-sidebar-overlay, .close-tools').on("click", function () {
    $('.sp-tools-sidebar').removeClass("open-tools");
    $('.sp-tools-sidebar-overlay').fadeOut();
    $('.sp-tools-sidebar-toggle').fadeIn();
  });

  /*  Dark Light Modes  */
  $(".sp-tools-dark .sp-tools-item").on("click", function () {
    $(".mode-dark").removeClass("active-mode");
    $(this).addClass("active-mode");
  });
  $(".light").on("click", function () {
    $("#add_dark").remove();
  });
  $(".dark").on("click", function () {
    $("head").append(
      '<link rel="stylesheet" href="assets/css/dark.css" id="add_dark">'
    );
  });

  /*  Color show  */
  $(".sp-color li").on("click", function () {
    $("li").removeClass("active-variant");
    $(this).addClass("active-variant");
  });

  $(".color-primary").on("click", function () {
    $("#add_colors").remove();
  });

  $(".color-1").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-1.css" id="add_colors">'
    );
  });
  $(".color-2").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-2.css" id="add_colors">'
    );
  });
  $(".color-3").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-3.css" id="add_colors">'
    );
  });
  $(".color-4").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-4.css" id="add_colors">'
    );
  });
  $(".color-5").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-5.css" id="add_colors">'
    );
  });
  $(".color-6").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-6.css" id="add_colors">'
    );
  });
  $(".color-7").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-7.css" id="add_colors">'
    );
  });
  $(".color-8").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-8.css" id="add_colors">'
    );
  });
  $(".color-9").on("click", function () {
    $("#add_colors").remove();
    $("head").append(
      '<link rel="stylesheet" href="assets/css/color-9.css" id="add_colors">'
    );
  });

  /*  RTL-LTR Modes  */
  // Toggle active class between RTL/LTR buttons
  $(".sp-tools-rtl .sp-tools-item").on("click", function () {
    $(".rtl-mode").removeClass("active-mode");
    $(this).addClass("active-mode");
  });

  // Remove RTL stylesheet on LTR click
  $(".ltr").on("click", function () {
    $("#add_rtl").remove();
    $("body").removeClass("rtl");
  });

  // Add RTL stylesheet on RTL click — only if not already added
  $(".rtl").on("click", function () {
    if ($("#add_rtl").length === 0) {
      $("head").append(
        '<link rel="stylesheet" href="assets/css/rtl.css" id="add_rtl">'
      );
    }
    $("body").addClass("rtl");
  });

  /*  Box design  */
  $('.sp-tools-item.box').on("click", function () {
    var boxModes = $(this).attr("data-box-mode-tool");
    $("#box_design").remove();
    if (boxModes == "default") {
      $("#box_design").remove();
    } else if (boxModes == "box-1") {
      $("head").append('<link id="box_design" href="assets/css/box-1.css" rel="stylesheet">');
    } else if (boxModes == "box-2") {
      $("head").append('<link id="box_design" href="assets/css/box-2.css" rel="stylesheet">');
    }
    $(this).parents(".sp-tools-box").find('.sp-tools-item.box').removeClass("active")
    $(this).addClass("active");
  });
})(jQuery);

