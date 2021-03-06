import Swiper from './swiper-bundle.min';


// eslint-disable-next-line no-unused-vars
const swiper1 = new Swiper('.carousell_slider', {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 93,
  scrollbar: {
    el: '.swiper-scrollbar-carousell',
    hide: false
  },
  navigation: {
    nextEl: '.swcarousell-next',
    prevEl: '.swcarousell-prev'
  },
  pagination: {
    el: '.swcarousell-pagination',
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    998: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    999: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1441: {
      slidesPerView: 4,
      spaceBetween: 93
    }
  }
});

// sliders for product page
const enableSwipers = function() {
  const swiper_thumbs = new Swiper('.swiper_thumbs_js', {
    spaceBetween: 20,
    slidesPerView: 5,
    direction: "vertical",
    freeMode: true,
    watchSlidesVisibility: false,
    watchSlidesProgress: false,
    touchRatio: 0.2,
    slideToClickedSlide: true,
  });
  const swiperr_big = new Swiper('.swiper_big_js', {
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper_big-next',
      prevEl: '.swiper_big-prev',
    },
    thumbs: {
      swiper: swiper_thumbs,
    },
    breakpoints: {
      999: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      1280: {
        slidesPerView: 1,
        centeredSlides: true,
      },
    },
  });
  const suitableItems = new Swiper('.suitable_slider_js', {
    spaceBetween: 32,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.suitable-next',
      prevEl: '.suitable-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      568: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      998: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      999: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1441: {
        slidesPerView: 4,
      }
    },
    onInit: () => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        // eslint-disable-next-line no-magic-numbers
        suitableItems.disable ();
      }, 500);
    }
  });











  const revieewsPhotos = new Swiper('.reviews_userphotos_js', {
    spaceBetween: 32,
    slidesPerView:'auto',
    touchRatio: 0.2,
    freeMode: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.reviews_userphotos-next',
      prevEl: '.reviews_userphotos-prev',
    },
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 19,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 19,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      568: {
        slidesPerView: 3,
        spaceBetween: 19,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      998: {
        slidesPerView: 3,
        spaceBetween: 19,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
      999: {
        slidesPerView: 4,
        spaceBetween: 19,
      },
      1441: {
        slidesPerView: 4,
      }
    },
  });
  const yourchoiceItems = new Swiper('.yourchoice_slider_js', {
    spaceBetween: 32,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.yourchoice-next',
      prevEl: '.yourchoice-prev',
    },
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: false
      },
      998: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      999: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1441: {
        slidesPerView: 4,
      }
    }
  });
}
enableSwipers();


// eslint-disable-next-line no-unused-vars
let news_swiper;

const enableSwiper = function() {
  const news_swiper = new Swiper('.news_slider_js', {
    observer: true,
    observeParents: true,
    parallax:true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.news_slider_next',
      prevEl: '.news_slider_prev'
    },
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      568: {
        slidesPerView: 1,
      },
      569: {
        slidesPerView: 2,
      },
      999: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
    },
    // Fix for https://github.com/nolimits4web/swiper/issues/2218
    onInit: () => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        // eslint-disable-next-line no-magic-numbers
      }, 500);
    }
  });
}

enableSwiper();


const enableMainSwiper = function() {
  const main_swiper = new Swiper('.main_slider_js', {
    observer: true,
    observeParents: true,
    parallax:true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Fix for https://github.com/nolimits4web/swiper/issues/2218
    onInit: () => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        // eslint-disable-next-line no-magic-numbers
      }, 500);
    }
  });
}

enableMainSwiper();

