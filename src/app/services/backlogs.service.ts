import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Backlog } from '../domene/backlog';

@Injectable({
  providedIn: 'root'
})
export class BacklogsService {
  private backlogUrl = 'api/backlogs/';

  constructor(private http: HttpClient)  { }

  getBacklogs(): Observable< Backlog[] > {
    return this.http.get< Backlog[] >(this.backlogUrl);
  }

  getBacklog(id: string): Observable< Backlog > {
    return this.http.get<Backlog>(`${this.backlogUrl}/${id}`);
  }
}
