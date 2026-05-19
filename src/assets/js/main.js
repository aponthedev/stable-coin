(function ($) {
  'use strict';

  //============================ Scroll To Top Js Start ========================
  var btn = $('.scroll-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      '300'
    );
  });
  //============================ Scroll To Top Js End ========================

  // ========================= Brand Swiper Js Start =====================
  if ($('.brand__slider').length) {
    const brandSwiper = new Swiper('.brand__slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        424: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        576: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 50,
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 60,
          slidesPerView: 4,
        },
        1499: {
          spaceBetween: 60,
          slidesPerView: 8,
        },
      },
    });
  }
  // ========================= Brand Swiper Js End =====================

  // ========================= Header Sticky Js Start ==============
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('.header__area').addClass('fixed-header');
    } else {
      $('.header__area').removeClass('fixed-header');
    }
  });
  // ========================= Header Sticky Js End===================

  //============================ Offcanvas Js Start ============================
  $(document).on('click', '.menu__open', function () {
    $('.offcanvas__area, .overlay').addClass('active');
  });

  $(document).on('click', '.menu__close, .overlay', function () {
    $('.offcanvas__area, .overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================

  // ========================== Add Attribute For Bg Image Js Start =====================
  $('.bg--img').css('background-image', function () {
    var bg = 'url(' + $(this).data('background-image') + ')';
    return bg;
  });
  // ========================== Add Attribute For Bg Image Js End =====================

  // ========================= Odometer Js Start ===================
  if ($('.odometer').length > 0) {
    $(window).on('scroll', function () {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  // ========================= Odometer Js End ===================

  // ========================= Magnific Popup Js Start ===================
  $('.promo__video__play').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================

  // ========================= Testimonial Swiper Js Start =====================
  const swiperTestimonials = new Swiper('.slider__class', {
    loop: true,
    speed: 1000,
    spaceBeteen: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        scale: ['0.9'],
        opacity: 0,
      },
      next: {
        scale: ['0.9'],
        opacity: 0,
      },
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // ========================= Testimonial Swiper Js End =====================

  // ========================= Select2 Js Start =====================
  if ($('.select2').length) {
    $('.select2').select2();
  }
  // ========================= Select2 Js End =====================

  // ========================= Show Hide Password Js Start ===================
  if ($('.password-show-hide').length) {
    $('.password-show-hide').each(function () {
      $(this).on('click', function () {
        let inputField = $(this).closest('.password__field').find('input');
        let openEye = $(this).find('.open-eye-icon');
        let closeEye = $(this).find('.close-eye-icon');

        if (inputField.attr('type') === 'password') {
          inputField.attr('type', 'text');
          openEye.show();
          closeEye.hide();
        } else {
          inputField.attr('type', 'password');
          openEye.hide();
          closeEye.show();
        }
      });
    });
  }
  // ========================= Show Hide Password Js End ===================

  //============================ Filter Js Start ============================
  $(document).on('click', '.filter__btn', function () {
    $('.filter__main, .overlay').addClass('active');
  });

  $(document).on('click', '.filter__close, .overlay', function () {
    $('.filter__main, .overlay').removeClass('active');
  });

  //============================ Filter Js End ==============================

  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true,
  });

  sr.reveal('.class__name', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  });
  // ========================= Scroll Reveal Js End ===================

  // ========================== Table Data Label Js Start =====================
  Array.from(document.querySelectorAll('table')).forEach((table) => {
    let heading = table.querySelectorAll('thead tr th');
    Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
      let columArray = Array.from(row.querySelectorAll('td'));
      if (columArray.length <= 1) return;
      columArray.forEach((colum, i) => {
        colum.setAttribute('data-label', heading[i].innerText);
      });
    });
  });
  // ========================== Table Data Label Js End =====================

  // ========================== Label Required Js Start =====================
  $.each($('input, select, textarea'), function (i, element) {
    if (element.hasAttribute('required')) {
      $(element)
        .closest('.form-group')
        .find('label')
        .first()
        .addClass('required');
    }
  });
  // ========================== Label Required Js End =====================

  // ========================= Preloader & ScrollTrigger Js Start =====================
  $(window).on('load', function () {
    // 1. Fade out preloader
    $('.preloader').fadeOut(500, function() {
      // 1.5 Hero Banner GSAP Animation (Premium Apple/Fasset style)
      if ($('.banner__thumb').length && typeof gsap !== 'undefined') {
        const tl = gsap.timeline();

        // Initial setup
        gsap.set('.banner__thumb-left', { x: 50, y: 30, scale: 0.8, opacity: 0 });
        gsap.set('.banner__thumb-right', { x: -50, y: 30, scale: 0.8, opacity: 0 });
        gsap.set('.banner__thumb-center', { y: 100, opacity: 0 });

        // Entrance animation
        tl.to('.banner__thumb-center', {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        })
        .to('.banner__thumb-left', {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.2)'
        }, '-=0.6')
        .to('.banner__thumb-right', {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.2)'
        }, '-=0.8');

        // Continuous Hovering effect
        tl.add(() => {
          gsap.to('.banner__thumb-center', {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
          gsap.to('.banner__thumb-left', {
            y: -10,
            rotation: -2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.5
          });
          gsap.to('.banner__thumb-right', {
            y: -12,
            rotation: 2,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1
          });
        });

        // 3D Mouse Parallax
        $('.banner').on('mousemove', function(e) {
          const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
          const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

          gsap.to('.banner__thumb-center', {
            x: xPos * 1.5,
            y: yPos * 1.5,
            rotationY: xPos * 1.5,
            rotationX: -yPos * 1.5,
            duration: 1,
            ease: 'power2.out'
          });
          gsap.to('.banner__thumb-left', {
            x: xPos * -1,
            y: yPos * -1,
            rotationY: xPos,
            duration: 1.5,
            ease: 'power2.out'
          });
          gsap.to('.banner__thumb-right', {
            x: xPos * 2,
            y: yPos * 2,
            rotationY: xPos * -1,
            duration: 1.2,
            ease: 'power2.out'
          });
        });
      }

      // 1.6 Continuous floating animation for Feature Card Images
      if ($('.features__image img').length && typeof gsap !== 'undefined') {
        gsap.utils.toArray('.features__image img').forEach((img, index) => {
          gsap.to(img, {
            x: index % 2 === 0 ? 15 : -15, // float left/right by 15px (alternating direction)
            duration: 3 + index * 0.5, // slightly offset durations
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
          });
        });
      }
    });
  });

  // 2. Setup Step Tabs & ScrollTrigger only after layout is fully rendered
  $(window).on('load', function () {
      if ($('.why-choose').length && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // CRITICAL FIX: Prevent browser from restoring scroll position automatically before GSAP calculates pins.
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        ScrollTrigger.clearScrollMemory("manual");

        const isDesktop = window.matchMedia('(min-width: 992px)');

        if (isDesktop.matches) {
          // 1. Master ScrollTrigger: Pin the entire section for 800px of scroll
          const chooseTrigger = ScrollTrigger.create({
            trigger: '.why-choose',
            start: 'top top',
            end: '+=800',
            pin: true,
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              let activeStep = 1;

              if (progress < 0.33) {
                activeStep = 1;
              } else if (progress >= 0.33 && progress < 0.66) {
                activeStep = 2;
              } else {
                activeStep = 3;
              }

              if (!$(`.why-choose__steps .step-item[data-step="${activeStep}"]`).hasClass('active')) {
                $('.why-choose__content-deck .content-block').removeClass('active');
                $('.why-choose__steps .step-item').removeClass('active');
                $('.phone-screen-wrapper').removeClass('active');
                $('.phone-glow').removeClass('active');
                $('.phone-frame').removeClass('step-active-1 step-active-2 step-active-3').addClass(`step-active-${activeStep}`);

                $(`#content-block-${activeStep}`).addClass('active');
                $(`.why-choose__steps .step-item[data-step="${activeStep}"]`).addClass('active');
                $(`#phone-screen-${activeStep}`).addClass('active');
                $(`#phone-glow-${activeStep}`).addClass('active');

                if (activeStep === 3) {
                  $('.scroll-guide-indicator .direction-down').removeClass('active');
                  $('.scroll-guide-indicator .direction-up').addClass('active');
                } else {
                  $('.scroll-guide-indicator .direction-up').removeClass('active');
                  $('.scroll-guide-indicator .direction-down').addClass('active');
                }
              }

              gsap.to('.why-choose__progress-bar', {
                height: `${progress * 100}%`,
                duration: 0.1,
                overwrite: 'auto'
              });
            }
          });

          // 2. 3D Device Parallax Tilt
          gsap.fromTo('.phone-mockup .phone-frame', 
            { rotationY: -8, rotationX: 6, transformPerspective: 1000 },
            {
              rotationY: 8,
              rotationX: 2,
              transformPerspective: 1000,
              ease: 'none',
              scrollTrigger: {
                trigger: '.why-choose',
                start: 'top top',
                end: '+=800',
                scrub: 1.2
              }
            }
          );

          // 3. Tab Click Handler
          $('.why-choose__steps .step-item').on('click', function () {
            const stepNum = $(this).data('step');
            let targetProgress = 0;
            
            if (stepNum === 1) targetProgress = 0.15;
            if (stepNum === 2) targetProgress = 0.50;
            if (stepNum === 3) targetProgress = 0.85;

            const targetScrollTop = chooseTrigger.start + (chooseTrigger.end - chooseTrigger.start) * targetProgress;

            $('html, body').stop().animate({
              scrollTop: targetScrollTop
            }, 800);
          });

        } else {
          // 4. Mobile Fallback
          $('.why-choose__content-deck .content-block').each(function () {
            const card = this;
            const stepNum = $(card).data('step');

            ScrollTrigger.create({
              trigger: card,
              start: 'top 60%',
              end: 'bottom 40%',
              onToggle: (self) => {
                if (self.isActive) {
                  $('.why-choose__steps .step-item').removeClass('active');
                  $('.phone-screen-wrapper').removeClass('active');
                  $('.phone-frame').removeClass('step-active-1 step-active-2 step-active-3').addClass(`step-active-${stepNum}`);
                  
                  $(`.why-choose__steps .step-item[data-step="${stepNum}"]`).addClass('active');
                  $(`#phone-screen-${stepNum}`).addClass('active');
                }
              }
            });
          });

          $('.why-choose__steps .step-item').on('click', function () {
            const stepNum = $(this).data('step');
            const targetBlock = $(`#content-block-${stepNum}`);
            
            if (targetBlock.length) {
              $('html, body').stop().animate({
                scrollTop: targetBlock.offset().top - 100
              }, 800);
            }
          });
        }
      }
    });
  // ========================= Preloader & ScrollTrigger Js End =====================
})(jQuery);
