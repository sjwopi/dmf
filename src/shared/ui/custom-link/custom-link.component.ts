import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './custom-link.component.html',
  styleUrl: './custom-link.component.scss'
})
export class CustomLinkComponent {
  @Input() text: string = '';
  @Input() routerlink: string = '';
  @Input() size: 'xs' | 's' | 'm' = 's';
  @Input() weight: '' | 'light' = '';
  @Input() theme: '' | 'blue' | 'white' = '';
  @Input() variant: '' | 'ang' | 'hor' = '';
}
