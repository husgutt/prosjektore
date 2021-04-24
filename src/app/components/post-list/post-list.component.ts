import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/domene/post';
import { BlogPostsService } from 'src/app/services/blog-posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  posts: Post[];
  profileForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private blogPostsService: BlogPostsService) {
   }

  ngOnInit(): void {
    this.blogPostsService.getPosts().subscribe(posts => this.posts = posts);
  }

  onSubmit() {
    const post: Post = {...this.profileForm.value, date: new Date().toLocaleDateString()};
    console.log(post);
    this.blogPostsService.createPost(post).subscribe(post => {
      this.posts.push(post);
    })
  }

  delete(id: string) {
    console.log(id)
    this.blogPostsService.deletePost(id).subscribe(deletedPost => {
      var removeIndex = this.posts.map(function(item) { return item._id; }).indexOf(id);
      this.posts.splice(removeIndex, 1);
    });
  }

}
