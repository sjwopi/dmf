import { Component } from '@angular/core';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';

@Component({
  selector: 'app-to-order-page',
  standalone: true,
  imports: [BreadcumbsComponent],
  templateUrl: './to-order-page.component.html',
  styleUrl: './to-order-page.component.scss'
})
export class ToOrderPageComponent {

}
