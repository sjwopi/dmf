import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CatalogPageComponent } from '../pages/catalog-page/catalog-page.component';
import { CategoriesPageComponent } from '../pages/categories-page/categories-page.component';

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
    component: CategoriesPageComponent
  },
  {
    path: 'categories/:id',
    component: CategoriesPageComponent
  },
  {
    path: 'catalog',
    component: CatalogPageComponent
  },
  {
    path: 'catalog/:id',
    component: CatalogPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];
