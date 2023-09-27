import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AppState } from '../../../app.state';
import { ClientService } from '../../../Core/services/clientService/client-service.service';
import * as ClientActions from '../store/client.actions';
import { Client } from '../../../shared/models/client.model';
@Component({
  selector: 'app-clientfiche',
  templateUrl: './clientfiche.component.html',
  styleUrls: ['./clientfiche.component.css']
})
export class ClientficheComponent  implements OnInit {
  clientForm!: FormGroup;
  clients$: any; 
  modif:boolean; 
  client:Client=new Client(); 
  
  constructor(
    
    public dialogRef: MatDialogRef<ClientficheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private fb: FormBuilder , private store: Store<AppState>,   private clientService: ClientService, )

  {   this.clients$ = store.pipe(select('clients'));
  this.modif = this.data.type;




}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      id:[],
      nom: ['', Validators.required],
      siret: ['', Validators.required]
    });
    if(!this.modif){
      this.clientForm.get("id")?.setValue(this.data.client.id)
      this.clientForm.get("siret")?.setValue(this.data.client.siret)
      this.clientForm.get("nom")?.setValue(this.data.client.nom)
    }

  }

  onSubmit() {
    if (this.clientForm.valid) {
      if(this.modif){
       
        const clientData = this.clientForm.value; 
        this.clientService.saveClient(clientData).subscribe(
        (newClient:any) => {
          this.store.dispatch(ClientActions.addClient({ client: newClient }));
          this.store.dispatch(ClientActions.loadClients());
          this.dialogRef.close()
        }
  
      );  
      }else{
       
        
        this.clientService.updateClient(this.clientForm.value).subscribe(
          (newClient:any) => {
            this.store.dispatch(ClientActions.updateClient({ client: newClient }));
            this.dialogRef.close()
          }
    
        );
      }
    
    }
  }
}
