import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WorksDetailComponent } from './components/works/works-detail/works-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  { 
    path: 'works/detail/:id', 
    component: WorksDetailComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
