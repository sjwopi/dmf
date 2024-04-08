import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeSliderComponent implements OnInit {
  ngOnInit(): void {
    const swiperEl = document.querySelector(".overlaySlider")?.querySelector("swiper-container");

    const params = {
      injectStyles: [
        `
        .swiper-pagination {
          bottom: 48px !important;
        }
        .swiper-pagination-bullet {
          background-color: white !important;
          width: 15px !important;
          height: 15px !important;
          margin-right: 25px !important;

        }
        @media screen and (max-width: 1000px) {
          .swiper-pagination {
            bottom: 17% !important;
          }
          .swiper-pagination-bullet {
            width: 11px !important;
            height: 11px !important;
            margin-right: 20px !important;
          }
        }
        `
      ],
    };

    Object.assign(swiperEl!, params);
    swiperEl!.initialize();
  }
}
