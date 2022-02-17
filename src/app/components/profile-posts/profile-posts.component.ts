import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../core/services/post.service';
import {User} from '../../core/entities/user';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.scss']
})
export class ProfilePostsComponent implements OnInit {
  @Input() user: User;
  postList = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.updateList();
    this.postService.postObserver.asObservable().subscribe((event) => {
      this.updateList();
    });
  }
  private updateList(): void {
    this.postService.userPosts(this.user).subscribe( posts => {
      this.postList = posts;
    });
  }
}
