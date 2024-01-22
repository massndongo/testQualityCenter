import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Ventes } from 'src/app/data/data';
import { ServicesService } from 'src/app/services.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  ngOnInit() {
    const ventesParMois = this.calculerVentesParMois(Ventes);
    const moisPlusRentable = this.trouverMoisPlusRentable(ventesParMois);


    const moisLabels = this.getMoisLabels();
    const nombreVentesMoisPlusRentable = ventesParMois[moisPlusRentable] || 1;

    const datasets = [{
      label: 'Ventes par mois',
      data: moisLabels.map(mois => ((ventesParMois[mois] || 0) / nombreVentesMoisPlusRentable)*100),
      fill: false,
      borderColor: 'blue',
    }];
    // console.log(ventesParMois);
    const tableauVenteParMois = Object.entries(ventesParMois).map(([mois, valeur]) => ({ mois, valeur }));

    // console.log(tableauVenteParMois);
    const tableauValeursNormalisees = tableauVenteParMois.map(entry =>
       (entry.valeur / nombreVentesMoisPlusRentable) * 100,
    );
    // console.log(tableauValeursNormalisees);


    const ctx = document.getElementById('ventesChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: moisLabels,
        datasets: [
          {
            label: 'Ventes par mois',
            data: tableauValeursNormalisees,
            backgroundColor: '#207fd4',
            borderRadius: 50,
            maxBarThickness: 20
          }],
      },
    });
  }

  calculerVentesParMois(ventes: any[]): { [key: string]: number } {
    const ventesParMois: { [key: string]: number } = {};

    ventes.forEach((vente) => {
      const mois = vente.date_de_commande.split('-')[2];


      if (!ventesParMois[mois]) {
        ventesParMois[mois] = 0;
      }

      ventesParMois[mois] += 1;
    });


    return ventesParMois;
  }

  trouverMoisPlusRentable(ventesParMois: { [key: string]: number }): string {
    let moisPlusRentable = '';
    let ventesMax = 0;

    for (const mois in ventesParMois) {
      if (ventesParMois[mois] > ventesMax) {
        ventesMax = ventesParMois[mois];
        moisPlusRentable = mois;
      }
    }



    return moisPlusRentable;
  }

  getMoisLabels(): string[] {
    return [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
  }
}

