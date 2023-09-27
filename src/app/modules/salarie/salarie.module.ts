import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SalarieListComponent } from './salarie-list/salarie-list.component';
import { SalarieRoutingModule } from './salarie-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FichesalarieComponent } from './fichesalarie/fichesalarie.component';

import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SalarieRoutingModule, 
    FontAwesomeModule,
    MatDialogModule,
    FormsModule , 
    ReactiveFormsModule
  ],
  providers:[FichesalarieComponent],
  declarations: [SalarieListComponent, FichesalarieComponent]
})
export class SalarieModule {
}
