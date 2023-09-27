import { Client } from "./client.model";

export class Salarie {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateNaissance?: string;
  client?:Client; 
}
