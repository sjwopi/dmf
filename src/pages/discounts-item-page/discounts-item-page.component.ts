import { Component, OnInit } from '@angular/core';
import { DiscountListComponent } from '../../widgets/discount-list/discount-list.component';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { IDiscount } from '../../models/discount.model';
import { ActivatedRoute } from '@angular/router';
import { DiscountsService } from '../../services/discounts.service';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-discounts-item-page',
  standalone: true,
  imports: [DiscountListComponent, BreadcumbsComponent, ButtonComponent, NgIf, NgFor],
  templateUrl: './discounts-item-page.component.html',
  styleUrl: './discounts-item-page.component.scss'
})
export class DiscountsItemPageComponent implements OnInit{
  constructor(private activateRoute: ActivatedRoute, public discountsService: DiscountsService) {
    this.id = activateRoute.snapshot.params["id"];
  }

  id: number;
  names: string[] = ['Главная', 'Акции']
  discount!: IDiscount

  ngOnInit(): void {
    this.discount = this.discountsService.getById(this.id)
    this.names.push(this.discount.name)
  }
}
