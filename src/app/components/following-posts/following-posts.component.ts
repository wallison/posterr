import { Component, OnInit } from '@angular/core';
import {PostService} from '../../core/services/post.service';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-following-posts',
  templateUrl: './following-posts.component.html',
  styleUrls: ['./following-posts.component.scss']
})
export class FollowingPostsComponent implements OnInit {
  postList = [];
  constructor(private postService: PostService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.followingUserObserver.asObservable().subscribe((event) => {
      this.updateList();
    });
  }
  private updateList(): void {
    this.postService.followingPosts().subscribe( posts => {
      this.postList = posts;
    });
  }
}
