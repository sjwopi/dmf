import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../models/category.model';
import { CustomLinkComponent } from '../custom-link/custom-link.component';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CustomLinkComponent, SkeletonComponent, RouterLink, NgIf],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent implements OnInit {
  constructor(private router: Router, public categoriesService: CategoriesService) { }
  @Input() category!: ICategory;
  url: string = ''

  ngOnInit(): void {
    if (this.router.url == '/') this.url = `${this.category.id}`;
    else if (this.router.url.split('/')[1][0] == "#") this.url = `${this.category.id}`;
    else {
      const res: number[] = [];
      let item: ICategory = this.category
      res.push(item.id!)

      while (item.parentId) {
        let parent = this.categoriesService.getById(item.parentId)
        res.push(parent.id!)
        item = parent
      }
      this.url = (res.reverse()).join('/')
    }
  }
}
