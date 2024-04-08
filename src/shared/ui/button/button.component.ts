import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() routerlink: string = '';
  @Input() theme: '' | 'invert' = '';
  @Input() size: 'xs' | 'm' = 'xs';
  @Input() width: '' | 'w100' = '';
}
