import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { AboutComponent } from './about.component';
import { MatButtonModule, MatIconModule, MatCheckboxModule, MatSelectModule } from '@angular/material';

const routes = [
    {
        path     : 'about',
        component: AboutComponent
    }
];

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule,
        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        AboutComponent
    ]
})

export class AboutModule
{
}
