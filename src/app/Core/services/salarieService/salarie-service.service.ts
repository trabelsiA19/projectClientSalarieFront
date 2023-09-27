import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';
import { Salarie } from '../../../shared/models/salarie.model';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {

  // URL de base de l'API pour les salariés
  private baseUrl =    environment.urls.backEnd+'salaries';

  constructor(private http: HttpClient) { }

  // Récupère tous les salariés depuis l'API
  getAllSalaries(): Observable<Salarie[]> {
    return this.http.get<Salarie[]>(this.baseUrl);
  }

  // Récupère un salarié spécifique par son ID depuis l'API
  getSalarieById(id: number): Observable<Salarie> {
    return this.http.get<Salarie>(`${this.baseUrl}/${id}`);
  }

  // Enregistre un nouveau salarié dans l'API
  saveSalarie(salarie: Salarie): Observable<any> {
    return this.http.post<any>(this.baseUrl, salarie);
  }

  // Supprime un salarié par son ID depuis l'API
  deleteSalarie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  // Met à jour les informations d'un salarié dans l'API
  updateSalarie(salarie: Salarie): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${salarie.id}`, salarie);
  }
}
