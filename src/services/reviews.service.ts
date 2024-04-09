import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, delay, retry } from 'rxjs';
import { BASE_URL } from '../../global';
import { IReview } from '../models/review.model';


const data: IReview[] = [
  {
    id: 1,
    owner: 'Федор',
    place: 'Нижний новгород',
    text: 'Прежде всего, высокотехнологичная концепция общественного уклада влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов...',
    imagePath: ['/assets/img/category/review1.jpg', '/assets/img/category/review2.jpg']
  },
  {
    id: 2,
    owner: 'Федор',
    place: 'Нижний новгород',
    text: 'Прежде всего, высокотехнологичная концепция общественного уклада влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов...',
    imagePath: ['/assets/img/category/review1.jpg', '/assets/img/category/review2.jpg']
  },
  {
    id: 3,
    owner: 'Федор',
    place: 'Нижний новгород',
    text: 'Прежде всего, высокотехнологичная концепция общественного уклада влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов...',
    imagePath: ['/assets/img/category/review1.jpg', '/assets/img/category/review2.jpg']
  },
  {
    id: 4,
    owner: 'Федор',
    place: 'Нижний новгород',
    text: 'Прежде всего, высокотехнологичная концепция общественного уклада влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов...',
    imagePath: ['/assets/img/category/review1.jpg', '/assets/img/category/review2.jpg']
  },
  {
    id: 5,
    owner: 'Федор',
    place: 'Нижний новгород',
    text: 'Прежде всего, высокотехнологичная концепция общественного уклада влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов...',
    imagePath: ['/assets/img/category/review1.jpg', '/assets/img/category/review2.jpg']
  },
  {
    id: 6,
    owner: 'Федор',
    place: 'Нижний новгород',
    text: 'Прежде всего, высокотехнологичная концепция общественного уклада влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов...',
    imagePath: ['/assets/img/category/review1.jpg', '/assets/img/category/review2.jpg']
  },
]

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private http: HttpClient, private router: Router) { }
  baseUrl: string = BASE_URL;
  entityUrl: string = 'api/admin/review'
  fullUrl: string = `${this.baseUrl}${this.entityUrl}`;

  headers: HttpHeaders = new HttpHeaders({ 'Authorization': 'asff' })
  review: IReview[] = [];

  private _collectForm(item: IReview, files?: File[]): FormData {
    let res: FormData = new FormData();
    Object.keys(item).forEach((key: string) => {
      res.append(
        key,
        /* @ts-ignore */
        item[key]
      );
    })

    files?.forEach(item => {
      res.append(
        "image",
        item
      );
    })

    return res;
  }

  getAll(): IReview[] {
    return data;
  }

  getById(id: number): IReview {
    return data.filter(item => item.id == id)[0]
  }

  create(item: IReview, files?: File[]): Observable<IReview> {
    let formData = this._collectForm(item, files);
    return this.http.post<IReview>(`${this.fullUrl}`, formData, { headers: this.headers }).pipe(
      delay(300),
      retry(2)
    )
  }

  edit(item: IReview, files?: File[]): Observable<IReview> {
    let formData = this._collectForm(item, files);
    return this.http.patch<IReview>(`${this.fullUrl}`, formData, { headers: this.headers }).pipe(
      delay(300),
      retry(2)
    )
  }

  delete(id: number) {
    return this.http.delete<IReview>(`${this.fullUrl}?id=${id}`, { headers: this.headers }).pipe(
      delay(300),
      retry(2)
    )
  }
}
