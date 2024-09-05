import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.css'],
})
export class RealEstateDetailsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}