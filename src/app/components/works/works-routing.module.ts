import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksDetailComponent } from './works-detail/works-detail.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: WorksDetailComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
