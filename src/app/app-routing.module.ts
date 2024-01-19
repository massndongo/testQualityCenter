import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { DxoRangeContainerComponent } from 'devextreme-angular/ui/nested';
import { VenteComponent } from './components/vente/vente.component';
import { AnalyseComponent } from './components/analyse/analyse.component';

const routes: Routes = [
  {path: "overview", component: OverviewComponent},
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  {
    path: "overview", component: OverviewComponent
  },
  {
    path: "ventes", component: VenteComponent
  },
  {
    path: "analyses", component: AnalyseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
