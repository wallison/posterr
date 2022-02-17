import { Component, OnInit } from '@angular/core';
import {PostService} from '../../core/services/post.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-post-box',
  templateUrl: './create-post-box.component.html',
  styleUrls: ['./create-post-box.component.scss']
})
export class CreatePostBoxComponent implements OnInit {
  form: FormGroup;
  constructor(private postService: PostService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({post: ['', []]});
  }

  get countCharacters(): number {
    return this.form.getRawValue().post?.length;
  }

  createPost(): void {
    if (this.countCharacters > 0) {
      this.postService.createPost(this.form.getRawValue().post).subscribe(next => {
        this.form = this.fb.group({post: ['', []]});
      });
    }
  }
}
