import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTeacherPage } from './admin-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTeacherPageRoutingModule {}
