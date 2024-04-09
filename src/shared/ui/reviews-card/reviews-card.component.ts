import { Component, Input } from '@angular/core';
import { IReview } from '../../../models/review.model';
import { CustomLinkComponent } from '../custom-link/custom-link.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reviews-card',
  standalone: true,
  imports: [CustomLinkComponent, NgFor],
  templateUrl: './reviews-card.component.html',
  styleUrl: './reviews-card.component.scss'
})
export class ReviewsCardComponent {
  @Input() review!: IReview
}
