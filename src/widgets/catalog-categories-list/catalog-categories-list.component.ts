import { Component, Input } from '@angular/core';
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
  @Input() categories: ICategory[] = [];
}
