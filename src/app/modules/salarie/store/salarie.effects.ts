import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SalarieService } from '../../../Core/services/salarieService/salarie-service.service';

import * as SalarieActions from './salarie.actions';

@Injectable()
export class SalarieEffects {

  // Effect to load all salaries
  loadSalaries$ = createEffect(() => this.actions$.pipe(
    ofType(SalarieActions.loadSalaries),
    mergeMap(() => this.salarieService.getAllSalaries()
      .pipe(
        map(salaries => SalarieActions.loadSalariesSuccess({ salaries })),
        catchError(() => EMPTY)
      ))
    )
  );

  // Effect to get a specific salarie by ID
  getSalarie$ = createEffect(() => this.actions$.pipe(
    ofType(SalarieActions.getSalarie),
    mergeMap(({ id }) => this.salarieService.getSalarieById(id)
      .pipe(
        map(salarie => SalarieActions.getSalarieSuccess({ salarie })),
        catchError(() => EMPTY)
      ))
    )
  );

  // Effect to add a new salarie
  addSalarie$ = createEffect(() => this.actions$.pipe(
    ofType(SalarieActions.addSalarie),
    mergeMap(({ salarie }) => this.salarieService.saveSalarie(salarie)
      .pipe(
        map(() => SalarieActions.loadSalaries()), // Reload salaries after adding a new one
        catchError(() => EMPTY)
      ))
    )
  );

  // Effect to update an existing salarie
  updateSalarie$ = createEffect(() => this.actions$.pipe(
    ofType(SalarieActions.updateSalarie),
    mergeMap(({ salarie }) => this.salarieService.updateSalarie(salarie)
      .pipe(
        map(() => SalarieActions.loadSalaries()), // Reload salaries after updating
        catchError(() => EMPTY)
      ))
    )
  );

  // Effect to delete an existing salarie
  deleteSalarie$ = createEffect(() => this.actions$.pipe(
    ofType(SalarieActions.deleteSalarie),
    mergeMap(({ id }) => this.salarieService.deleteSalarie(id)
      .pipe(
        map(() => SalarieActions.loadSalaries()), // Reload salaries after deleting
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private salarieService: SalarieService // Ensure to inject the correct service
  ) {}
}
