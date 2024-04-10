import { Component } from '@angular/core';
import { ReviewsListComponent } from '../../widgets/reviews-list/reviews-list.component';

@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [ReviewsListComponent],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.scss'
})
export class ReviewsPageComponent {

}
