import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../core/entities/post';
import {PostService} from '../../core/services/post.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PostErrorModalComponent} from '../post-error-modal/post-error-modal.component';

@Component({
  selector: 'app-repost-modal',
  templateUrl: './repost-modal.component.html',
  styleUrls: ['./repost-modal.component.scss']
})
export class RepostModalComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService,
              private dialogRef: MatDialogRef<RepostModalComponent>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  repost(): void {
    this.postService.createRepost(this.post).subscribe(() => {
      this.dialogRef.close();
    }, error => {
      this.dialogRef.close();
      this.dialog.open(PostErrorModalComponent);
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
