import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, delay, retry } from 'rxjs';
import { BASE_URL } from '../../global';
import { IDiscount } from '../models/discount.model';

const data: IDiscount[] = [
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

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {
  constructor(private http: HttpClient, private router: Router) { }
  baseUrl: string = BASE_URL;
  entityUrl: string = 'api/admin/discounts'
  fullUrl: string = `${this.baseUrl}${this.entityUrl}`;
  
  headers: {headers: HttpHeaders} = {headers: new HttpHeaders({ 'Authorization': 'asff' })}
  discounts: IDiscount[] = [];

  private _collectForm(item: IDiscount, file?: File): FormData {
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

  getAll(): IDiscount[] {
    return data;
  }

  getById(id: number): IDiscount {
    return data.filter(item => item.id == id)[0]
  }

  create(item: IDiscount, file?: File): Observable<IDiscount> {
    let formData = this._collectForm(item, file);
    return this.http.post<IDiscount>(`${this.fullUrl}`, formData, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }

  edit(item: IDiscount, file?: File): Observable<IDiscount> {
    let formData = this._collectForm(item, file);
    return this.http.patch<IDiscount>(`${this.fullUrl}`, formData, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }

  delete(id: number) {
    return this.http.delete<IDiscount>(`${this.fullUrl}?id=${id}`, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }
}
