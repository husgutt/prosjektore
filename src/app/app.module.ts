import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { BlogPostsService } from './services/blog-posts.service';
import { BacklogListComponent } from './components/backlog-list/backlog-list.component';
import { BacklogComponent } from './components/backlog/backlog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    BacklogListComponent,
    BacklogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
