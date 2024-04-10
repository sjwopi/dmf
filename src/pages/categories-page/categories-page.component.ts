import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/category.model';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { NavigationEnd, Router } from '@angular/router';
import { CategoriesListComponent } from '../../widgets/categories-list/categories-list.component';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [BreadcumbsComponent, CategoriesListComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent implements OnInit {
  constructor(private router: Router, public categoriesService: CategoriesService) { }
  baseNames: string[] = ['Главная', 'Каталог']
  names: string[] = ['Главная', 'Каталог']

  changeUrl() {
    const urls = this.router.url.split('categories/')[1].split('/')
    const id = urls[urls.length - 1]
    if (id) {
      const res: string[] = [];
      let item: ICategory = this.categoriesService.getById(parseInt(id))
      res.push(item.name)

      while(item.parentId) {
        let parent = this.categoriesService.getById(item.parentId)
        res.push(parent.name)
        item = parent
      }
      this.names = [...this.baseNames]
      this.names.push(...res.reverse())
      this.names = [...this.names]
    } else {
      this.names = this.baseNames
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.changeUrl()
      }
    });
  }
}
