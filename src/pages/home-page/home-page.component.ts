import { Component } from '@angular/core';
import { HomeAboutComponent } from './ui/home-about/home-about.component';
import { HomeSliderComponent } from './ui/home-slider/home-slider.component';
import { CatalogCategoriesListComponent } from '../../widgets/catalog-categories-list/catalog-categories-list.component';
import { ICategory } from '../../models/category.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSliderComponent, HomeAboutComponent, CatalogCategoriesListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  categories: ICategory[] = [{
    id: 1,
    name: 'для школ',
    imagePath: 'assets/img/category/category1.jpeg'
  }, {
    id: 2,
    name: 'для детских садов',
    imagePath: 'assets/img/category/category2.jpg'
  }, {
    id: 3,
    name: 'для дома',
    imagePath: 'assets/img/category/category3.jpg'
  }, {
    id: 4,
    name: 'для офисов и бизнеса',
    imagePath: 'assets/img/category/category4.jpeg'
  }, {
    id: 5,
    name: 'Белорусская мебель «ПИНСКДРЕВ»',
    imagePath: 'assets/img/category/category5.jpg'
  }, {
    id: 6,
    name: 'мебель на заказ',
    imagePath: 'assets/img/category/category6.jpg'
  },
  ]
}
