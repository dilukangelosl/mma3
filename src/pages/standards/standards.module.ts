import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandardsPage } from './standards';

@NgModule({
  declarations: [
    StandardsPage,
  ],
  imports: [
    IonicPageModule.forChild(StandardsPage),
  ],
})
export class StandardsPageModule {}
