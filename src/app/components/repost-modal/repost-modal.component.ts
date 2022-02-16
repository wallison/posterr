import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../core/entities/post';
import {PostService} from '../../core/services/post.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-repost-modal',
  templateUrl: './repost-modal.component.html',
  styleUrls: ['./repost-modal.component.scss']
})
export class RepostModalComponent implements OnInit {
  @Input() post: Post;
  constructor(private postService: PostService,
              private dialogRef: MatDialogRef<RepostModalComponent>) { }

  ngOnInit(): void {
  }
  repost(): void {
    this.postService.createRepost(this.post).subscribe(() => {
      this.dialogRef.close();
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
}
