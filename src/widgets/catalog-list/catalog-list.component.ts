import { Component, Input, OnInit, input } from '@angular/core';
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
  @Input() isSmall: boolean = JSON.parse(localStorage.getItem('isSmall') ?? "false")
  products: IProduct[] = []
  isLoad: boolean = false

  ngOnInit(): void {
    this.isLoad = true;
    setTimeout(() => {
      this.products = this.productsService.getAll()
      this.isLoad = false
    }, 500)
  }
}
