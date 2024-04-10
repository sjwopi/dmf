import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CatalogPageComponent } from '../pages/catalog-page/catalog-page.component';
import { CategoriesPageComponent } from '../pages/categories-page/categories-page.component';
import { CatalogItemPageComponent } from '../pages/catalog-item-page/catalog-item-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { ReviewsPageComponent } from '../pages/reviews-page/reviews-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  /* {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'news',
    component: NewsPageComponent
  },
  {
    path: 'news/:id',
    component: NewsItemPageComponent
  },
  {
    path: 'products',
    component: CatalogPageComponent
  },
  {
    path: 'products/:id',
    component: CatalogItemPageComponent
  },
  {
    path: 'soglasie',
    component: PolicyComponent
  },*/

  {
    path: 'categories',
    component: CategoriesPageComponent,

    children: [{
      path: '**',
      component: CategoriesPageComponent
    }]
  },
  {
    path: 'catalog',
    component: CatalogPageComponent,

    children: [{
      path: ':id',
      component: CatalogItemPageComponent
    }]
  },
  {
    path: 'reviews',
    component: ReviewsPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
