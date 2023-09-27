import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientficheComponent } from './clientfiche/clientfiche.component';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClientRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    FormsModule , 
    ReactiveFormsModule


  ],
  providers:[ClientficheComponent],
  declarations: [ClientListComponent, ClientficheComponent]
})
export class ClientModule {
}
