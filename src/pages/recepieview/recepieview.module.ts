import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecepieviewPage } from './recepieview';

@NgModule({
  declarations: [
    RecepieviewPage,
  ],
  imports: [
    IonicPageModule.forChild(RecepieviewPage),
  ],
})
export class RecepieviewPageModule {}
