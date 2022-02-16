import { Component, OnInit } from '@angular/core';
import {PostService} from '../../core/services/post.service';

@Component({
  selector: 'app-following-posts',
  templateUrl: './following-posts.component.html',
  styleUrls: ['./following-posts.component.scss']
})
export class FollowingPostsComponent implements OnInit {
  postList = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.followingPosts().subscribe( posts => {
      this.postList = posts;
    });
  }

}
