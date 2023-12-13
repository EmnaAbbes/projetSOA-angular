import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../dashboard.service';
import { PointOptionsObject } from 'highcharts';
import { count } from 'rxjs';
interface YearCounts {
  year: number;
  count: number;
}
@Component({
  selector: 'app-barchat',
  templateUrl: './barchat.component.html',
  styleUrls: ['./barchat.component.css']
})
export class BarchatComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Nombre des clients au cours des années',
      align: 'center'
    },
    xAxis: {
      categories: [],
      crosshair: true,
      accessibility: {
        description: 'Years'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Nombre des clients'
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: 'Clients',
        type: 'column',
        color: '#98EBED',
        data: []
      },
    ],
    credits: {
      enabled: false
    }
  });

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getYearClientCounts().subscribe(
      (yearCounts:YearCounts) => {
        if (yearCounts && typeof yearCounts === 'object') {
          const data: PointOptionsObject[] = Object.keys(yearCounts).map(year => ({
            name: year,
            y:yearCounts.count
          }));

          const years = Object.keys(yearCounts);
          const count = Object.values(yearCounts);

          if (this.chart.ref?.xAxis[0]) {
            this.chart.ref.xAxis[0].setCategories(years, false);
            console.log(yearCounts)
          } else {
            console.log('X-axis not found.');
          }
          if (this.chart.ref) {
            this.chart.ref.series[0].setData(count, true);
          } else {
            console.log('Chart series not found.');
          }
          
        } else {
          console.error('Received data is not an object:', yearCounts);
        }
      },
      error => {
        console.error('Error fetching year counts:', error);
      }
    );
  }
}