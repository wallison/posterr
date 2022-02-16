import { Component, OnInit } from '@angular/core';
import {PostService} from '../../core/services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  postList = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.updateList();
    this.postService.postObserver.asObservable().subscribe((event) => {
      this.updateList();
    });
  }
  private updateList(): void {
    this.postService.allPosts().subscribe( posts => {
      this.postList = posts;
    });
  }
}
