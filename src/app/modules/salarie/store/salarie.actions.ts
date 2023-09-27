/**
 * Action Creators for Salarie Module
 * These actions define the operations that can be performed on Salarie entities.
 * They are used to trigger state changes via NgRx Store.
 */

// Importing necessary dependencies
import { createAction, props } from '@ngrx/store';
import { Salarie } from '../../../shared/models/salarie.model'; // Importing the Salarie model

/**
 * Action to Add a Salarie
 * @param salarie - The Salarie object to be added
 * @returns An action with the Salarie object as payload
 */
export const addSalarie = createAction('[Salarie] Add Salarie', props<{ salarie: Salarie }>());

/**
 * Action to Update a Salarie
 * @param salarie - The updated Salarie object
 * @returns An action with the updated Salarie object as payload
 */
export const updateSalarie = createAction('[Salarie] Update Salarie', props<{ salarie: Salarie }>());

/**
 * Action to Delete a Salarie
 * @param id - The ID of the Salarie to be deleted
 * @returns An action with the ID of the Salarie as payload
 */
export const deleteSalarie = createAction('[Salarie] Delete Salarie', props<{ id: number }>());

/**
 * Action to Load Salaries
 * This action is used to trigger the loading of Salarie entities from a data source.
 * @returns An action without payload
 */
export const loadSalaries = createAction('[Salarie] Load Salaries');

/**
 * Action to Load Salaries Success
 * This action is dispatched when the loading of Salarie entities is successful.
 * @param salaries - An array of loaded Salarie objects
 * @returns An action with the loaded Salarie objects as payload
 */
export const loadSalariesSuccess = createAction('[Salarie] Load Salaries Success', props<{ salaries: Salarie[] }>());

/**
 * Action to Get a Salarie by ID
 * @param id - The ID of the Salarie to be retrieved
 * @returns An action with the ID of the Salarie as payload
 */
export const getSalarie = createAction('[Salarie] Get Salarie', props<{ id: number }>());

/**
 * Action to Get Salarie Success
 * This action is dispatched when the retrieval of a Salarie entity is successful.
 * @param salarie - The retrieved Salarie object
 * @returns An action with the retrieved Salarie object as payload
 */
export const getSalarieSuccess = createAction('[Salarie] Get Salarie Success', props<{ salarie: Salarie }>());
