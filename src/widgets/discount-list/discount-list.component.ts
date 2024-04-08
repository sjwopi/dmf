import { Component, Input } from '@angular/core';
import { DiscountsCardComponent } from '../../shared/ui/discounts-card/discounts-card.component';
import { IDiscount } from '../../models/discount.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-discount-list',
  standalone: true,
  imports: [DiscountsCardComponent, NgIf, NgFor],
  templateUrl: './discount-list.component.html',
  styleUrl: './discount-list.component.scss'
})
export class DiscountListComponent {
  @Input() count?: number;

  discounts: IDiscount[] = [
    {
      id: 1,
      name: "скидка 10% на первый закз",
      description: "Являясь всего лишь частью общей картины, тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны.",
      imagePath: "assets/img/category/discount1.jpg"
    },
    {
      id: 2,
      name: "сроки доставки мебели",
      description: "Являясь всего лишь частью общей картины, тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны.",
      imagePath: "assets/img/category/discount2.jpg"
    },
    {
      id: 3,
      name: "скидка 10% на первый закз",
      description: "Являясь всего лишь частью общей картины, тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны.",
      imagePath: "assets/img/category/discount1.jpg"
    },
    {
      id: 4,
      name: "сроки доставки мебели",
      description: "Являясь всего лишь частью общей картины, тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны.",
      imagePath: "assets/img/category/discount2.jpg"
    }
  ]
}
