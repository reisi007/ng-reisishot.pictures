import {NgModule} from '@angular/core';
import {FullWebsiteComponent} from './full-website/full-website.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {FormComponent} from './form/form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FullWebsiteComponent,
    MenuComponent,
    FooterComponent,
    FormComponent,
  ],
  exports: [FullWebsiteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class AppCommonModule {
}
