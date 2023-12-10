import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface MonthlyCounts {
  [month: string]: number;
}
interface YearCounts {
  year: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  

  private apiUrl = 'http://localhost:8080/api/dashboard'; 

  constructor(private http: HttpClient) { }

  getClientStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client-statistics`);
  }

  getMonthlyClientCounts(): Observable<MonthlyCounts> {
    return this.http.get<MonthlyCounts>(`${this.apiUrl}/monthly-client-counts`);
  }

  getAgeClient() : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/client-ages`);
  }

  getYearClientCounts() : Observable<YearCounts> {
    return this.http.get<YearCounts>(`${this.apiUrl}/year-client-counts`);
  }
}