import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ClientService } from '../../../Core/services/clientService/client-service.service';
import * as ClientActions from './client.actions';

@Injectable()
export class ClientEffects {

  // Effect for adding a client
  addClient$ = createEffect(() => this.actions$.pipe(
    ofType(ClientActions.addClient), // Listen for addClient action
    switchMap(({ client }) => this.clientService.saveClient(client) // Use switchMap to handle async operations
      .pipe(
        map(() => ClientActions.loadClients()), // Dispatch loadClients action on success
        catchError(() => of({ type: 'Error deleting client' })) // Handle errors gracefully
      ))
    )
  );

  // Effect for updating a client
  updateClient$ = createEffect(() => this.actions$.pipe(
    ofType(ClientActions.updateClient), // Listen for updateClient action
    switchMap(({ client }) => this.clientService.updateClient(client) // Use switchMap to handle async operations
      .pipe(
        map(() => ClientActions.loadClients()), // Dispatch loadClients action on success
        catchError(() => of({ type: 'Error updating client' })) // Handle errors gracefully
      ))
    )
  );

  // Effect for deleting a client
  deleteClient$ = createEffect(() => this.actions$.pipe(
    ofType(ClientActions.deleteClient), // Listen for deleteClient action
    switchMap(({ id }) => this.clientService.deleteClient(id) // Use switchMap to handle async operations
      .pipe(
        map(() => ClientActions.loadClients()), // Dispatch loadClients action on success
        catchError(() => of({ type: 'Error deleting client' })) // Handle errors gracefully
      ))
    )
  );

  // Effect for loading all clients
  loadClients$ = createEffect(() => this.actions$.pipe(
    ofType(ClientActions.loadClients), // Listen for loadClients action
    switchMap(() => this.clientService.getAllClients() // Use switchMap to handle async operations
      .pipe(
        map(clients => ClientActions.loadClientsSuccess({ clients })), // Dispatch loadClientsSuccess action on success
        catchError(() => of({ type: 'Error loading clients' })) // Handle errors gracefully
      ))
    )
  );

  // Effect for getting a specific client
  getClient$ = createEffect(() => this.actions$.pipe(
    ofType(ClientActions.getClient), // Listen for getClient action
    switchMap(({ id }) => this.clientService.getClientById(id) // Use switchMap to handle async operations
      .pipe(
        map(client => ClientActions.getClientSuccess({ client })), // Dispatch getClientSuccess action on success
        catchError(() => of({ type: 'Error getting client' })) // Handle errors gracefully
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}
}
