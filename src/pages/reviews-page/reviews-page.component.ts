import { Component } from '@angular/core';
import { ReviewsListComponent } from '../../widgets/reviews-list/reviews-list.component';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [ReviewsListComponent, BreadcumbsComponent, RouterLink],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.scss'
})
export class ReviewsPageComponent {
  names: string[] = ['Главная', 'Отзывы']
}
