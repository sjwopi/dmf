import { Component, Input, OnInit } from '@angular/core';
import { DiscountsCardComponent } from '../../shared/ui/discounts-card/discounts-card.component';
import { IDiscount } from '../../models/discount.model';
import { NgFor, NgIf } from '@angular/common';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';
import { DiscountsService } from '../../services/discounts.service';

@Component({
  selector: 'app-discount-list',
  standalone: true,
  imports: [DiscountsCardComponent, SkeletonComponent, NgIf, NgFor],
  templateUrl: './discount-list.component.html',
  styleUrl: './discount-list.component.scss'
})
export class DiscountListComponent implements OnInit {
  constructor(public discountsService: DiscountsService) { }
  @Input() count?: number;
  discounts: IDiscount[] = []
  isLoad: boolean = false

  ngOnInit(): void {
    this.isLoad = true

    setTimeout(() => {
      this.discounts = this.discountsService.getAll()
      this.isLoad = false
    }, 1000)
  }
}
