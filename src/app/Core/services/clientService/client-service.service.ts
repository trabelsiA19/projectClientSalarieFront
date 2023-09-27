import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { Client } from '../../../shared/models/client.model';
import { ClientDTO } from '../../../shared/models/clientDTO';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = environment.urls.backEnd+"clients";

  constructor(private http: HttpClient) { }

  // Récupère la liste de tous les clients
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + "/AllClients");
  }

  // Récupère un client par son ID
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  // Enregistre un nouveau client en utilisant un objet ClientDTO
  saveClient(client: ClientDTO): Observable<any> {
    return this.http.post<any>(this.baseUrl, client);
  }

  // Supprime un client en utilisant son ID
  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  // Met à jour les informations d'un client en utilisant un objet Client
  updateClient(client: Client): Observable<any> {

    return this.http.put<any>(this.baseUrl + "/" + client.id, client);
  }
}
