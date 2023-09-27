import { createReducer, on } from '@ngrx/store';
import { Client } from '../../../shared/models/client.model';
import * as ClientActions from './client.actions';

/**
 * Define the initial state of the clients array.
 */
const initialState: Client[] = [];

/**
 * Define the clientReducer using createReducer function from @ngrx/store.
 * This function handles actions related to clients.
 */
const clientReducer = createReducer(
  initialState,

  /**
   * Action handler for loading clients successfully.
   * @param state - Current state of clients array.
   * @param clients - New clients to replace the current state.
   * @returns New state with updated clients.
   */
  on(ClientActions.loadClientsSuccess, (state, { clients }) => clients),

  /**
   * Action handler for adding a new client.
   * @param state - Current state of clients array.
   * @param client - New client to add to the array.
   * @returns New state with the added client.
   */
  on(ClientActions.addClient, (state, { client }) => [...state, client]),

  /**
   * Action handler for updating an existing client.
   * @param state - Current state of clients array.
   * @param client - Updated client object.
   * @returns New state with the updated client.
   */
  on(ClientActions.updateClient, (state, { client }) =>
    state.map(item => item.id === client.id ? client : item)
  ),

  /**
   * Action handler for deleting a client by its id.
   * @param state - Current state of clients array.
   * @param id - Id of the client to be deleted.
   * @returns New state with the specified client removed.
   */
  on(ClientActions.deleteClient, (state, { id }) =>
    state.filter(client => client.id !== id)
  ),

  /**
   * Action handler for getting a client successfully.
   * @param state - Current state of clients array.
   * @param client - Retrieved client.
   * @returns New state with the retrieved client.
   */
  on(ClientActions.getClientSuccess, (state, { client }) => {
    const existingClientIndex = state.findIndex(item => item.id === client.id);

    if (existingClientIndex > -1) {
      const updatedState = [...state];
      updatedState[existingClientIndex] = client;
      return updatedState;
    }

    return [...state, client];
  })
);

/**
 * Export the clientReducer to be used in the application.
 */
export default clientReducer;
