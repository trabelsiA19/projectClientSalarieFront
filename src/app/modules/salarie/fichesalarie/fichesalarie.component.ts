

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as ClientActions from '../../clients/store/client.actions';

import { AppState } from '../../../app.state';
import * as SalarieActions from '../store/salarie.actions';

import { Salarie } from '../../../shared/models/salarie.model';
import { SalarieService } from '../../../Core/services/salarieService/salarie-service.service';
@Component({
  selector: 'app-fichesalarie',
  templateUrl: './fichesalarie.component.html',
  styleUrls: ['./fichesalarie.component.css']
})
export class FichesalarieComponent implements OnInit {
  salarieForm!: FormGroup;
  salaries$: any;
  clients$: any;
  modif: boolean;
  salarie: Salarie = new Salarie();
  disableSelect:boolean=false
  constructor(

    public dialogRef: MatDialogRef<FichesalarieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder, private store: Store<AppState>, private salariesService: SalarieService,) {
    this.salaries$ = store.pipe(select('salaries'));
    this.clients$ = store.pipe(select('clients'));
    this.modif = this.data.type;




  }

  ngOnInit(): void {
    this.salarieForm = this.fb.group({
      id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      client: [''], // Assuming client is not editable in this form
    });
    if (!this.modif) {
      this.salarieForm.get("id")?.setValue(this.data.salarie.id)

      this.salarieForm.get("nom")?.setValue(this.data.salarie.nom)

      this.salarieForm.get("prenom")?.setValue(this.data.salarie.prenom)
      this.salarieForm.get("email")?.setValue(this.data.salarie.email)
      this.salarieForm.get("birthDate")?.setValue(this.data.salarie.birthDate)
      this.disableSelect = true;
      this.clients$.subscribe((clients: any) => {

        clients.forEach((element: any) => {

          if (element['id'] === this.data.salarie.client.id) {

            this.salarieForm.get('client')?.setValue(element.id);

          }

        });
      

      });

    }
    this.store.dispatch(ClientActions.loadClients());
  }
  close() {
    this.salarieForm.reset()
    this.dialogRef.close()
  }

  onSubmit() {
    if (this.salarieForm.valid) {
      if (this.modif) {

        const salarieData = this.salarieForm.value;
        this.salarie.nom = salarieData.nom
        this.salarie.prenom = salarieData.prenom
        this.salarie.email = salarieData.email
        this.salarie.dateNaissance = salarieData.birthDate
        if (this.salarie && this.salarie.client) {
          this.salarie.client.id = salarieData.client;
        }
        this.salariesService.saveSalarie(salarieData).subscribe(
          (newSalarie: any) => {
            this.store.dispatch(SalarieActions.addSalarie({ salarie: newSalarie }));
            this.store.dispatch(SalarieActions.loadSalaries());
            this.close()
          }

        );
      } else {


        this.salariesService.updateSalarie(this.salarieForm.value).subscribe(
          (newSalarie: any) => {
            this.store.dispatch(SalarieActions.updateSalarie({ salarie: newSalarie }));
            this.close()
          }

        );
      }

    }
  }
}
