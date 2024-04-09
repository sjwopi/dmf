import { Component } from '@angular/core';
import { ICategory } from '../../models/category.model';
import { CategoryCardComponent } from '../../shared/ui/category-card/category-card.component';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';

@Component({
  selector: 'app-catalog-categories-list',
  standalone: true,
  imports: [CategoryCardComponent, SkeletonComponent, NgIf, NgFor],
  templateUrl: './catalog-categories-list.component.html',
  styleUrl: './catalog-categories-list.component.scss'
})
export class CatalogCategoriesListComponent {
  constructor(private router: Router, public categoriesService: CategoriesService) { }

  categories: ICategory[] = []
  isLoad: boolean = false

  ngOnInit(): void {
    this.isLoad = true;

    setTimeout(() => {
      this.categories = this.categoriesService.getAll()
      this.isLoad = false
    }, 1500)
  }
}
