import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DxMenuModule } from "devextreme-angular";
import { OverviewComponent } from './components/overview/overview.component';
import { AnalyseComponent } from './components/analyse/analyse.component';
import { VenteComponent } from './components/vente/vente.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
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
