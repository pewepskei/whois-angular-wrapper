import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WhoisService {
  private apiUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  getWhoisData(domain: string, infoType: string = 'all') {
    return this.http.get(`${this.apiUrl}/api/whois-lookup?domain=${domain}&info_type=${infoType}`);
  }
}

