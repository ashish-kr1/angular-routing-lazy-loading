import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new.component';

const routes: Routes = [
 { path: '', component: NewComponent },
  {
    path: '',
    children: [ {
      path: 'child1',
      component: NewComponent
                 },
    {
      path: 'child2',
      component: NewComponent
    }
              ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild(routes)
  ],

  declarations: [
    NewComponent
  ]
})
export class NewModule { }
