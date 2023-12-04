import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  chart = new Chart({
    chart: {
      type: 'pie',
     height: 350,
  
    },
    title: {
      text: 'Categories des clients'
    },
    xAxis: {
      categories: [
        'Jeunes', 'Adultes', 'Adolescents'
      ]
    },
    yAxis: {
      title: {
        text: 'Nombre des clients %'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Jeunes',
            y: 45.0,
            color:'#F3A6A3'
          },
          {
            name: 'Adultes',
            y: 30.0,
            color:'#8DFD8A'
          },
          {
            name: 'Adolescents',
            y: 25.0,
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
