import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortstringPipe } from './pipes/shortstring/shortstring.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [    
    ShortstringPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortstringPipe,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
