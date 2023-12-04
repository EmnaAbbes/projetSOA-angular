import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-croissance',
  templateUrl: './croissance.component.html',
  styleUrls: ['./croissance.component.css']
})
export class CroissanceComponent implements OnInit{

  chart = new Chart({
    chart: {
      type: 'line',
     height: 350,
  
    },
    title: {
      text: 'Croissance du nombre des clients par mois',
      
    },
    xAxis: {
      categories: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ]
    },
    yAxis: {
      title: {
        text: 'Nombre des clients',
        
      }
    },
    series: [
      {
        name: 'clients',
        type: 'line',
        color: '#F5807B',
        data: [35, 42, 20 , 50, 31, 60, 10,22,45,16,37,11]
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
