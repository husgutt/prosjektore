import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/domene/post';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  posts: Post[];

  constructor(private blogPostsService: BlogPostsService) {
   }

  ngOnInit(): void {
    this.blogPostsService.getPosts().subscribe(posts => this.posts = posts);
  }

}
