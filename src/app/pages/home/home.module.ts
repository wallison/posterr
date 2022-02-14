import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllPostsComponent} from '../../components/all-posts/all-posts.component';
import {FollowingPostsComponent} from '../../components/following-posts/following-posts.component';
import {HomeRoutingModule} from './home-routing.module';



@NgModule({
  declarations: [
    AllPostsComponent,
    FollowingPostsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
