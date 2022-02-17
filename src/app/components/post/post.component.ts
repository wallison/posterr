import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../core/entities/post';
import {MatDialog} from '@angular/material/dialog';
import {ReplyPostModalComponent} from '../reply-post-modal/reply-post-modal.component';
import {RepostModalComponent} from '../repost-modal/repost-modal.component';
import {Router} from '@angular/router';
import {User} from '../../core/entities/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }

  repost(): void {
    const dialogRef = this.dialog.open(RepostModalComponent);
    dialogRef.componentInstance.post = this.post;
  }
  reply(): void {
    const dialogRef = this.dialog.open(ReplyPostModalComponent);
    dialogRef.componentInstance.post = this.post;
  }
  get showActions(): boolean {
    return !!this.post?.postText;
  }
  profile(user: User): void {
    const queryParams: any = {
      username: user.username
    };
    this.router.navigate([this.router.url], {queryParams});
  }
}
