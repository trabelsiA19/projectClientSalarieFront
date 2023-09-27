import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SalarieListComponent } from './salarie-list/salarie-list.component';


const routes: Routes = [
  {
    path: '',
    component: SalarieListComponent,
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalarieRoutingModule { }
