import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsModule } from './clients/clients.module';
import { MainComponent } from './dashboard/main/main.component';
import { TopWidgetsComponent } from './dashboard/top-widgets/top-widgets.component';
import { CroissanceComponent } from './dashboard/croissance/croissance.component';
import { CategorieComponent } from './dashboard/categorie/categorie.component';
import { TopThreeComponent } from './dashboard/top-three/top-three.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'angular-highcharts';
import { BarchatComponent } from './dashboard/barchat/barchat.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './clients/index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TopWidgetsComponent,
    CroissanceComponent,
    CategorieComponent,
    TopThreeComponent,
    DashboardComponent,
    BarchatComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
