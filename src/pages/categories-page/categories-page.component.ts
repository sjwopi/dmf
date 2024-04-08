import { Component } from '@angular/core';
import { ICategory } from '../../models/category.model';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { CatalogCategoriesListComponent } from '../../widgets/catalog-categories-list/catalog-categories-list.component';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [BreadcumbsComponent, CatalogCategoriesListComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent {
  names: string[] = ['Главная', 'Каталог']
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
