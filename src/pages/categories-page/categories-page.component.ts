import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/category.model';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { CatalogCategoriesListComponent } from '../../widgets/catalog-categories-list/catalog-categories-list.component';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [BreadcumbsComponent, CatalogCategoriesListComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss'
})
export class CategoriesPageComponent implements OnInit{
  constructor(private router: Router) { }

  names: string[] = ['Главная', 'Каталог']


  /* changeUrl() {
    const id = this.router.url.split('categories/')[1]
    if (id) {
      this.names.push(dataAll.filter(cat => cat.id?.toString() == id)[0].name)
      this.names = [...this.names]
      console.log(this.names)
    } else {
      this.names = ['Главная', 'Каталог']
    }
  } */

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //this.changeUrl()
      }
    });
  }
}
