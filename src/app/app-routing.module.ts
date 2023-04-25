import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const app_routes: Routes = [{ path: '', component: PortfolioComponent }];

@NgModule({
  //Aqu� dins va la configuraci�n que donarem a AppRoutingModule
})
export class AppRoutingModule {
  //M�dul per a la navegaci�
}
