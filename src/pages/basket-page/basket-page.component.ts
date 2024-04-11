import { Component, OnInit } from '@angular/core';
import { BreadcumbsComponent } from '../../shared/ui/breadcumbs/breadcumbs.component';
import { CatalogItemCardComponent } from '../../shared/ui/catalog-item-card/catalog-item-card.component';
import { IProduct } from '../../models/product.model';
import { ProductsService } from '../../services/product.service';
import { InputComponent } from '../../shared/ui/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-basket-page',
  standalone: true,
  imports: [BreadcumbsComponent, CatalogItemCardComponent, InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.scss'
})
export class BasketPageComponent implements OnInit {
  constructor(public productsService: ProductsService) { }
  names: string[] = ['Главная', 'Корзина']
  product!: IProduct
  basketForm!: FormGroup
  phone: string = ''

  inputPhone(e: any) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      /* для 8 */
      if (e.target.value[0] == "8") {
        if (e.target.value.length == 1) e.target.value += " ("
        else if (e.target.value.length == 6) e.target.value += ") "
        else if (e.target.value.length == 11 || e.target.value.length == 14) e.target.value += "-"
        else if (e.target.value.length > 14) {
          this.phone = e.target.value.split(' ')[0] + e.target.value.split(' ')[1].slice(1, 4) + e.target.value.split(' ')[2].split('-').join('');
        }

      }
      /* для +7 */
      else {
        if (e.target.value.length == 7) e.target.value += ") "
        else if (e.target.value.length == 12 || e.target.value.length == 15) e.target.value += "-"
        else if (e.target.value.length > 15) {
          this.phone = e.target.value.split(' ')[0] + e.target.value.split(' ')[1].slice(1, 4) + e.target.value.split(' ')[2].split('-').join('');
        }
      }
    }
  }

/*   executeImportantAction() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token) => {
      this.basketForm.controls['captchaToken'].setValue(token);
      this.create();
    });
  } */

  create() {
    console.log(this.basketForm.value)
  }

  ngOnInit(): void {
    this.product = this.productsService.getById(1)

    this.basketForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{2,}\.[A-Za-z0-9]{2,}')]),
      'name': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'phone': new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }
}
