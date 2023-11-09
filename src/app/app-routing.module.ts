import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './shared/component/posts/posts.component';
import { ProdsComponent } from './shared/component/prods/prods.component';
import { UsersComponent } from './shared/component/users/users.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';

const routes: Routes = [

  {path: "", component:DashboardComponent},
  {path:"dashboard", component:DashboardComponent},
  {path: "posts", component:PostsComponent},
  {path: "prods", component:ProdsComponent},
  {path: "users", component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
