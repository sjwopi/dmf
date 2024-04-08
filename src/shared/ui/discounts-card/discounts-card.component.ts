import { Component, Input } from '@angular/core';
import { IDiscount } from '../../../models/discount.model';
import { RouterLink } from '@angular/router';
import { CustomLinkComponent } from '../custom-link/custom-link.component';

@Component({
  selector: 'app-discounts-card',
  standalone: true,
  imports: [RouterLink, CustomLinkComponent],
  templateUrl: './discounts-card.component.html',
  styleUrl: './discounts-card.component.scss'
})
export class DiscountsCardComponent {
  @Input() discount!: IDiscount
}
