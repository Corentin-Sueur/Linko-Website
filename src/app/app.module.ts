import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanniereComponent } from './banniere/banniere.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEtudiantsComponent } from './page-etudiants/page-etudiants.component';
import { PageNousDecouvrirComponent } from './page-nous-decouvrir/page-nous-decouvrir.component'
import { Routes, RouterModule } from '@angular/router';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

const appRoutes: Routes = [
  { path: 'contact', component: PageContactComponent },
  { path: 'etudiant', component: PageEtudiantsComponent },
  { path: 'nous-decouvrir', component: PageNousDecouvrirComponent },
  { path: '', component: AccueilComponent },
  {path: '404', component: FourOFourComponent},
  {path: '**', redirectTo: '/404'}
];

// structure de Routes:

@NgModule({
  declarations: [
    AppComponent,
    BanniereComponent,
    FooterComponent,
    AccueilComponent,
    PageContactComponent,
    PageEtudiantsComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
