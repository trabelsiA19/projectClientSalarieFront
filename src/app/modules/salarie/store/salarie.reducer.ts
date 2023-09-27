
import { createReducer, on } from '@ngrx/store';
import { Salarie } from '../../../shared/models/salarie.model';
import * as SalarieActions from './salarie.actions';

/**
 * Define the initial state of the salaries array.
 */
const initialState: Salarie[] = [];

/**
 * Define the salarieReducer using createReducer function from @ngrx/store.
 * This function handles actions related to salaries.
 */
const salarieReducer = createReducer(
  initialState,

  /**
   * Action handler for loading salaries successfully.
   * @param state - Current state of salaries array.
   * @param salaries - New salaries to replace the current state.
   * @returns New state with updated salaries.
   */
  on(SalarieActions.loadSalariesSuccess, (state, { salaries }) => salaries),

  /**
   * Action handler for adding a new salarie.
   * @param state - Current state of salaries array.
   * @param salarie - New salarie to add to the array.
   * @returns New state with the added salarie.
   */
  on(SalarieActions.addSalarie, (state, { salarie }) => [...state, salarie]),

  /**
   * Action handler for updating an existing salarie.
   * @param state - Current state of salaries array.
   * @param salarie - Updated salarie object.
   * @returns New state with the updated salarie.
   */
  on(SalarieActions.updateSalarie, (state, { salarie }) =>
    state.map(item => item.id === salarie.id ? salarie : item)
  ),

  /**
   * Action handler for deleting a salarie by its id.
   * @param state - Current state of salaries array.
   * @param id - Id of the salarie to be deleted.
   * @returns New state with the specified salarie removed.
   */
  on(SalarieActions.deleteSalarie, (state, { id }) =>
    state.filter(salarie => salarie.id !== id)
  ),

  /**
   * Action handler for getting a salarie successfully.
   * @param state - Current state of salaries array.
   * @param salarie - Retrieved salarie.
   * @returns New state with the retrieved salarie.
   */
  on(SalarieActions.getSalarieSuccess, (state, { salarie }) => {
    const existingSalarieIndex = state.findIndex(item => item.id === salarie.id);

    if (existingSalarieIndex > -1) {
      const updatedState = [...state];
      updatedState[existingSalarieIndex] = salarie;
      return updatedState;
    }

    return [...state, salarie];
  })
);

/**
 * Export the salarieReducer to be used in the application.
 */
export default salarieReducer;
