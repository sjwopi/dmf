import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../models/product.model';

@Component({
  selector: 'app-catalog-item-card',
  standalone: true,
  imports: [],
  templateUrl: './catalog-item-card.component.html',
  styleUrl: './catalog-item-card.component.scss'
})
export class CatalogItemCardComponent implements OnInit{
  @Input() product!: IProduct;

  ngOnInit(): void {
    console.log(this.product)
  }
}
