import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetedCvPage } from './targeted-cv';

@NgModule({
  declarations: [
    TargetedCvPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetedCvPage),
  ],
})
export class TargetedCvPageModule {}
