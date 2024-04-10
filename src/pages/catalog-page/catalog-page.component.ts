import { Component } from '@angular/core';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { ICategory } from '../../models/category.model';
import { CategoriesListComponent } from '../../widgets/categories-list/categories-list.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [BreadcumbsComponent, CategoriesListComponent],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss'
})
export class CatalogPageComponent {
  names: string[] = ['Главная', 'Каталог']
}
