import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './accueil/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'etudiants', loadChildren:() => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
