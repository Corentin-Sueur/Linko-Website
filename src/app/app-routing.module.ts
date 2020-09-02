import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEtudiantsComponent } from './page-etudiants/page-etudiants.component';
import { PageNousDecouvrirComponent } from './page-nous-decouvrir/page-nous-decouvrir.component'
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { DomaineDeCompetenceComponent } from './domaine-de-competence/domaine-de-competence.component';

const routes: Routes = [
  { path: 'contact', component: PageContactComponent },
  { path: 'etudiant', component: PageEtudiantsComponent },
  { path: 'nous-decouvrir', component: PageNousDecouvrirComponent },
  { path: 'domaine-de-competence', component: DomaineDeCompetenceComponent },
  { path: '', component: AccueilComponent },
  { path: '404', component: FourOFourComponent },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [PageContactComponent, PageEtudiantsComponent, PageNousDecouvrirComponent, AccueilComponent, DomaineDeCompetenceComponent]
})
export class AppRoutingModule { }
