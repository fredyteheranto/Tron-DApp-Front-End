import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { MedicationlistComponent } from './medicationlist.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';

const routes = [
  {
      path     : 'medicationlist',
      component: MedicationlistComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatInputModule,
    TranslateModule,

    FuseSharedModule
  ],
  declarations: [
    MedicationlistComponent
  ],
  exports     : [
    MedicationlistComponent 
  ]
})

export class MedicationlistModule { }
