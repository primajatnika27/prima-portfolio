import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksDetailComponent } from './works-detail/works-detail.component';


@NgModule({
  declarations: [
    WorksDetailComponent,
  ],
  imports: [
    CommonModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
