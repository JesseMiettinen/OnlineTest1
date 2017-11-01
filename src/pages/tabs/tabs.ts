//Jesse Miettinen 1601555

import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'AboutPage';
  tab2Root: any = 'TargetedCvPage';
  tab3Root: any = 'ProjectWorkPage';
  tab4Root: any = 'ExtraCurriculumPage';
  tab5Root: any = 'ContactPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    
    this.myIndex = navParams.data.tabIndex || 0;
  }
}



