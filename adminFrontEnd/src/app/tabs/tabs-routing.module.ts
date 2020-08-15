import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'chatting',
        loadChildren: () => import('../chatting/chatting.module').then( m => m.ChattingPageModule)
      },
      {
        path: 'view-post',
        loadChildren: () => import('../view-post/view-post.module').then( m => m.ViewPostPageModule)
      },
      {
        path: 'edit-post',
        loadChildren: () => import('../edit-post/edit-post.module').then( m => m.EditPostPageModule)
      },
      {
        path: 'classroom-profile',
        loadChildren: () => import('../classroom-profile/classroom-profile.module').then( m => m.ClassroomProfilePageModule)
      },
      {
        path: 'sharing',
        loadChildren: () => import('../sharing/sharing.module').then( m => m.SharingPageModule)
      },
      {
        path: 'admin-classroom',
        loadChildren: () => import('../admin-classroom/admin-classroom.module').then( m => m.AdminClassroomPageModule)
      },
      {
        path: 'admin-teacher',
        loadChildren: () => import('../admin-teacher/admin-teacher.module').then( m => m.AdminTeacherPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
