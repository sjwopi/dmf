import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, delay, retry } from 'rxjs';
import { BASE_URL } from '../../global';
import { IProduct } from '../models/product.model';

const data: IProduct[] = [
  {
    id: 1,
    category: 25,
    title: 'СТОЛ «ТРАПЕЦИЯ» РЕГУЛИРУЕМЫЙ, ГР. 0-3',
    price: 2499,
    cardDescription: 'ширини: 1000\nвысота: 800\nглубина: 900',
    descriptionItems: null,
    imagePath: ['assets/img/category/product1.jpg']
  },
  {
    id: 2,
    category: 25,
    title: 'СТОЛ «ТРАПЕЦИЯ» РЕГУЛИРУЕМЫЙ, ГР. 0-3',
    price: 2499,
    cardDescription: 'ширини: 1000\nвысота: 800\nглубина: 900',
    descriptionItems: null,
    imagePath: ['assets/img/category/product1.jpg']
  },
  {
    id: 3,
    category: 25,
    title: 'СТОЛ «ТРАПЕЦИЯ» РЕГУЛИРУЕМЫЙ, ГР. 0-3',
    price: 2499,
    cardDescription: 'ширини: 1000\nвысота: 800\nглубина: 900',
    descriptionItems: null,
    imagePath: ['assets/img/category/product1.jpg']
  },
  {
    id: 4,
    category: 25,
    title: 'СТОЛ «ТРАПЕЦИЯ» РЕГУЛИРУЕМЫЙ, ГР. 0-3',
    price: 2499,
    cardDescription: 'ширини: 1000\nвысота: 800\nглубина: 900',
    descriptionItems: null,
    imagePath: ['assets/img/category/product1.jpg']
  },
  {
    id: 5,
    category: 25,
    title: 'СТОЛ «ТРАПЕЦИЯ» РЕГУЛИРУЕМЫЙ, ГР. 0-3',
    price: 2499,
    cardDescription: 'ширини: 1000\nвысота: 800\nглубина: 900',
    descriptionItems: null,
    imagePath: ['assets/img/category/product1.jpg']
  },
  {
    id: 6,
    category: 25,
    title: 'СТОЛ «ТРАПЕЦИЯ» РЕГУЛИРУЕМЫЙ, ГР. 0-3',
    price: 2499,
    cardDescription: 'ширини: 1000\nвысота: 800\nглубина: 900',
    descriptionItems: null,
    imagePath: ['assets/img/category/product1.jpg']
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) { }
  baseUrl: string = BASE_URL;
  entityUrl: string = 'api/admin/products'
  fullUrl: string = `${this.baseUrl}${this.entityUrl}`;
  
  headers: {headers: HttpHeaders} = {headers: new HttpHeaders({ 'Authorization': 'asff' })}
  products: IProduct[] = [];

  private _collectForm(item: IProduct, file?: File): FormData {
    let res: FormData = new FormData();
    Object.keys(item).forEach((key: string) => {
      res.append(
        key,
        /* @ts-ignore */
        item[key]
      );
    })

    if (file) {
      res.append(
        "image",
        file
      );
    }

    return res;
  }

  getAll(): IProduct[] {
    return data;
  }

  getById(id: number): IProduct {
    return data.filter(item => item.id == id)[0]
  }
  getByCategoryId(id: number): IProduct {
    return data.filter(item => item.category == id)[0]
  }

  create(item: IProduct, file?: File): Observable<IProduct> {
    let formData = this._collectForm(item, file);
    return this.http.post<IProduct>(`${this.fullUrl}`, formData, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }

  edit(item: IProduct, file?: File): Observable<IProduct> {
    let formData = this._collectForm(item, file);
    return this.http.patch<IProduct>(`${this.fullUrl}`, formData, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }

  delete(id: number) {
    return this.http.delete<IProduct>(`${this.fullUrl}?id=${id}`, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }
}
