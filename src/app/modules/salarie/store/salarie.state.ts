import { EntityState } from '@ngrx/entity';
import { Salarie } from '../../../shared/models/salarie.model';



export interface SalarieState extends EntityState<Salarie> {}


export const initialSalarieState: SalarieState = {
  ids: [],
  entities: {},
};
