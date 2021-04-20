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
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    BacklogListComponent,
    BacklogComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'posts', component: PostListComponent },
      { path: 'posts/:id', component: PostComponent },
      { path: 'backlogs', component: BacklogListComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: '**', redirectTo: 'posts', pathMatch: 'full' }
    ]),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