console.log(
  '%c Coded by: frogggggi@gmail.com ????',
  'background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);
// add custom js below


const iconHelp = document.querySelector('.icon-help');
if (iconHelp) {
  iconHelp.addEventListener('click', (e) => {
    e.preventDefault();
    iconHelp.classList.add('active');
    onClickClose(iconHelp);

  });
}
function onClickClose(elem) { // ?????????????? ?? ???????????? ???????????? ????????, ?????? elem - ????????
  function outsideClickListener(event) {
    if (!elem.contains(event.target) && isVisible(elem)) {  // ??????????????????, ?????? ???????? ???? ???? ???????????????? ?? ?????????????? ??????????
      elem.classList.remove('active'); //????????????
      document.removeEventListener('click', outsideClickListener);
    }
  }
  document.addEventListener('click', outsideClickListener)
}
function isVisible(elem) { //?????????????? ???? ???????????????? ????????
  return !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
}










const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('.mob_burger');
const navMob = document.querySelector('.nav_mobile_js');
const mobileFilterBlock = document.querySelector('.catalog_filter_block');
const closeNavMob = document.querySelector('.close_nav_mobile');
const bgNavMob = document.querySelector('.bg_nav_mobile');
const open_catalog_mob = document.querySelector('.open_catalog_mob');
const back_nav = document.querySelector('.back_nav');
const catalog_nav_block = document.querySelector('.catalog_nav_block');

if (burger) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active'); // works correctly
    navMob.classList.toggle('active'); // works correctly
    wrapper.classList.toggle('fixed'); // works correctly
  });
  closeNavMob.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.remove('active'); // works correctly
    if (mobileFilterBlock) {
      mobileFilterBlock.classList.remove('active'); // works correctly
    }
    if (catalog_nav_block) {
      catalog_nav_block.classList.remove('active'); // works correctly
    }
    navMob.classList.remove('active'); // works correctly
    wrapper.classList.remove('fixed'); // works correctly
  });
  bgNavMob.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.remove('active'); // works correctly
    if (mobileFilterBlock) {
      mobileFilterBlock.classList.remove('active'); // works correctly
    }
    if (catalog_nav_block) {
      catalog_nav_block.classList.remove('active'); // works correctly
    }
    navMob.classList.remove('active'); // works correctly
    wrapper.classList.remove('fixed'); // works correctly
  });
}

const mobileFilterBtn = document.querySelector('.catalog_filter');
const wrapperMain = document.querySelector('.wrapper');
if (mobileFilterBtn) {
  mobileFilterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileFilterBtn.classList.toggle('active'); // works correctly
    if (mobileFilterBlock) {
      mobileFilterBlock.classList.toggle('active'); // works correctly
    }
    wrapperMain.classList.toggle('fixed'); // works correctly
  });
}


if (open_catalog_mob) {
  open_catalog_mob.addEventListener('click', (e) => {
    e.preventDefault();
    navMob.classList.remove('active'); // works correctly
    catalog_nav_block.classList.toggle('active'); // works correctly

  });
}
if (back_nav) {
  back_nav.addEventListener('click', (e) => {
    e.preventDefault();
    navMob.classList.add('active'); // works correctly
    catalog_nav_block.classList.remove('active'); // works correctly

  });
}



const mobileViewBtn = document.querySelector('.catalog_view');
const wrapperCatalogMain = document.querySelector('.prodmain_wrapper');
if (mobileViewBtn) {
  mobileViewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (wrapperCatalogMain.classList.contains('catalog_view_tpl_1')) {
      wrapperCatalogMain.classList.add('catalog_view_tpl_2'); // works correctly
      wrapperCatalogMain.classList.remove('catalog_view_tpl_1'); // works correctly
    }else {
      wrapperCatalogMain.classList.add('catalog_view_tpl_1'); // works correctly
      wrapperCatalogMain.classList.remove('catalog_view_tpl_2'); // works correctly
    }
  });
}

const selectallBox = document.querySelector('.cart_selectall');
const selectallBtn = document.querySelector('#selectall');
const selectedItems = document.querySelectorAll('.cart_product .cart_product-check .sidebar_view-checkbox');
if (selectallBox) {
  selectallBox.addEventListener('click', (e) => {
    e.preventDefault();
    if (selectallBtn.checked == true) {
      selectallBtn.checked = false;
    }else {
      selectallBtn.checked = true;
      selectedItems.forEach(function (item) {
        item.checked = true;
      });
    }

  });
}

