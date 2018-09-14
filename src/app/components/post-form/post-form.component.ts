import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/models';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Output() canceledPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) { 

  }

  ngOnInit() {
  }

  addPost(title, body) {
    if (title && body) {
      this.postService.savePost({ title, body } as Post).subscribe(post => {
        console.log(post)
        this.newPost.emit(post);
      });
    } else {
      alert('Please add post')
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.updatedPost.emit(post)
    });
  }

  canceled() {
    this.canceledPost.emit()
  }
}
