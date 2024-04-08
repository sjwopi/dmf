import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  isHome: boolean = false;
  isOpenMobile: boolean = false;
  isOpenSearch: boolean = false;

  changeOpenMobile() {
    this.isOpenMobile = !this.isOpenMobile
  }
  changeOpenSearch() {
    this.isOpenSearch = !this.isOpenSearch
  }
  search(e: any) {
    console.log(e.target.value)
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if(event.url == '/') this.isHome = true;
        else this.isHome = false;
      }
    });
  }
}
