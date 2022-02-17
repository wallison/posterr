import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PostService} from '../../core/services/post.service';
import {Post} from '../../core/entities/post';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PostErrorModalComponent} from '../post-error-modal/post-error-modal.component';

@Component({
  selector: 'app-reply-post-modal',
  templateUrl: './reply-post-modal.component.html',
  styleUrls: ['./reply-post-modal.component.scss']
})
export class ReplyPostModalComponent implements OnInit {
  @Input() post: Post;
  form: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostService,
              private dialogRef: MatDialogRef<ReplyPostModalComponent>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({post: ['', []]});
  }
  get countCharacters(): number {
    return this.form.getRawValue().post?.length;
  }
  reply(): void {
    if (this.countCharacters > 0) {
      this.postService.createRepost(this.post, this.form.getRawValue().post).subscribe(() => {
        this.dialogRef.close();
      }, error => {
        this.dialogRef.close();
        this.dialog.open(PostErrorModalComponent);
      });
    }
  }
}
