import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './user/task/task.component';
import { TagsComponent } from './user/tags/tags.component'
import { NotfoundComponent } from './user/notfound/notfound.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent,
    children: [
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'tags',
        component: TagsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ]
  },
      {
        path: '**',
        component: NotfoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
