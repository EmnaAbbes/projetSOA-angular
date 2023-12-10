import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 350,plotBorderWidth: 0,
    },
    title: {
      text: 'Categories des clients'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'Nombre des clients %'
      }
    },
    series: [
      {
        type: 'pie',
        data: []
      },
    ],
    credits: {
      enabled: false
    }
  });

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchClientAges();
  }

  fetchClientAges(): void {
    this.dashboardService.getAgeClient().subscribe(
      (ages: number[]) => {
        const ageRanges = {
          'Jeunes': { min: 18, max: 30 },
          'Adultes': { min: 31, max: 50 },
          'Vieillesse': { min: 51, max: 100 } 
        };

        const categorizedData = this.categorizeAges(ages, ageRanges);

        this.chart.addSeries({
          type: 'pie',
          data: categorizedData.map((item) => ({
            name: item.name,
            y: item.value,
            color: this.getColorByCategory(item.name)
          }))
          .filter(item => item.y > 0) 
        }, true, true);

        this.chart.ref$.subscribe(chart => {
          chart.xAxis[0].setCategories(Object.keys(ageRanges), true);
          chart.update({
            chart: {
              plotBorderWidth: 0
            }
          });
        });
      },
      error => {
        console.error('Error fetching client ages:', error);
      }
    );
  }

  categorizeAges(ages: number[], ageRanges: any): any[] {
    const groupedAges: { [category: string]: number } = {
      'Jeunes': 0,
      'Adultes': 0,
      'Vieillesse': 0
    };

    ages.forEach(age => {
      for (const category in ageRanges) {
        if (
          age >= ageRanges[category].min &&
          age <= ageRanges[category].max
        ) {
          groupedAges[category]++;
          break;
        }
      }
    });

    return Object.keys(groupedAges).map(category => ({
      name: category,
      value: groupedAges[category],
      ageRange: ageRanges[category] 
    }));
  }

  getColorByCategory(category: string): string {
    const colors: { [key: string]: string } = {
      'Jeunes': '#F3A6A3',
      'Adultes': '#8DFD8A',
      'Vieillesse': '#98EBED'
    };
    return colors[category as keyof typeof colors] || '#000000'; 
  }
}
