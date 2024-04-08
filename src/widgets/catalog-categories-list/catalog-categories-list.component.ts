import { Component } from '@angular/core';
import { ICategory } from '../../models/category.model';
import { CategoryCardComponent } from '../../shared/ui/category-card/category-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-catalog-categories-list',
  standalone: true,
  imports: [CategoryCardComponent, NgIf, NgFor],
  templateUrl: './catalog-categories-list.component.html',
  styleUrl: './catalog-categories-list.component.scss'
})
export class CatalogCategoriesListComponent {
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
