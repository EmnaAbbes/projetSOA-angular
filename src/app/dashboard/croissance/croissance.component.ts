import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../dashboard.service';

interface MonthlyCounts {
  [month: string]: number;
}

@Component({
  selector: 'app-croissance',
  templateUrl: './croissance.component.html',
  styleUrls: ['./croissance.component.css']
})
export class CroissanceComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
      height: 350,
    },
    title: {
      text: 'Croissance du nombre des clients par mois',
    },
    xAxis: {
      title: {
        text: 'Les mois',
      },
    },
    yAxis: {
      title: {
        text: 'Nombre des clients',
      },
  
    },
    series: [
      {
        name: 'clients',
        type: 'line',
        color: '#F5807B',
        data: [] 
      },
    ],
    credits: {
      enabled: false
    }
  });

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getMonthlyClientCounts().subscribe(
      (monthlyCounts: MonthlyCounts) => {
        const months = Object.keys(monthlyCounts);
        const counts = Object.values(monthlyCounts);
        if (this.chart.ref) {
          this.chart.ref.xAxis[0].update({ categories: months }, true);
          this.chart.ref.yAxis[0].update({ categories: [] });
          this.chart.ref.series[0].setData(counts, true);
        }
      },
      (error) => {
        console.error('Error fetching monthly client counts', error);
      }
    );
  }
}
