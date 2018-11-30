import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProcedureHistoryComponent } from './procedure-history.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';

const routes = [
  {
      path     : 'procedure-history',
      component: ProcedureHistoryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatInputModule,
    TranslateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,

    FuseSharedModule
  ],
  declarations: [
    ProcedureHistoryComponent
  ],
  exports     : [
    ProcedureHistoryComponent 
  ]
})

export class ProcedureHistoryModule { }
