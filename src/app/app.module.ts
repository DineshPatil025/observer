import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NavComponent } from './shared/component/nav/nav.component';
import { ProdsComponent } from './shared/component/prods/prods.component';
import { UsersComponent } from './shared/component/users/users.component';
import { PostsComponent } from './shared/component/posts/posts.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { OneComponent } from './shared/component/one/one.component';
import { TwoComponent } from './shared/component/two/two.component';
import { ThreeComponent } from './shared/component/three/three.component';
import { StdFormComponent } from './shared/component/std-form/std-form.component';
import { StdTableComponent } from './shared/component/std-table/std-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProdsComponent,
    UsersComponent,
    PostsComponent,
    DashboardComponent,
    UserFormComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    StdFormComponent,
    StdTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
