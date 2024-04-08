import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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

export class BreadcumbsComponent  implements OnInit {
  constructor(private router: Router) { }
  @Input() names: string[] = []
  breadcrumbs: IBreadcumb[] = []

  ngOnInit(): void {
    console.log(this.names)
    this.router.url.split('/').forEach((item, i) => {
      this.breadcrumbs.push({ name: this.names[i], link: item })
    })
  }
}
