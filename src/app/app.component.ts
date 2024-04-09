import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../widgets/header/header.component';
import { FooterComponent } from '../widgets/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'dmf';
  ngOnInit(): void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelectorAll('link[rel="icon"]').forEach(item => {
        item.setAttribute('href', 'assets/favicons/faviconWhite.ico')
      })
    }
  }
}