const sidebar_title = document.querySelectorAll('.catalog_nav_block .sidebar-title');
// eslint-disable-next-line no-plusplus
if (sidebar_title) {
  for (let i = 0; i < sidebar_title.length; i++) {
    sidebar_title[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.closest('.sidebar_group').classList.toggle('active');
    });
  }
}





function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;
}

// eslint-disable-next-line no-unused-vars
function doScrolling(element, duration) {
  const startingY = window.pageYOffset;
  const elementY = getElementY(element);
  // If element is close to page's bottom then window will scroll only to some position above the element.
  const targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;
  const diff = targetY - startingY;
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  const easing = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  let start;

  if (!diff) return;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed miliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    let percent = Math.min(time / duration, 1);
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

// Apply event handlers. Example of firing the scrolling mechanism.
if (document.getElementById('scrollNext')) {
  document
    .getElementById('scrollNext')
    .addEventListener('click', doScrolling.bind(null, '#next_section', 1000));
}

const questlist = document.querySelectorAll('.questions_elem-title');
// eslint-disable-next-line no-plusplus
if (questlist) {
  for (let i = 0; i < questlist.length; i++) {
    questlist[i].addEventListener('click', function (e) {
      e.preventDefault();
      this.closest('.questions_elem').classList.toggle('active');
    });
  }
}



const faqItems = document.querySelectorAll('.faq_name');
const faqlist = document.querySelectorAll('.faq_item');
// eslint-disable-next-line no-plusplus
if(faqItems) {
  for (let i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', function (e) {
      e.preventDefault();
      if (this.parentElement.classList.contains('active')) {
        this.parentElement.classList.remove('active');
      }else {
        faqlist.forEach(function (item) {
          item.classList.remove('active');
        });
        this.parentElement.classList.add('active');
      }
    });
  }
}

//
// const servicesItem = document.querySelectorAll('.services_item');
// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < servicesItem.length; i++) {
//   servicesItem[i].addEventListener('click', function (e) {
//     // e.preventDefault();
//     servicesItem.forEach(function (item) {
//       item.classList.remove('active');
//     });
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//     } else {
//       this.classList.add('active');
//     }
//   });
// }

const numbersWrapper = document.querySelector('.numbers_wrapper');
const numbes = document.querySelectorAll('.number');
if (numbersWrapper) {
  const numbersTop = numbersWrapper.getBoundingClientRect().top - 300;
  window.addEventListener('scroll', function onScroll() {
    if (window.pageYOffset > numbersTop - window.innerHeight / 2) {
      this.removeEventListener('scroll', onScroll);
      for (let i = 0; i < numbes.length; i++) {
        let start = +numbes[i].innerHTML;
        const end = +numbes[i].dataset.max;
        const interval = setInterval(function () {
          numbes[i].innerHTML = ++start;
          if (start === end) {
            clearInterval(interval);
          }
        }, 3);
      }
    }
  });
}

// eslint-disable-next-line no-undef
$(function () {
  // eslint-disable-next-line no-undef
  if ($('.image-popup-vertical-fit')) {
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
        opener(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  }
});



// This button will increment the value
$('[data-quantity="plus"]').click(function(e){
  // Stop acting like a button
  e.preventDefault();
  // Get the field name
  var fieldName = $(this).attr('data-field');
  // Get its current value
  var currentVal = parseInt($('input[name='+fieldName+']').val());
  // If is not undefined
  if (!isNaN(currentVal)) {
    // Increment
    $('input[name='+fieldName+']').val(currentVal + 1);
  } else {
    // Otherwise put a 0 there
    $('input[name='+fieldName+']').val(0);
  }
});
// This button will decrement the value till 0
$('[data-quantity="minus"]').click(function(e) {
  // Stop acting like a button
  e.preventDefault();
  // Get the field name
  var fieldName = $(this).attr('data-field');
  // Get its current value
  var currentVal = parseInt($('input[name='+fieldName+']').val());
  // If it isn't undefined or its greater than 0
  if (!isNaN(currentVal) && currentVal > 0) {
    // Decrement one
    $('input[name='+fieldName+']').val(currentVal - 1);
  } else {
    // Otherwise put a 0 there
    $('input[name='+fieldName+']').val(0);
  }
});

let stopScrolling = false;
window.addEventListener("touchmove", handleTouchMove, {
  passive: false
});
function handleTouchMove(e) {
  if (!stopScrolling) {
    return;
  }
  e.preventDefault();
}
function onTouchStart() {
  stopScrolling = true;
}
function onTouchEnd() {
  stopScrolling = false;
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const minPriceElement = document.querySelector(".price-min_val");
const maxPriceElement = document.querySelector(".price-max_val");
const minPriceElement1 = document.querySelector(".price-min_val1");
const maxPriceElement1 = document.querySelector(".price-max_val1");

if (minPriceElement) {
  minPriceElement.value = numberWithSpaces(minPriceElement.value);
  maxPriceElement.value = numberWithSpaces(maxPriceElement.value);
  minPriceElement1.value = numberWithSpaces(minPriceElement1.value);
  maxPriceElement1.value = numberWithSpaces(maxPriceElement1.value);
}


if (minPriceElement && maxPriceElement) {
  const minPriceElementAttr = minPriceElement.getAttribute("min");
  const maxPriceElementAttr = maxPriceElement.getAttribute("max");
  minPriceElement.setAttribute("max", (maxPriceElementAttr - 100).toString());
  $("#price-slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [minPriceElementAttr, maxPriceElementAttr],
    step: 100,
    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $(".price-min_val").val(numberWithSpaces(ui.values[0]));
      $(".price-max_val").val(numberWithSpaces(ui.values[1]));
    }
  });
}
if (minPriceElement1 && maxPriceElement1) {
  const minPriceElementAttr = minPriceElement1.getAttribute("min");
  const maxPriceElementAttr = maxPriceElement1.getAttribute("max");
  minPriceElement.setAttribute("max", (maxPriceElementAttr - 100).toString());
  $("#price-slider-range1").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [minPriceElementAttr, maxPriceElementAttr],
    step: 100,
    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $(".price-min_val1").val(numberWithSpaces(ui.values[0]));
      $(".price-max_val1").val(numberWithSpaces(ui.values[1]));
    }
  });
}

function razr(){
  var val = parseFloat(this.value.replace(/\D/g,''));
  if (this.value === '') {
    val = 0;
  }
  this.value = numberWithSpaces(val);
}
let valot = document.querySelectorAll('.sidebar_price_input');
if (valot) {
  valot.forEach(function (item) {
    item.addEventListener("input", razr);
})};




const minHeightElement = document.querySelector(".height-min_val");
const maxHeightElement = document.querySelector(".height-max_val");
const minHeightElement1 = document.querySelector(".height-min_val1");
const maxHeightElement1 = document.querySelector(".height-max_val1");

if (minHeightElement) {
  minHeightElement.value = numberWithSpaces(minHeightElement.value);
  maxHeightElement.value = numberWithSpaces(maxHeightElement.value);
  minHeightElement1.value = numberWithSpaces(minHeightElement1.value);
  maxHeightElement1.value = numberWithSpaces(maxHeightElement1.value);
}

if (minHeightElement && maxHeightElement) {
  const minHeightElementAttr = minHeightElement.getAttribute("min");
  const maxHeightElementAttr = maxHeightElement.getAttribute("max");
  minHeightElement.setAttribute("max", (maxHeightElementAttr - 100).toString());
  $("#height-slider-range").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [minHeightElementAttr, maxHeightElementAttr],
    step: 100,
    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $(".height-min_val").val(numberWithSpaces(ui.values[0]));
      $(".height-max_val").val(numberWithSpaces(ui.values[1]));
    }
  });
}
if (minHeightElement1 && maxHeightElement1) {
  const minHeightElementAttr = minHeightElement1.getAttribute("min");
  const maxHeightElementAttr = maxHeightElement1.getAttribute("max");
  minHeightElement.setAttribute("max", (maxHeightElementAttr - 100).toString());
  $("#height-slider-range1").slider({
    range: true,
    orientation: "horizontal",
    min: 0,
    max: 10000,
    values: [minHeightElementAttr, maxHeightElementAttr],
    step: 100,
    slide: function (event, ui) {
      if (ui.values[0] == ui.values[1]) {
        return false;
      }
      $(".height-min_val1").val(numberWithSpaces(ui.values[0]));
      $(".height-max_val1").val(numberWithSpaces(ui.values[1]));
    }
  });
}

