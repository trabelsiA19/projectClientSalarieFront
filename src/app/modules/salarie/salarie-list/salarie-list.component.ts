import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {MatDialog} from "@angular/material/dialog";
import { AppState } from '../../../app.state';
import * as SalarieActions from '../store/salarie.actions';
import * as fa from '@fortawesome/free-solid-svg-icons';
import { FichesalarieComponent } from '../fichesalarie/fichesalarie.component';

@Component({
  selector: 'app-salarie-list',
  templateUrl: './salarie-list.component.html',
  styleUrls: ['./salarie-list.component.css']
})
export class SalarieListComponent implements OnInit {
  fa = fa;
  salaries$:any; 

  constructor(private store: Store<AppState>,public dialog: MatDialog) {
    this.salaries$ = store.pipe(select('salaries'));
    
  }

  ngOnInit(): void {
    this.store.dispatch(SalarieActions.loadSalaries()); 
  }

  deleteSalarie(id:any){
    this.store.dispatch(SalarieActions.deleteSalarie({ id }));
  }

  






  
  add(){
    this.openDialog(true,null)
  }

  update(id:any,salarie:any){
    this.openDialog(false,salarie)
  }


  openDialog(ajoutOrModif:any, salarie:any): void {

    const dialogRef = this.dialog.open(FichesalarieComponent, {
      width: '650px',
      data: {
        type:ajoutOrModif,
        salarie:salarie

      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }
}
