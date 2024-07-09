import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements AfterViewInit {
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 2,
      centeredSlides: false,
      slidesPerGroupSkip: 2,
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1366: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
