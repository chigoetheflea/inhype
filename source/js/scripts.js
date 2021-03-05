"use strict";

const TITLE_SLIDER_BUTTON_ACTIVE_CLASS = `title-slider__button--active`;
const MENU_ACTIVE_CLASS = `navigation--active`;
const MODAL_ACTIVE_CLASS = `modal--active`;
const LABEL_ACTIVE_CLASS = `form__label--active`;
const TAB_CONTENT_ACTIVE_CLASS = `tabs__content--active`;
const TAB_BUTTON_ACTIVE_CLASS = `tabs__button--active`;
const OWL_SPEED = 750;
const FORM_RESULT_DELAY = 3000;

const SCROLL_OFFSET = 100;
const STICKY_MIN_WIDTH = 1150;
const STICKY_OFFSET = 100;

jQuery(document).ready(function($) {
  $(`body`).removeClass(`no-js`);

  $(window).on(`load`, () => {
    $(`.preloader`).fadeOut(300);
  });

  const setSliderData = (slider, evt) => {
    const slides = slider.find(`.owl-carousel`);
    const sliderNext = slider.find(`.slider-navigation__nav--next`);
    const sliderPrev = slider.find(`.slider-navigation__nav--prev`);

    sliderNext.on(`click`, () => {
      slides.trigger(`next.owl.carousel`);
    });

    sliderPrev.on(`click`, () => {
      slides.trigger(`prev.owl.carousel`);
    });
  };

  /* promo slider */

  const promoSliderWrapper = $(`.js-promo-slider`);
  const promoSlider = promoSliderWrapper.find(`.owl-carousel`);

  promoSlider.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: `.js-promo-slider-dots`,
    autoplay: true,
		autoplayTimeOut: 3000,
		autoplayHoverPause: true,
		autoplaySpeed: OWL_SPEED,
    navSpeed: OWL_SPEED,
    dotsSpeed: OWL_SPEED,
    items: 1,
    onInitialized: (evt) => {
      setSliderData(promoSliderWrapper, evt);
    }
  });

  /* promo slider */

  /* cases slider */

  const casesSliderWrapper = $(`.js-cases-slider`);
  const casesSlider = casesSliderWrapper.find(`.owl-carousel`);

  casesSlider.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: `.js-cases-slider-dots`,
    autoplay: true,
		autoplayTimeOut: 3000,
		autoplayHoverPause: true,
		autoplaySpeed: OWL_SPEED,
    navSpeed: OWL_SPEED,
    dotsSpeed: OWL_SPEED,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2,
        dots: false
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
    onInitialized: (evt) => {
      setSliderData(casesSliderWrapper, evt);
    }
  });

  /* cases slider */

  /* stuff slider */

  const stuffSliderWrapper = $(`.js-stuff-slider`);
  const stuffSlider = stuffSliderWrapper.find(`.owl-carousel`);

  stuffSlider.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: `.js-stuff-slider-dots`,
    autoplay: true,
		autoplayTimeOut: 3000,
		autoplayHoverPause: true,
    autoplaySpeed: OWL_SPEED,
    navSpeed: OWL_SPEED,
    dotsSpeed: OWL_SPEED,
    items: 1,
    onInitialized: (evt) => {
      setSliderData(stuffSliderWrapper, evt);
    }
  });

  /* stuff slider */

  /* reviews slider */

  const reviewsSliderWrapper = $(`.js-reviews-slider`);
  const reviewsSlider = reviewsSliderWrapper.find(`.owl-carousel`);

  reviewsSlider.owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: `.js-reviews-slider-dots`,
    autoplay: true,
		autoplayTimeOut: 3000,
		autoplayHoverPause: true,
    autoplaySpeed: OWL_SPEED,
    navSpeed: OWL_SPEED,
    dotsSpeed: OWL_SPEED,
    items: 1,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      650: {
        autoHeight: false
      }
    },
    onInitialized: (evt) => {
      setSliderData(reviewsSliderWrapper, evt);
    }
  });

  /* reviews slider */

  /* map */

  const localMapMarker = {
    coords: [55.732771, 37.619150],
    url: `https://inhype-polyanka.ru/wp-content/themes/inhype/img/icon_marker.svg`
  };

  const map = $(`.js-map`);

  if (map.length > 0) {
    ymaps.ready(function () {
      const mZoom = 17;
      const myMap = new ymaps.Map(
        `map`,
        {
          center: localMapMarker.coords,
          zoom: mZoom
        },
        {
          searchControlProvider: `yandex#search`
        }
      ),
      marker = new ymaps.Placemark(localMapMarker.coords,
        {
          hintContent: `INHYPE`,
          balloonContent: `Cамые необходимые бьюти-услуги безупречного качества`
        },
        {
          iconLayout: `default#image`,
          iconImageHref: localMapMarker.url,
          iconImageSize: [198, 65],
          iconImageOffset: [-99, -65 ]
        }
      );
      myMap.behaviors.disable(`scrollZoom`);
      myMap.geoObjects.add(marker);
    });
  }

  /* map */

  /* accordeon */

  const faq = $(`.js-accordeon`);
  const faqItems = faq.find(`.faq__item`);
  const faqContent = faq.find(`.faq__text`);

  faqItems.filter(`.faq__item--active`).find(`.faq__text`).show();

  faqItems.each(function() {
    const that = $(this);
    const faqButton = that.find(`.faq__button`);
    const activeContent = that.find(`.faq__text`);

    faqButton.on(`click`, function() {
      const isActive = $(that).hasClass(`faq__item--active`);

      faqItems.removeClass(`faq__item--active`);
      faqContent.hide();

      if(!isActive) {
        that.addClass(`faq__item--active`);

        activeContent.fadeIn(300);
      }
    });
  });

  /* accordeon */

  /* menu */

  const menu = $(`.js-navigation`);
  const menuCloseButton = menu.find(`.js-menu-close`);
  const menuOpenButton = $(`.js-menu-open`);

  menuCloseButton.on(`click`, () => {
    menu.removeClass(MENU_ACTIVE_CLASS);
  });

  menuOpenButton.on(`click`, () => {
    menu.addClass(MENU_ACTIVE_CLASS);
  });

  /* menu */

  /* scroll */

  const scrollLinks = $(`.js-scroll`);

  scrollLinks.each(function() {
    $(this).on(`click`, function(evt) {
      evt.preventDefault();

      const that = $(evt.target);
      const target = $(that.attr(`href`));

      if (menu.hasClass(MENU_ACTIVE_CLASS)) {
        menu.removeClass(MENU_ACTIVE_CLASS);
      }

      if (target.length) {
        $(`body, html`).animate({scrollTop: $(target).offset().top - SCROLL_OFFSET}, 300);
      }
    });
  });

  /* scroll */

  /* form */

  const formInputs = $(`form input, form textarea`);

  formInputs.each(function() {
    const that = $(this);
    const inputLabel = $(`[for=${that.attr(`id`)}]`);

    that.on({
      [`focusin`]: () => {
        inputLabel.addClass(LABEL_ACTIVE_CLASS);
      },
      [`focusout`]: () => {
        if (!that.val()) {
          inputLabel.removeClass(LABEL_ACTIVE_CLASS);
        }
      }
    });
  });

  const toggleSubmitDisabling = (form, isDisable) => {
    if(isDisable) {
      $(form).find(`.js-submit-button`).attr(`disabled`, `disabled`);
    } else {
      $(form).find(`.js-submit-button`).removeAttr(`disabled`);
    }
  };

  const showMailResult = (selector) => {
    const form = $(selector);
    const result = form.find(`.form__result`);
    result.find(`span`).textContent = ``;

    result.addClass(`form__result--active`);

    if(!result.children(`span`).attr(`data-error`)) {
      setTimeout(() => {
        result.removeClass(`form__result--active`);

        form.find(`input,textarea`).not(`[type=hidden]`).val(``).removeClass(`error valid`);
        $(`.modal`).removeClass(MODAL_ACTIVE_CLASS);

        toggleSubmitDisabling(selector, false);
      }, FORM_RESULT_DELAY);
    } else {
      toggleSubmitDisabling(selector, false);
    }
  };

  const mailOptions = {
    url: ``,
    type: `post`,
    target: `#question_result`,
    success: () => {showMailResult(`#question_form`)},
    error: () => {toggleSubmitDisabling(`#question_form`, false)}
  };

  $("#question_form").validate({
		rules:{
			question_name: {
				required: true,
				minlength: 2
      },
      question_phone: {
				required: true,
				phoneGLOBAL: true
      }
		},
		messages: {
			question_name: {
				required: ``,
				minlength: ``
      },
      question_phone: {
				required: ``,
				phoneGLOBAL: ``
      }
		},
		submitHandler: (form) => {
      toggleSubmitDisabling(form, true);

      jQuery(form).ajaxSubmit(mailOptions);

      return false;
		}
  });

  /* form */

  /* modal */

  const modalButtons = $(`.js-modal`);
  const modals = $(`.modal`);

  modalButtons.each(function() {
    const that = $(this);

    that.on(`click`, () => {
      const choosenMaster = that.attr(`data-master`);
      const modal = $(that.attr(`data-target`));
      const modalClose = modal.find(`.js-close`);
      const modalFormInputs = modal.find(`form input, form textarea`);
      const modalSelect = modal.find(`select`);

      modalClose.on(`click`, () => {
        modal.removeClass(MODAL_ACTIVE_CLASS);
      });

      modalFormInputs.each(function() {
        $(this).trigger(`focusin`);
        $(this).trigger(`focusout`);
      });

      if (choosenMaster && modalSelect) {
        modalSelect.find(`option[value="${choosenMaster}"]`).prop(`selected`, true);
      }

      modals.removeClass(MODAL_ACTIVE_CLASS);
      modal.addClass(MODAL_ACTIVE_CLASS);
    });
  });

  /* modal */

  /* tabs */

  const tabs = $(`.js-tabs`);

  const setTabsHeight = (tabsWrapper, activeTab) => {
    const activeTabHeight = activeTab.height();

    tabsWrapper.height(activeTabHeight);
  };

  tabs.each(function() {
    const that = $(this);
    const tabsContent = that.find(`.tabs__content`);
    const tabsButtons = that.find(`.tabs__button`);
    const tabsWrapper = that.find(`.tabs__content-wrapper`);

    const activeContent = $(tabs.find(`.${TAB_BUTTON_ACTIVE_CLASS}`).attr(`data-tab`));

    setTabsHeight(tabsWrapper, activeContent);

    activeContent.addClass(TAB_CONTENT_ACTIVE_CLASS);

    that.on(`click`, (evt) => {
      const clickTarget = $(evt.target);
      const isTabButton = clickTarget.is(`.tabs__button`);

      if (isTabButton) {
        tabsContent.removeClass(TAB_CONTENT_ACTIVE_CLASS);
        tabsButtons.removeClass(TAB_BUTTON_ACTIVE_CLASS);

        const targetTabContent = $(clickTarget.attr(`data-tab`));

        setTabsHeight(tabsWrapper, targetTabContent);

        targetTabContent.addClass(TAB_CONTENT_ACTIVE_CLASS);
        clickTarget.addClass(TAB_BUTTON_ACTIVE_CLASS);
      }
    });
  });

  /* tabs */
});
