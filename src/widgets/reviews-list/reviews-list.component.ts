import { Component, OnInit } from '@angular/core';
import { IReview } from '../../models/review.model';
import { ReviewsService } from '../../services/reviews.service';
import { ReviewsCardComponent } from '../../shared/ui/reviews-card/reviews-card.component';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-reviews-list',
  standalone: true,
  imports: [ReviewsCardComponent, SkeletonComponent, NgIf, NgFor],
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.scss'
})
export class ReviewsListComponent implements OnInit{
  constructor(public reviewsService: ReviewsService) { }
  reviews: IReview[] = []
  isLoad: boolean = false

  ngOnInit(): void {
    this.isLoad = true
    setTimeout(() => {
      this.reviews = this.reviewsService.getAll()
      this.isLoad = false
    }, 300)
  }
}
