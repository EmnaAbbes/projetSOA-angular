import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three',
  templateUrl: './top-three.component.html',
  styleUrls: ['./top-three.component.css']
})
export class TopThreeComponent implements OnInit{

  chart = new Chart({
    chart: {
      type: 'bar',
     height: 225,
  
    },
    title: {
      text: 'Les Clients Fidèles'
    },
    xAxis: {
      categories: [
        'Emna Abbes', 'Khouloud Bdiri', 'Wael Ben Abdallah'
      ]
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Emna Abbes',
            y: 395,
            color:'#F3A6A3'
          },
          {
            name: 'Khouloud Bdiri',
            y: 385,
            color:'#8DFD8A'
          },
          {
            name: 'Wael Ben Abdallah',
            y: 275,
            color:'#98EBED'
          },
        ]
      },
    ],
    credits: {
      enabled: false
    }
      
  });
  
  constructor() {}

  ngOnInit(): void {
    
  }
}
