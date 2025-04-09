/**
 * headerSticky
 * headerChangeBg
 * retinaLogos
 * changeValue
 * chooseState
 * fillDate
 * action_click
 * selectPayment
 * totalPriceVariant
 * tabs
 * btnCloseCartShop
 * footer
 * topbar
 * preloader
 **/

(function ($) {
  "use strict";

  // headerSticky
  var headerSticky = function () {
    let didScroll;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = 0;
    let section = null;
    let rect = null;

    if ($("header").length) {
      navbarHeight = $("header").outerHeight();
      section = $("header").get(0);
      rect = section ? section.getBoundingClientRect() : null;
    }

    $(window).scroll(function (event) {
      if (!section || !rect) return;

      if ($(this).scrollTop() >= navbarHeight + rect.top) {
        didScroll = true;
        $("header").addClass("scrollHeader");
      } else {
        // Αντικατάσταση του setInterval με function
        setTimeout(() => {
          if ($(window).scrollTop() <= rect.top) {
            $("header").css("top", "unset");
            $("header").removeClass("scrollHeader");
          }
        }, 250);
      }
    });

    // Αντικατάσταση του setInterval με function
    setInterval(() => {
      if (didScroll) {
        let st = $(window).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
          return;
        }
        if (st > lastScrollTop && st > navbarHeight) {
          $("header").css("top", `-${navbarHeight}px`);
        } else {
          if (st + $(window).height() < $(document).height()) {
            $("header").css("top", "0px");
          }
        }
        lastScrollTop = st;
        didScroll = false;
      }
    }, 250);
  };

  // headerChangeBg
  var headerChangeBg = function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $("header.header-style-absolute").addClass("header-bg");
      } else {
        $("header.header-style-absolute").removeClass("header-bg");
      }
    });
  };

  // retinaLogos
  var retinaLogos = function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if (retina) {
      if ($("#logo_header").length) {
        var tfheader = $("#logo_header").data("retina");
        $("#logo_header").attr({ src: tfheader, width: 192, height: 40 });
      }
      if ($("#logo_footer").length) {
        var tffooter = $("#logo_footer").data("retina");
        $("#logo_footer").attr({ src: tffooter, width: 192, height: 40 });
      }
    }
  };

  // changeValue
  var changeValue = function () {
    if ($(".tf-dropdown-sort").length > 0) {
      $(".select-item").click(function (event) {
        $(this)
          .closest(".tf-dropdown-sort")
          .find(".text-sort-value")
          .text($(this).find(".text-value-item").text());
        $(this)
          .closest(".dropdown-menu")
          .find(".select-item.active")
          .removeClass("active");
        $(this).addClass("active");
      });
    }
  };

  // chooseState
  var chooseState = function () {
    if ($(".select-custom").length > 0) {
      $("#country").on("change", function () {
        const provincesData = $(this).find(":selected").data("provinces");
        const $stateSelect = $("#state");
        $stateSelect
          .empty()
          .append('<option value="">Choose State/Province</option>');
        if (provincesData && provincesData.length > 0) {
          const provinces = JSON.parse(provincesData.replace(/'/g, '"'));
          provinces.forEach(function (province) {
            $stateSelect.append(
              `<option value="${province[0]}">${province[1]}</option>`
            );
          });
        }
      });
    }
  };

  // fillDate
  var fillDate = function () {
    if ($("#dateInput").length) {
      $("#dateInput").on("input", function () {
        let value = $(this).val();
        value = value.replace(/\D/g, "");
        if (value.length > 2) {
          value = value.slice(0, 2) + "/" + value.slice(2);
        }
        const month = parseInt(value.slice(0, 2));
        if (month > 12) {
          value = "12" + value.slice(2);
        } else if (month === 0) {
          value = "01" + value.slice(2);
        }
        $(this).val(value);
      });
      $("#dateInput").on("blur", function () {
        let value = $(this).val();
        if (value.length === 4 && value.includes("/")) {
          value = "0" + value;
        }
        if (value.length === 1) {
          value = "0" + value + "/";
        }
        if (value.length === 3 && !value.includes("/")) {
          value = value.slice(0, 2) + "/" + value.slice(2);
        }
        $(this).val(value);
      });
    }
  };

  // action_click
  var action_click = function () {
    if ($(".tf-action-btns").length) {
      $(".tf-action-btns").on("click", function () {
        $(this).toggleClass("active");
      });
    }
  };

  // selectPayment
  var selectPayment = function () {
    if ($(".check-payment").length) {
      $(".check-payment").on("click", function () {
        var $this = $(this);
        var $accordionItem = $this.closest(".payment-option");
        var index = $accordionItem.index();
        $(".payment-option").removeClass("active");
        $accordionItem.addClass("active");
        $(".accordion-collapse").each(function (i) {
          var collapse = new bootstrap.Collapse(this, { toggle: false });
          if (i === index) {
            collapse.show();
          } else {
            collapse.hide();
          }
        });
      });
      if ($("#creditCard-1").length) {
        $("#creditCard-1").prop("checked", true);
        $(".payment-option").first().addClass("active");
      }
    }
  };

  // totalPriceVariant
  var totalPriceVariant = function () {
    if ($(".price-on-sale").length && $(".quantity-product").length) {
      var basePrice =
        parseFloat($(".price-on-sale").data("base-price")) ||
        parseFloat($(".price-on-sale").text().replace("$", ""));
      var quantityInput = $(".quantity-product");

      $(".color-btn, .size-btn").on("click", function () {
        var newPrice = parseFloat($(this).data("price")) || basePrice;
        quantityInput.val(1);
        $(".price-on-sale").text(
          "$" + newPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        var totalPrice = newPrice;
        $(".total-price").text(
          "$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      });

      $(".btn-decrease").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest(".wg-quantity").find("input");
        var value = parseInt($input.val());

        if (value > 1) {
          value = value - 1;
        }
        $input.val(value);
        updateTotalPrice();
      });

      $(".btn-increase").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest(".wg-quantity").find("input");
        var value = parseInt($input.val());

        if (value > 0) {
          value = value + 1;
        }
        $input.val(value);
        updateTotalPrice();
      });

      function updateTotalPrice() {
        var currentPrice = parseFloat($(".price-on-sale").text().replace("$", ""));
        var quantity = parseInt(quantityInput.val());
        var totalPrice = currentPrice * quantity;
        $(".total-price").text(
          "$" + totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }
  };

  // tabs
  var tabs = function () {
    if ($(".widget-tabs").length) {
      $(".widget-tabs").each(function () {
        $(this).find(".widget-content-tab").children().hide();
        $(this).find(".widget-content-tab").children(".active").show();
        $(this)
          .find(".widget-menu-tab")
          .children(".item-title")
          .on("click", function () {
            var liActive = $(this).index();
            var contentActive = $(this)
              .siblings()
              .removeClass("active")
              .parents(".widget-tabs")
              .find(".widget-content-tab")
              .children()
              .eq(liActive);
            contentActive.addClass("active").fadeIn("slow");
            contentActive.siblings().removeClass("active");
            $(this)
              .addClass("active")
              .parents(".widget-tabs")
              .find(".widget-content-tab")
              .children()
              .eq(liActive)
              .siblings()
              .hide();
          });
      });
    }
  };

  // btnCloseCartShop
  var btnCloseCartShop = function () {
    if ($(".cart-item-remove .icon").length) {
      $(".cart-item-remove .icon").on("click", function () {
        $(this).closest(".shop-cart-inner >li").hide();
      });
    }
  };

  // footer
  var footer = function () {
    function checkScreenSize() {
      if (window.matchMedia("(max-width: 767px)").matches) {
        $(".tf-collapse-content").css("display", "none");
      } else {
        $(".footer-menu-list").siblings().removeClass("open");
        $(".tf-collapse-content").css("display", "unset");
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    var args = { duration: 250 };
    if ($(".title-mobile").length) {
      $(".title-mobile").on("click", function () {
        $(this).parent(".footer-col-block").toggleClass("open");
        if (!$(this).parent(".footer-col-block").is(".open")) {
          $(this).next().slideUp(args);
        } else {
          $(this).next().slideDown(args);
        }
      });
    }
  };

  // topbar
  var topbar = function () {
    if ($(".btn-show-top").length) {
      $(".btn-show-top").on("click", function () {
        $(this).closest(".tf-top-bar").toggleClass("active");
      });
    }
  };

  // preloader
  var preloader = function () {
    if ($("#loading").length) {
      $("#loading").fadeOut("slow", function () {
        $(this).remove();
      });
    }
  };

  // Dom Ready
  $(document).ready(function () {
    try {
      headerSticky();
      headerChangeBg();
      retinaLogos();
      changeValue();
      chooseState();
      fillDate();
      action_click();
      selectPayment();
      totalPriceVariant();
      tabs();
      btnCloseCartShop();
      footer();
      topbar();
      preloader();
    } catch (error) {
      console.error("Error in main.js:", error);
    }
  });
})(jQuery);