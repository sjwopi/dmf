import { Component } from '@angular/core';
import { DiscountListComponent } from '../../widgets/discount-list/discount-list.component';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';

@Component({
  selector: 'app-discounts-page',
  standalone: true,
  imports: [DiscountListComponent, BreadcumbsComponent],
  templateUrl: './discounts-page.component.html',
  styleUrl: './discounts-page.component.scss'
})
export class DiscountsPageComponent {
  names: string[] = ['Главная', 'Акции']
}
