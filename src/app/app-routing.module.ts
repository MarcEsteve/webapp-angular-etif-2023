import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const app_routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  //Aquí dins va la configuración que donarem a AppRoutingModule
})
export class AppRoutingModule {
  //Mòdul per a la navegació
}
