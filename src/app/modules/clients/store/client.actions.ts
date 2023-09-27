/**
 * @description Actions for client operations
 */
import { createAction, props } from '@ngrx/store';
import { Client } from '../../../shared/models/client.model';

/**
 * Action to add a client
 * @param {Client} client - The client to be added
 */
export const addClient = createAction('[Client] Add Client', props<{ client: Client }>());

/**
 * Action to update a client
 * @param {Client} client - The updated client
 */
export const updateClient = createAction('[Client] Update Client', props<{ client: Client }>());

/**
 * Action to delete a client
 * @param {number} id - The ID of the client to be deleted
 */
export const deleteClient = createAction('[Client] Delete Client', props<{ id: number }>());

/**
 * Action to load clients
 */
export const loadClients = createAction('[Client] Load Clients');

/**
 * Action dispatched upon successful loading of clients
 * @param {Client[]} clients - An array of loaded clients
 */
export const loadClientsSuccess = createAction('[Client] Load Clients Success', props<{ clients: Client[] }>());

/**
 * Action to get a specific client by ID
 * @param {number} id - The ID of the client to retrieve
 */
export const getClient = createAction('[Client] Get Client', props<{ id: number }>());

/**
 * Action dispatched upon successful retrieval of a client
 * @param {Client} client - The retrieved client
 */
export const getClientSuccess = createAction('[Client] Get Client Success', props<{ client: Client }>());

/**
 * Action dispatched if there is an error while getting a client
 * @param {any} error - The error that occurred
 */
export const getClientFailure = createAction('[Client] Get Client Failure', props<{ error: any }>());
