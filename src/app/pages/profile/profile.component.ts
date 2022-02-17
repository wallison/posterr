import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/entities/user';
import {PostService} from '../../core/services/post.service';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  constructor(private postService: PostService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isFollowing(this.user)
  }

  get followingCount(): number {
    return this.user.followingUsernames.length;
  }
  get followersCount(): number {
    let count = 0;
    this.userService.$users.forEach((u) => {
      if (u.followingUsernames.includes(this.user.username)) {
        count++;
      }
    });
    return count;
  }
  get isFollowing(): boolean {
    return this.userService.isFollowing(this.user);
  }
  get showFollowActions(): boolean {
    return this.user.username !== this.userService.$me.username;
  }
  get showPostBox(): boolean {
    return this.user.username === this.userService.$me.username;
  }
  follow(): void {
    this.userService.follow(this.user);
  }
  unfollow(): void {
    this.userService.unfollow(this.user);
  }
}
