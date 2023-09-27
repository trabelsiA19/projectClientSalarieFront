import { EntityState } from '@ngrx/entity';
import { Client } from '../../../shared/models/client.model';



export interface ClientState extends EntityState<Client> {}

export const initialClientState: ClientState = {
  ids: [],
  entities: {},
};
