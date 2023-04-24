//librerias de módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TerminosComponent } from './pages/terminos/terminos.component';

//Decorador de módulos
@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
    TerminosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
