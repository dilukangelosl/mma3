import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedviewPage } from './feedview';

@NgModule({
  declarations: [
    FeedviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedviewPage),
  ],
})
export class FeedviewPageModule {}
