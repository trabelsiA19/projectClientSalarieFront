import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'client',

    loadChildren: () => import('./modules/clients/client.module').then(m => m.ClientModule)
  },
  {
    path: 'salaries',
    loadChildren: () => import('./modules/salarie/salarie.module').then(m => m.SalarieModule)
  },


  {
    path: '**',
    redirectTo: 'client',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule {
}

