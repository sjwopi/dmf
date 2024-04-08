import { Component } from '@angular/core';
import { HomeAboutComponent } from './ui/home-about/home-about.component';
import { HomeSliderComponent } from './ui/home-slider/home-slider.component';
import { CatalogCategoriesListComponent } from '../../widgets/catalog-categories-list/catalog-categories-list.component';
import { ICategory } from '../../models/category.model';
import { DiscountListComponent } from '../../widgets/discount-list/discount-list.component';
import { CatalogItemCardComponent } from '../../shared/ui/catalog-item-card/catalog-item-card.component';
import { ReviewsListComponent } from '../../widgets/reviews-list/reviews-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSliderComponent, HomeAboutComponent, CatalogCategoriesListComponent, DiscountListComponent, ReviewsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
}
