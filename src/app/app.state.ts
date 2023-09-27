// app.state.ts

import { ClientState } from "./modules/clients/store/client.state";
import { SalarieState } from "./modules/salarie/store/salarie.state";


export interface AppState {
  clients: ClientState;
  salaries: SalarieState;
}
