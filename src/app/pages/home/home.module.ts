import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllPostsComponent} from '../../components/all-posts/all-posts.component';
import {FollowingPostsComponent} from '../../components/following-posts/following-posts.component';
import {HomeRoutingModule} from './home-routing.module';
import {PostComponent} from '../../components/post/post.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AllPostsComponent,
    FollowingPostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [PostComponent]
})
export class HomeModule { }
