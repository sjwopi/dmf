import { Component, Input } from '@angular/core';
import { ICategory } from '../../../models/category.model';
import { CustomLinkComponent } from '../custom-link/custom-link.component';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CustomLinkComponent, SkeletonComponent, RouterLink, NgIf],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category!: ICategory;
}
