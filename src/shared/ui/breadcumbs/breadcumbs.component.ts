import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
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

  ngOnInit(): void {
    this.router.url.split('/').forEach((item, i) => {
      this.breadcrumbs.push({ name: this.names[i], link: item })
    })
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(this.names)
        this.breadcrumbs = []
        this.router.url.split('/').forEach((item, i) => {
          this.breadcrumbs.push({ name: this.names[i], link: item })
        })
      }
    })
  }
}
