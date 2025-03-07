import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar } from 'swiper/modules';

export function initializeSlider() {

    const mainPageSlider = new Swiper(".section-hero__slider .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: ".section-hero__slider .swiper-pagination",
            clickable: true,
        },
        loop: true,
        navigation: {
            prevEl: ".section-hero__slider .button-prev",
            nextEl: ".section-hero__slider .button-next",
        }
    });

    const productsSlider = new Swiper(".products-slider .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".products-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            prevEl: ".products-slider .button-prev",
            nextEl: ".products-slider .button-next",
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 16
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });

    const newsSlider = new Swiper(".section-news .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".section-news .swiper-pagination",
            clickable: true,
        },
        allowTouchMove: true,
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 16,
                allowTouchMove: true,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
                allowTouchMove: false,
            },
            1400: {
                spaceBetween: 30,
                slidesPerView: 3,
                allowTouchMove: false,
            }
        }
    });

    const productRelatedSlider = new Swiper(".product__related .swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".product__related .swiper-pagination",
        },
        navigation: {
            prevEl: ".product__related .button-prev",
            nextEl: ".product__related .button-next",
        },
        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1400: {
                spaceBetween: 30
            }
        }
    })


    // const heroMain = new Swiper('.hero-main .swiper', {
    //     modules: [Navigation, Autoplay],
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     loop: true,
    //
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     }
    // });
    //
    // // Получаем значение 'data-autoplay'
    // const sliderAutoplay = document.querySelector('.hero-slider')
    //     ? document.querySelector('.hero-slider')
    //     : null;
    // const heroSliderAttr = sliderAutoplay ? sliderAutoplay.getAttribute('data-autoplay') : null;
    //
    // const heroSlider = new Swiper('.hero-slider .swiper', {
    //     modules: [Navigation, Pagination, Autoplay, FreeMode],
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //     loop: true,
    //     autoplay: {
    //         delay: heroSliderAttr,
    //         disableOnInteraction: false
    //     },
    //
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //         renderBullet: function (index, className) {
    //             return `<div class="${className}"><div class="progress-bar"></div></div>`;
    //         }
    //     },
    //     on: {
    //         slideChangeTransitionStart: function () {
    //             document.querySelectorAll('.progress-bar').forEach((bar) => {
    //                 bar.style.width = '0';
    //                 bar.style.transition = 'none';
    //             });
    //         },
    //         slideChangeTransitionEnd: function () {
    //             const activeBullet = document.querySelector(
    //                 '.swiper-pagination-bullet-active .progress-bar'
    //             );
    //             setTimeout(() => {
    //                 activeBullet.style.width = '100%';
    //                 activeBullet.style.transition = `width ${heroSliderAttr / 1000}s linear`;
    //             }, 10); // небольшая задержка для корректной анимации
    //         }
    //     }
    // });
    //
    // // Начальная анимация для первого слайда
    // if (document.querySelector('.swiper-pagination-bullet-active .progress-bar')) {
    //     setTimeout(() => {
    //         const activeBullet = document.querySelector(
    //             '.swiper-pagination-bullet-active .progress-bar'
    //         );
    //         activeBullet.style.width = '100%';
    //         activeBullet.style.transition = `width ${heroSliderAttr / 1000}s linear`;
    //     }, 1);
    // }
    //
    // const heroTape = new Swiper('.hero-tape', {
    //     modules: [FreeMode],
    //     slidesPerView: 'auto',
    //     freeMode: true
    // });
    //
    // const cardItem = document.querySelectorAll('.card-item');
    //
    // cardItem.forEach((slider, index) => {
    //     // Находим элемент пагинации внутри текущего слайдера
    //     const paginationElement = slider.querySelector('.nested-pagination');
    //
    //     // Устанавливаем уникальный атрибут data-slider для элемента пагинации
    //     if (paginationElement) {
    //         paginationElement.setAttribute('data-slide', index + 1);
    //     }
    //
    //     const swiper = slider.querySelector('.swiper');
    //
    //     // Инициализируем новый Swiper с уникальным селектором пагинации
    //     new Swiper(swiper, {
    //         modules: [Pagination],
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //         pagination: {
    //             el: `.nested-pagination[data-slide="${index + 1}"]`,
    //             clickable: true
    //         }
    //     });
    // });
    //
    // const saleSlider = new Swiper('.sale .main-swiper', {
    //     modules: [Navigation, Pagination, FreeMode],
    //     slidesPerView: 'auto',
    //     spaceBetween: 10,
    //     freeMode: true,
    //     slidesOffsetBefore: 10,
    //     slidesOffsetAfter: 10,
    //
    //     pagination: {
    //         el: '.main-pagination',
    //         clickable: true
    //     },
    //
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 16,
    //             slidesOffsetBefore: 16,
    //             slidesOffsetAfter: 16
    //         },
    //
    //         1280: {
    //             slidesPerView: 3,
    //             spaceBetween: 16,
    //             freeMode: false,
    //             slidesOffsetBefore: 0,
    //             slidesOffsetAfter: 0
    //         },
    //
    //         1440: {
    //             slidesPerView: 3,
    //             spaceBetween: 20,
    //             freeMode: false,
    //             slidesOffsetBefore: 0,
    //             slidesOffsetAfter: 0
    //         }
    //     }
    // });
    //
    // const initSwiper = () => {
    //     if (window.innerWidth < 1280) {
    //         // Инициализируем слайдер, если ширина экрана меньше 1280px
    //         return new Swiper('.projects', {
    //             modules: [FreeMode],
    //             slidesPerView: 'auto',
    //             spaceBetween: 10,
    //             freeMode: true,
    //             slidesOffsetBefore: 10,
    //             slidesOffsetAfter: 10,
    //
    //             breakpoints: {
    //                 768: {
    //                     spaceBetween: 16,
    //                     slidesOffsetBefore: 16,
    //                     slidesOffsetAfter: 16
    //                 }
    //             }
    //         });
    //     } else {
    //         return null;
    //     }
    // };
    //
    // let projectsSlider = initSwiper();
    //
    // const initSlider = () => {
    //     const sliderItem = document.querySelectorAll('.slider');
    //     const sliders = [];
    //
    //     sliderItem.forEach((slider) => {
    //         const swiperElement = slider.querySelector('.main-swiper');
    //         if (swiperElement) {
    //             // Инициализируем слайдер для каждого найденного элемента .main-swiper
    //             sliders.push(
    //                 new Swiper(swiperElement, {
    //                     modules: [FreeMode],
    //                     slidesPerView: 'auto',
    //                     spaceBetween: 10,
    //                     freeMode: true,
    //                     slidesOffsetBefore: 10,
    //                     slidesOffsetAfter: 10,
    //
    //                     breakpoints: {
    //                         768: {
    //                             slidesOffsetBefore: 16,
    //                             slidesOffsetAfter: 16
    //                         },
    //
    //                         1280: {
    //                             slidesPerView: 3,
    //                             freeMode: false,
    //                             slidesOffsetBefore: 0,
    //                             slidesOffsetAfter: 0
    //                         },
    //
    //                         1440: {
    //                             slidesPerView: 4,
    //                             freeMode: false,
    //                             slidesOffsetBefore: 0,
    //                             slidesOffsetAfter: 0
    //                         }
    //                     }
    //                 })
    //             );
    //         }
    //     });
    //
    //     return sliders;
    // };
    //
    // initSlider();
    //
    // const destroySliders = () => {
    //     if (projectsSlider) {
    //         projectsSlider.destroy(true, true);
    //         projectsSlider = null;
    //     }
    // };
    //
    // const handleResize = () => {
    //     if (window.innerWidth >= 1280 && projectsSlider) {
    //         destroySliders();
    //     } else if (window.innerWidth < 1280 && !projectsSlider) {
    //         projectsSlider = initSwiper();
    //     }
    // };
    //
    // // Слушаем изменения размера окна
    // window.addEventListener('resize', handleResize);
    //
    // // Миниатюрная пагинация слайдера для карточки товара
    // const productThumbs = new Swiper('.product__thumbs .swiper', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 10,
    //     watchSlidesProgress: true,
    //     direction: 'horizontal'
    // });
    //
    // // Слайдер карточки товара
    // const product = new Swiper('.product__main .swiper', {
    //     modules: [Pagination, Thumbs],
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //
    //     thumbs: {
    //         swiper: productThumbs
    //     },
    //
    //     pagination: {
    //         el: '.product__main .swiper-pagination',
    //         clickable: true
    //     }
    // });
    //
    // // Слайдер благодарственных писем
    // const thanksLetter = new Swiper('.content-thanks-letter .swiper', {
    //     modules: [Navigation, FreeMode],
    //     slidesPerView: 1.1,
    //     spaceBetween: 8,
    //     freeMode: true,
    //     slidesOffsetAfter: 8,
    //
    //     navigation: {
    //         nextEl: '.content-thanks-letter .swiper-button-next',
    //         prevEl: '.content-thanks-letter .swiper-button-prev'
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2.1,
    //             spaceBetween: 20
    //         },
    //
    //         1280: {
    //             slidesPerView: 2.4,
    //             spaceBetween: 20
    //         },
    //
    //         1440: {
    //             slidesPerView: 2.7
    //         }
    //     }
    // });
    //
    // // Слайдер изображений на странице новости
    // const newsSlider = new Swiper('.section-news-slider .swiper', {
    //     modules: [Navigation, Pagination],
    //     slidesPerView: 1,
    //     spaceBetween: 5,
    //     freeMode: true,
    //
    //     pagination: {
    //         el: '.section-news-slider .swiper-pagination',
    //         clickable: true
    //     },
    //
    //     navigation: {
    //         nextEl: '.section-news-slider .swiper-button-next',
    //         prevEl: '.section-news-slider .swiper-button-prev'
    //     }
    // });
    //
    // // Категории на странице "Сравнение"
    // const compareCategories = new Swiper('.compare-categories .swiper', {
    //     modules: [FreeMode],
    //     slidesPerView: 'auto',
    //     spaceBetween: 10,
    //     freeMode: true
    // });
    //
    // // Слайдер на странице "Сравнение"
    // const compareItems = document.querySelectorAll('.compare-item');
    // const compareContainer = document.querySelector('.compare')
    //     ? document.querySelector('.compare')
    //     : null;
    // const compareListMobile = {
    //     activeSlideIndexSlider1: 1,
    //     activeSlideIndexSlider2: 2
    // };
    //
    // const compareItemsSlider = new Swiper('.compare-item .swiper', {
    //     modules: [Navigation],
    //     slidesPerView: 1,
    //     spaceBetween: 5,
    //     allowTouchMove: false,
    //     loop: true,
    //
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //
    //     breakpoints: {
    //         1280: {
    //             slidesPerView: 4,
    //             spaceBetween: 0,
    //             allowTouchMove: true,
    //             loop: false
    //         }
    //     },
    //
    //     on: {
    //         slideChange: function () {
    //             const currentIndex = this.realIndex + 1;
    //             const totalSlides = this.slides.length;
    //             document.querySelector(
    //                 `.compare-item:first-child .slide-counter`
    //             ).textContent = `${currentIndex} из ${totalSlides}`;
    //
    //             compareListMobile.compareDesc1 = currentIndex;
    //             $(
    //                 `.js-compare-desc p:not([data-item=${compareListMobile.activeSlideIndexSlider2}])`
    //             ).removeClass('active');
    //             $(`.js-compare-desc p[data-item=${currentIndex}]`).addClass('active');
    //
    //             if (this.currentBreakpoint >= 1280) {
    //                 $('.js-compare-desc').css('transform', 'translateX(' + this.translate + 'px)');
    //             }
    //         }
    //     }
    // });
    //
    // const handleMobileResize = () => {
    //     const isMobile = window.innerWidth < 1280; // Установите ширину для мобильных устройств
    //
    //     // Удаляем все клонированные элементы
    //     if (compareContainer) {
    //         const clonedItems = compareContainer.querySelectorAll('.compare-item.clone');
    //         clonedItems.forEach((item) => item.remove());
    //     }
    //
    //     if (isMobile) {
    //         // Проверяем, есть ли уже клон
    //         const existingClone = compareContainer
    //             ? compareContainer.querySelector('.compare-item.clone')
    //             : null;
    //         if (!existingClone) {
    //             compareItems.forEach((item) => {
    //                 const clone = item.cloneNode(true);
    //                 clone.classList.add('clone'); // Добавляем класс для идентификации клона
    //
    //                 compareContainer.appendChild(clone);
    //
    //                 // Инициализируем Swiper для клонированного элемента
    //                 const swiper = clone.querySelector('.swiper');
    //                 new Swiper(swiper, {
    //                     modules: [Navigation],
    //                     slidesPerView: 1,
    //                     spaceBetween: 5,
    //                     allowTouchMove: false,
    //                     loop: true,
    //                     initialSlide: 1, // Начальный слайд для клона
    //
    //                     navigation: {
    //                         nextEl: '.compare-item.clone .swiper-button-next',
    //                         prevEl: '.compare-item.clone .swiper-button-prev'
    //                     },
    //
    //                     on: {
    //                         slideChange: function () {
    //                             const currentIndex = this.realIndex + 1;
    //                             const totalSlides = this.slides.length;
    //                             document.querySelector(
    //                                 '.compare-item.clone .slide-counter'
    //                             ).textContent = `${currentIndex} из ${totalSlides}`;
    //
    //                             compareListMobile.compareDesc2 = currentIndex;
    //                             $(
    //                                 `.js-compare-desc p:not([data-item=${compareListMobile.activeSlideIndexSlider1}])`
    //                             ).removeClass('active');
    //                             $(`.js-compare-desc p[data-item=${currentIndex}]`).addClass(
    //                                 'active'
    //                             );
    //                         }
    //                     }
    //                 });
    //             });
    //         }
    //     }
    // };
    //
    // // Инициализация при загрузке
    // handleMobileResize();
    //
    // // Добавляем обработчик события изменения размера окна
    // window.addEventListener('resize', handleMobileResize);
    //
    // // Скроллбар для хронологии
    // const historySlider = new Swiper('.history .swiper', {
    //     modules: [Scrollbar, FreeMode],
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     grabCursor: true,
    //     slidesOffsetBefore: 30,
    //     slidesOffsetAfter: 30,
    //
    //     scrollbar: {
    //         el: '.swiper-scrollbar-custom',
    //         draggable: true,
    //         dragSize: 72
    //     }
    // });
    //
    // // Слайдер в преимуществах страницы "о компании"
    // const featuresThumbs = new Swiper('.features__thumbs .swiper', {
    //     slidesPerView: 'auto',
    //     spaceBetween: 10,
    //     watchSlidesProgress: true,
    //     direction: 'horizontal',
    //
    //     on: {
    //         slideChange: function () {
    //             features.slideTo(this.activeIndex);
    //         }
    //     }
    // });
    //
    // // Слайдер в преимуществах страницы "о компании"
    // const features = new Swiper('.features__slide .swiper', {
    //     modules: [Navigation, Pagination, Thumbs],
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //
    //     thumbs: {
    //         swiper: featuresThumbs
    //     },
    //
    //     navigation: {
    //         nextEl: '.features__bar .swiper-button-next',
    //         prevEl: '.features__bar .swiper-button-prev'
    //     },
    //
    //     pagination: {
    //         el: '.features__bar .swiper-pagination',
    //         clickable: true
    //     }
    // });
    //
    // const breadcrumbs = new Swiper('.breadcrumbs.swiper', {
    //     modules: [FreeMode],
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     grabCursor: true,
    //     slidesOffsetAfter: 60
    // });
    //
    // const gallerySlider = new Swiper('.about-gallery .swiper', {
    //     modules: [Navigation],
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //     },
    //
    //     breakpoints: {
    //         1280: {
    //             slidesPerView: 3
    //         }
    //     }
    // });
}
