import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProfileComponent} from '../profile/profile.component';
import {AllPostsComponent} from '../../components/all-posts/all-posts.component';
import {FollowingPostsComponent} from '../../components/following-posts/following-posts.component';

const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent
  },
  {
    path: 'following',
    component: FollowingPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
