import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  chart: any = [];


  constructor(
    private dataService: ServicesService
  ){

  }

  ngOnInit() {

    const ele = this.dataService.getAllVente().map(
      (el) => el.date_de_commande
    )
    
    
    

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Blue'],
        datasets: [
          {
            data: this.dataService.getAllVente,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  }

