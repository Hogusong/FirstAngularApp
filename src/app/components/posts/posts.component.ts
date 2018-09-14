import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post;
  isEdit = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.initVariables()
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  initVariables() {
    this.isEdit = false;
    this.currentPost = { 
      id: 0,
      title: '',
      body: ''
    }
  }

  onCanceledPost() {
    this.initVariables()
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
    this.initVariables();
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((cur, idx) => {
      if (post.id === cur.id) {
        // this.posts.splice(idx, 1);
        // this.posts.unshift(post);
        this.posts[idx] = post;
        this.initVariables();
      }
    });
  }

  editPost(post: Post) {
    this.currentPost = Object.assign({},post);
    this.isEdit = true;
  }
}
