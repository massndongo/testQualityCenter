import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/container/overview/overview.component';
import { ContainerComponent } from './components/container/container.component';
import { VenteComponent } from './components/container/vente/vente.component';
import { AnalyseComponent } from './components/container/analyse/analyse.component';

const routes: Routes = [
  {path: "overview", component: OverviewComponent},
  { path: '',   redirectTo: '/overview', pathMatch: 'full' },
  {path: "container", component:ContainerComponent, 
    children: [
      {
        path: "overview", component: OverviewComponent
      },
      {
        path: "ventes", component: VenteComponent
      },
      {
        path: "analyses", component: AnalyseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
