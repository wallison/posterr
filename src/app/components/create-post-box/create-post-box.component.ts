import { Component, OnInit } from '@angular/core';
import {PostService} from '../../core/services/post.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {PostErrorModalComponent} from '../post-error-modal/post-error-modal.component';

@Component({
  selector: 'app-create-post-box',
  templateUrl: './create-post-box.component.html',
  styleUrls: ['./create-post-box.component.scss']
})
export class CreatePostBoxComponent implements OnInit {
  form: FormGroup;
  constructor(private postService: PostService, private fb: FormBuilder,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({post: ['', []]});
  }

  get countCharacters(): number {
    return this.form.getRawValue().post?.length;
  }

  createPost(): void {
    if (this.countCharacters > 0) {
      this.postService.createPost(this.form.getRawValue().post).subscribe(() => {
        this.form = this.fb.group({post: ['', []]});
      }, error => {
        this.form = this.fb.group({post: ['', []]});
        this.dialog.open(PostErrorModalComponent);
      });
    }
  }
}
