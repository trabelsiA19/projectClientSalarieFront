import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { ClientService } from '../../../Core/services/clientService/client-service.service';
import { Client } from '../../../shared/models/client.model';
import * as ClientActions from '../store/client.actions';
import * as fa from '@fortawesome/free-solid-svg-icons';

import {MatDialog} from "@angular/material/dialog";
import { ClientficheComponent } from '../clientfiche/clientfiche.component';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients$: any; 
  client:Client=new Client();
    fa = fa;

  constructor(private store: Store<AppState>,  
    public dialog: MatDialog) {
    this.clients$ = store.pipe(select('clients'));
  }

  ngOnInit(): void {
    this.store.dispatch(ClientActions.loadClients());
  }

  deleteClient(id: number){
    this.store.dispatch(ClientActions.deleteClient({ id }));
  }



  add(){
    this.openDialog(true,null)
  }

  update(id:any,client:any){
    this.openDialog(false,client)


  }


  openDialog(ajoutOrModif:any, client:any): void {

    const dialogRef = this.dialog.open(ClientficheComponent, {
      width: '650px',
      data: {
        type:ajoutOrModif,
        client:client

      },
  

    });
    
    dialogRef.afterClosed().subscribe((result: any) => {
      // Handle dialog close event
    });
  }
}
