import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { ICategory } from '../../models/category.model';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';
import { CategoryCardComponent } from '../../shared/ui/category-card/category-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [SkeletonComponent, CategoryCardComponent, NgIf, NgFor],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {
  constructor(private router: Router, public categoriesService: CategoriesService) { }
  categories: ICategory[] = []
  isLoad: boolean = false

  changeUrl(event?: any) {
    if (event.url.split('/')[1] !== 'catalog') {
      this.isLoad = true;
      setTimeout(() => {
        this.categories = this.categoriesService.getAll()
        this.isLoad = false
      }, 500)
      return
    }

    const urls = event.url.split('catalog')[1]?.split('/')
    const id = urls[urls.length - 1]
    if (id) {
      this.isLoad = true;
      setTimeout(() => {
        this.categories = this.categoriesService.getById(parseInt(id)).children
        this.isLoad = false
      }, 500)
    } else {
      this.isLoad = true;
      setTimeout(() => {
        this.categories = this.categoriesService.getAll()
        this.isLoad = false
      }, 500)
    }
  }

  ngOnInit(): void {
    this.changeUrl(this.router)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.changeUrl(event)
      }
    });
  }
}
