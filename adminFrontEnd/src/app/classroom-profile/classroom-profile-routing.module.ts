import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassroomProfilePage } from './classroom-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ClassroomProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassroomProfilePageRoutingModule {}
