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

// document.addEventListener('DOMContentLoaded', () => {
//   const width = window.innerWidth
//   if (width < 1024){
//     const slider = new Swiper()
//   }
// })
// const breakpoint = window.matchMedia( '(min-width:31.25em)' );
// const more_btn = document.querySelector('.swiper_btn_more');
// const breakpointChecker = function() {
//   // if larger viewport and multi-row layout needed
//   if ( breakpoint.matches === false ) {
//     // clean up old instances and inline styles when available
//     if ( news_swiper !== undefined ) news_swiper.destroy( true, true );
//
//       if (more_btn) {
//         more_btn.classList.toggle('active');
//       }
//     return;
//     // else if a small viewport and single column layout needed
//   } else if ( breakpoint.matches === true ) {
//     // fire small viewport version of swiper
//     return enableSwiper();
//   }
// };

// let step = 3; // Размер этих самых порций. Чтобы легко можно было поменять.
// let prod = document.querySelectorAll('.products');
//
// for( let i = 0; i < prod.length; i++ ){
//   let product = prod[i];
//   let li = product.querySelectorAll('li');
//   for( let j = 0; j < step; j++ ){//Для начала перебираем - показываем первые step пунктов.
//     // Но только если такие существуют
//     if( li[j] ){ li[j].classList.add('visi') }
//   }
//
//   let more = product.querySelector('.more');
//   more.addEventListener('click', function(){
//     let visi = product.querySelectorAll('.visi');
//     let next = visi[visi.length-1].nextElementSibling;
//     // Достали следующий элемент ПОСЛЕДНЕГО элемента visi.
//     //Предполагается, что никогда не будет добавлено полностью пустых ul.
//     let it = 0;
//     while( it < step ){
//       if( next ){
//         next.classList.add('visi');
//         next = next.nextElementSibling;
//         it++;
//       } else {
//         break; // Если следующего элемента не оказалось - выключаем цикл.
//       }
//     }
//   });
// }


// keep an eye on viewport size changes
// breakpoint.addListener(breakpointChecker);

// kickstart
// breakpointChecker();


// console.log(
//   '%c Hello from /scripts/script.js ',
//   'background: lemonchiffon; border: 1px solid #fff'
// );
console.log(
  '%c Coded by: frogggggi@gmail.com 💠',
  'background: lavenderblush; border: 1px solid #000; padding: 4px; padding-top: 10px; padding-bottom: 8px;'
);
// add custom js below


const wrapper = document.querySelector('.wrapper');
const burger = document.querySelector('.mob_burger');
const navMob = document.querySelector('.nav_mobile_js');
const mobileFilterBlock = document.querySelector('.catalog_filter_block');
const closeNavMob = document.querySelector('.close_nav_mobile');
const bgNavMob = document.querySelector('.bg_nav_mobile');
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
    mobileFilterBlock.classList.remove('active'); // works correctly
    navMob.classList.remove('active'); // works correctly
    wrapper.classList.remove('fixed'); // works correctly
  });
  bgNavMob.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.remove('active'); // works correctly
    mobileFilterBlock.classList.remove('active'); // works correctly
    navMob.classList.remove('active'); // works correctly
    wrapper.classList.remove('fixed'); // works correctly
  });
}

const mobileFilterBtn = document.querySelector('.catalog_filter');
const wrapperMain = document.querySelector('.wrapper');
mobileFilterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileFilterBtn.classList.toggle('active'); // works correctly
  mobileFilterBlock.classList.toggle('active'); // works correctly
  wrapperMain.classList.toggle('fixed'); // works correctly
});



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

// document
//   .getElementById('scrollTop')
//   .addEventListener('click', doScrolling.bind(null, '#top', 1500));
// document
//   .getElementById('scrollBot')
//   .addEventListener('click', doScrolling.bind(null, '#bottom', 4000));

const questlist = document.querySelectorAll('.questions_elem-title');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < questlist.length; i++) {
  questlist[i].addEventListener('click', function (e) {
    e.preventDefault();
    this.closest('.questions_elem').classList.toggle('active');
  });
}

const faqlist = document.querySelectorAll('.faq_item');
// eslint-disable-next-line no-plusplus
if(faqlist) {
  for (let i = 0; i < faqlist.length; i++) {
    faqlist[i].addEventListener('click', function (e) {
      e.preventDefault();
      faqlist.forEach(function (item) {
        item.classList.remove('active');
      });

      this.classList.toggle('active');
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


const minPriceElement = document.getElementById("price-min_val");
const maxPriceElement = document.getElementById("price-max_val");

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
      $("#price-min_val").val(ui.values[0]);
      $("#price-max_val").val(ui.values[1]);
    }
  });
}

const minHeightElement = document.getElementById("height-min_val");
const maxHeightElement = document.getElementById("height-max_val");

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
      $("#height-min_val").val(ui.values[0]);
      $("#height-max_val").val(ui.values[1]);
    }
  });
}

