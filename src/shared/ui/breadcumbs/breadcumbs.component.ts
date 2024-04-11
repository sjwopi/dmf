import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';
import { ICategory } from '../../../models/category.model';

interface IBreadcumb {
  name: string;
  link: string;
}

@Component({
  selector: 'app-breadcumbs',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './breadcumbs.component.html',
  styleUrl: './breadcumbs.component.scss'
})

export class BreadcumbsComponent implements OnInit {
  constructor(private router: Router) { }
  @Input() names: string[] = []
  breadcrumbs: IBreadcumb[] = []

  changeUrl() {
    setTimeout(() => {
      this.breadcrumbs = []
      const acc: string[] = []
      this.router.url.split('/').forEach((item, i) => {
        acc.push(item)
        this.breadcrumbs.push({ name: this.names[i], link: acc.join('/') })
      })
      this.breadcrumbs = [...this.breadcrumbs]
    }, 100)
  }

  ngOnInit(): void {
    this.changeUrl()

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.changeUrl()
      }
    })
  }
}
