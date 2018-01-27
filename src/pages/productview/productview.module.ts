import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductviewPage } from './productview';

@NgModule({
  declarations: [
    ProductviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductviewPage),
  ],
})
export class ProductviewPageModule {}
