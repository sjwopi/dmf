import { Component, OnInit } from '@angular/core';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { ICategory } from '../../models/category.model';
import { CategoriesListComponent } from '../../widgets/categories-list/categories-list.component';
import { NavigationStart, Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { NgIf } from '@angular/common';
import { CatalogListComponent } from '../../widgets/catalog-list/catalog-list.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [BreadcumbsComponent, CategoriesListComponent, CatalogListComponent, NgIf],
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.scss'
})
export class CatalogPageComponent implements OnInit {
  constructor(private router: Router, public categoriesService: CategoriesService) { }

  baseNames: string[] = ['Главная', 'Каталог']
  names: string[] = this.baseNames
  isCategories: boolean = true;

  changeBreadcumbs(id: string) {
    const res: string[] = [];
    let item: ICategory = this.categoriesService.getById(parseInt(id))
    res.push(item.name)

    while (item.parentId) {
      let parent = this.categoriesService.getById(item.parentId)
      res.push(parent.name)
      item = parent
    }
    this.names = [...this.baseNames]
    this.names.push(...res.reverse())
    this.names = [...this.names]
  }

  changeUrl(event: any) {
    if (event.url.split('/')[1] !== 'catalog') return
    const urls = event.url.split('catalog')[1].split('/')
    const id = urls[urls.length - 1]
    if (id) {
      this.changeBreadcumbs(id)

      if (!this.categoriesService.getById(parseInt(id)).children.length) {
        this.isCategories = false;
      } else {
        this.isCategories = true
      }

    } else {
      this.names = this.baseNames
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