const addressAdr = document.querySelector('#delivery-addr');
const addressStr = document.querySelector('#delivery-street');
const addressHous = document.querySelector('#delivery-houset');
const addressAppar = document.querySelector('#address_appartset');

// const paymentType = document.getElementsByName('payment');


const addressPunkt = document.querySelector('#address_punkt');
const addressStreer = document.querySelector('#address_street');
const addressHouse = document.querySelector('#address_house');
const addressAppa = document.querySelector('#address_appart');
const addressPayments = document.querySelector('#address_payments');
const paymentType = document.querySelectorAll('.payment_type_js');

if (addressPunkt) {
  addressPunkt.addEventListener("change", evt => {
    addressAdr.innerHTML = addressPunkt.value;
  });
}
if (addressStreer) {
  addressStreer.addEventListener("change", evt => {
    addressStr.innerHTML = addressStreer.value;
  });
}
if (addressHouse) {
  addressHouse.addEventListener("change", evt => {
    addressHous.innerHTML = addressHouse.value;
  });
}
if (addressAppa) {
  addressAppa.addEventListener("change", evt => {
    addressAppar.innerHTML = addressAppa.value;
  });
}

if (paymentType) {
  paymentType.forEach(function (item) {
    item.addEventListener("change", evt => {
      console.log(1);
      addressPayments.innerHTML = item.value;
    });
  });
}



// TABS
var $tabs = function (target) {
  var
      _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
        var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
        // ???????? ?????????????????? ?????????????? ?????????? ????????????????, ???? ?????????????????? ????????????
        if (tabsLinkTarget === tabsLinkActive) {
          return;
        }
        // ?????????????? ???????????? ?? ?????????????? ???????????????? ??????????????????
        if (tabsLinkActive !== null) {
          tabsLinkActive.classList.remove('tabs__link_active');
        }
        if (tabsPaneShow !== null) {
          tabsPaneShow.classList.remove('tabs__pane_show');
        }
        // ?????????????????? ???????????? ?? ?????????????????? (?? ?????????????????? ???? ?????????????????? ??????????????)
        tabsLinkTarget.classList.add('tabs__link_active');
        tabsPaneTarget.classList.add('tabs__pane_show');
        document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
        var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
        if (tabsLinks.length > 0) {
          if (tabsLinkIndex > tabsLinks.length) {
            tabsLinkIndex = tabsLinks.length;
          } else if (tabsLinkIndex < 1) {
            tabsLinkIndex = 1;
          }
          _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
      };

  _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

  if (_elemTabs) {
    _elemTabs.addEventListener('click', function(e) {
      var target = e.target.closest('.tabs__link');
      // ?????????????????? ???????????????????? ??????????????, ???????? ???????????????? ???? ???? ????????????
      if (!target) {
        return;
      }
      // ???????????????? ?????????????????????? ????????????????
      e.preventDefault();
      _showTab(target);
    });
  }


  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    }
  }

};

// E?????? ?????????????????? ???????????? ?????????????? $tabs ?????????????????? ?? ????????????????????, ???? ?????????? ???????????????????????? ????????????, ?????????????? ?????? ????????????????????????.
// https://itchief.ru/javascript/tabs
// ????????????????:
// var tabs1 = $tabs('.tabs');
// // ???????????????????? ?????????????????????????? ???? 2 ?????????????? (2 ??? ?????????? ??????????????, ???? ?????????????? ?????????? ??????????????)
// tabs1.switchToTab(2);

$tabs('.tabs');
