import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Post } from 'src/app/domene/post';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private postUrl = 'api/posts/';

  constructor(private http: HttpClient)  { }

  getPosts(): Observable< Post[] > {
    return this.http.get<Post[]>(this.postUrl);
  }

  getPost(id: string): Observable< Post > {
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }
}
