import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageEtudiantsComponent } from './page-etudiants/page-etudiants.component';
import { PageNousDecouvrirComponent } from './page-nous-decouvrir/page-nous-decouvrir.component'
import { FourOFourComponent } from './four-o-four/four-o-four.component';


const routes: Routes = [
  { path: 'contact', component: PageContactComponent },
  { path: 'etudiant', component: PageEtudiantsComponent },
  { path: 'nous-decouvrir', component: PageNousDecouvrirComponent },
  { path: '', component: AccueilComponent },
  { path: '404', component: FourOFourComponent },
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
