import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminClassroomPage } from './admin-classroom.page';

const routes: Routes = [
  {
    path: '',
    component: AdminClassroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminClassroomPageRoutingModule {}
