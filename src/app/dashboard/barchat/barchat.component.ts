import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

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
      categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      crosshair: true,
      accessibility: {
        description: 'Countries'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'nombre des clients'
      }
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
        color:'#98EBED',
        data: [120,145,210,187,260,320]
      },
      
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit(): void {

  }
}