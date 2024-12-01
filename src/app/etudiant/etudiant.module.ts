import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantlistComponent } from './components/etudiantlist/etudiantlist.component';
import { EtudiantajoutComponent } from './components/etudiantajout/etudiantajout.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EtudiantlistComponent,
    EtudiantajoutComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    SharedModule
  ]
})
export class EtudiantModule { }
