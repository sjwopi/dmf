import { Component } from '@angular/core';
import { HomeAboutComponent } from './ui/home-about/home-about.component';
import { HomeSliderComponent } from './ui/home-slider/home-slider.component';
import { DiscountListComponent } from '../../widgets/discount-list/discount-list.component';
import { ReviewsListComponent } from '../../widgets/reviews-list/reviews-list.component';
import { CustomLinkComponent } from '../../shared/ui/custom-link/custom-link.component';
import { CategoriesListComponent } from '../../widgets/categories-list/categories-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSliderComponent, HomeAboutComponent, CategoriesListComponent, DiscountListComponent, ReviewsListComponent, CustomLinkComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
