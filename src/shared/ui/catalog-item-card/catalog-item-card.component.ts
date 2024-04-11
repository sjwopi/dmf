import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../models/product.model';
import { NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-catalog-item-card',
  standalone: true,
  imports: [NgFor, NgIf, ButtonComponent],
  templateUrl: './catalog-item-card.component.html',
  styleUrl: './catalog-item-card.component.scss'
})
export class CatalogItemCardComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() isSmall: boolean = false;

  ngOnInit(): void {
    console.log(this.product)
  }
}
