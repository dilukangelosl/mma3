import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactviewPage } from './factview';

@NgModule({
  declarations: [
    FactviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FactviewPage),
  ],
})
export class FactviewPageModule {}
