import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Ventes } from 'src/app/data/data';
// import * as Chart from 'chart.js';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit{

  dataSource: any
  ngOnInit(): void {
      this.dataSource = Ventes
  }

}
