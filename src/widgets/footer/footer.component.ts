import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CustomLinkComponent } from '../../shared/ui/custom-link/custom-link.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ButtonComponent, CustomLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
