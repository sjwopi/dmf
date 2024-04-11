import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, delay, retry, tap } from 'rxjs';
import { ICategory } from '../models/category.model';
import { BASE_URL } from '../../global';

const data: ICategory[] = [
  {
    id: 1,
    name: 'для школ',
    imagePath: 'assets/img/category/category1.jpeg',
    children: [
      {
        id: 7,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [
          {
            id: 25,
            name: "asf;kgjabskchb al;gjnbq",
            imagePath: "assets/img/category/category3.jpg",
            children: [],
            parentId: 7
          },
          {
            id: 26,
            name: "asf;kgjabskchb al;gjnbq",
            imagePath: "assets/img/category/category3.jpg",
            children: [],
            parentId: 7
          },
          {
            id: 27,
            name: "asf;kgjabskchb al;gjnbq",
            imagePath: "assets/img/category/category3.jpg",
            children: [],
            parentId: 7
          }
        ],
        parentId: 1
      },
      {
        id: 8,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 1
      },
      {
        id: 9,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 1
      }
    ],
    parentId: null
  },
  {
    id: 2,
    name: 'для детских садов',
    imagePath: 'assets/img/category/category2.jpg',
    children: [
      {
        id: 10,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 2
      },
      {
        id: 11,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 2
      },
      {
        id: 12,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 2
      }
    ],
    parentId: null
  },
  {
    id: 3,
    name: 'для дома',
    imagePath: 'assets/img/category/category3.jpg',
    children: [
      {
        id: 13,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 3
      },
      {
        id: 14,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 3
      },
      {
        id: 15,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 3
      }
    ],
    parentId: null
  },
  {
    id: 4,
    name: 'для офисов и бизнеса',
    imagePath: 'assets/img/category/category4.jpeg',
    children: [
      {
        id: 16,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 4
      },
      {
        id: 17,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 4
      },
      {
        id: 18,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 4
      }
    ],
    parentId: null
  },
  {
    id: 5,
    name: 'Белорусская мебель «ПИНСКДРЕВ»',
    imagePath: 'assets/img/category/category5.jpg',
    children: [
      {
        id: 19,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 5
      },
      {
        id: 20,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 5
      },
      {
        id: 21,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 5
      }
    ],
    parentId: null
  },
  {
    id: 6,
    name: 'мебель на заказ',
    imagePath: 'assets/img/category/category6.jpg',
    children: [
      {
        id: 22,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 6
      },
      {
        id: 23,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 6
      },
      {
        id: 24,
        name: "asdf",
        imagePath: "assets/img/category/category5.jpg",
        children: [],
        parentId: 6
      }
    ],
    parentId: null
  },
]

const dataAll: ICategory[] = []
data.forEach(item => {
  dataAll.push(item)
  item.children?.forEach(child => {
    dataAll.push(child)
    child.children?.forEach(childSub => {
      dataAll.push(childSub)
    })
  })
})

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient, private router: Router) { }
  baseUrl: string = BASE_URL;
  entityUrl: string = 'api/admin/categories'
  fullUrl: string = `${this.baseUrl}${this.entityUrl}`

  headers: {headers: HttpHeaders} = {headers: new HttpHeaders({ 'Authorization': 'asff' })}
  categories: ICategory[] = [];

  private _collectForm(item: ICategory, file?: File): FormData {
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

  isSub(cat: ICategory): boolean {
    return cat.parentId ? true : false;
  }

  getAll(): ICategory[] {
    return data;
  }

  getAllCategories(): ICategory[] {
    return dataAll;
  }

  getById(id: number): ICategory {
    return dataAll.filter(item => item.id == id)[0]
  }

  create(item: ICategory, file?: File): Observable<ICategory> {
    let formData = this._collectForm(item, file);
    return this.http.post<ICategory>(`${this.fullUrl}`, formData, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }

  edit(item: ICategory, file?: File): Observable<ICategory> {
    let formData = this._collectForm(item, file);
    return this.http.patch<ICategory>(`${this.fullUrl}`, formData, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }

  delete(id: number) {
    return this.http.delete<ICategory>(`${this.fullUrl}?id=${id}`, this.headers).pipe(
      delay(300),
      retry(2)
    )
  }
}
