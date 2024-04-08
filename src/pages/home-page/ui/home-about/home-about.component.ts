import { Component } from '@angular/core';
import { CustomLinkComponent } from '../../../../shared/ui/custom-link/custom-link.component';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CustomLinkComponent],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss'
})
export class HomeAboutComponent {

}
