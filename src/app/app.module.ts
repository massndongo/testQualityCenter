import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'; 
import { DxMenuModule } from "devextreme-angular";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { OverviewComponent } from './components/container/overview/overview.component';
import { VenteComponent } from './components/container/vente/vente.component';
import { AnalyseComponent } from './components/container/analyse/analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContainerComponent,
    OverviewComponent,
    VenteComponent,
    AnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
