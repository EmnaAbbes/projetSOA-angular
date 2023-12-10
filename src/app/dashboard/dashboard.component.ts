import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalClients: number;
  newClients: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchClientStatistics();
  }

  fetchClientStatistics(): void {
    this.dashboardService.getClientStatistics().subscribe(
      data => {
        this.totalClients = data.totalClients;
        this.newClients = data.newClients;
        console.log('Total Clients:', this.totalClients);
        console.log('New Clients:', this.newClients);
      },
      error => {
        console.error('Error fetching client statistics:', error);
      }
    );
  }
}
