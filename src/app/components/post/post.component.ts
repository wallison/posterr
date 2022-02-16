import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../core/entities/post';
import {PostService} from '../../core/services/post.service';
import {MatDialog} from '@angular/material/dialog';
import {ReplyPostModalComponent} from '../reply-post-modal/reply-post-modal.component';
import {RepostModalComponent} from '../repost-modal/repost-modal.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private dialog: MatDialog) { }

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
}
