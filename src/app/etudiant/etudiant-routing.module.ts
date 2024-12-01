import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantlistComponent } from './components/etudiantlist/etudiantlist.component';
import { EtudiantajoutComponent } from './components/etudiantajout/etudiantajout.component';

const routes: Routes = [
  { path: '', component: EtudiantlistComponent },
  { path: 'ajout', component: EtudiantajoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
