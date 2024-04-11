import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { IProduct } from '../../models/product.model';
import { CatalogItemCardComponent } from '../../shared/ui/catalog-item-card/catalog-item-card.component';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-catalog-list',
  standalone: true,
  imports: [CatalogItemCardComponent, SkeletonComponent, NgClass, NgIf, NgFor],
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.scss'
})
export class CatalogListComponent implements OnInit {
  constructor(public productsService: ProductsService) {}
  products: IProduct[] = []
  isSmall: boolean = JSON.parse(localStorage.getItem('isSmall') ?? "true")
  isLoad: boolean = false

  ngOnInit(): void {
    localStorage.setItem('isSmall', JSON.stringify(this.isSmall))

    this.isLoad = true;
    setTimeout(() => {
      this.products = this.productsService.getAll()
      console.log(this.products)
      this.isLoad = false
    }, 500)
  }
}
