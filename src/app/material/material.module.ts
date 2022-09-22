import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

const matmodules = [CommonModule, MatCardModule, MatSelectModule];

@NgModule({
  declarations: [],
  imports: matmodules,
  exports: matmodules,
})
export class MaterialModule {}
