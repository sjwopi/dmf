import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CatalogPageComponent } from '../pages/catalog-page/catalog-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { ReviewsPageComponent } from '../pages/reviews-page/reviews-page.component';
import { ToOrderPageComponent } from '../pages/to-order-page/to-order-page.component';
import { BasketPageComponent } from '../pages/basket-page/basket-page.component';
import { DiscountsPageComponent } from '../pages/discounts-page/discounts-page.component';
import { DiscountsItemPageComponent } from '../pages/discounts-item-page/discounts-item-page.component';
import { ReviewsAddPageComponent } from '../pages/reviews-add-page/reviews-add-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'catalog',
    component: CatalogPageComponent,

    children: [
      {
        path: '**',
        component: CatalogPageComponent
      }
    ]
  },
  {
    path: 'to-order',
    component: ToOrderPageComponent,
  },
  {
    path: 'reviews',
    component: ReviewsPageComponent
  },
  {
    path: 'reviews/add',
    component: ReviewsAddPageComponent
  },
  {
    path: 'basket',
    component: BasketPageComponent
  },
  {
    path: 'discount',
    component: DiscountsPageComponent
  },
  {
    path: 'discount/:id',
    component: DiscountsItemPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
