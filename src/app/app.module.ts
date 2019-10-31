import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostBarComponent } from './post-bar/post-bar.component';
import { PostNavComponent } from './post-nav/post-nav.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostCommentFormComponent } from './post-comment-form/post-comment-form.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostBarComponent,
    PostNavComponent,
    PostCommentsComponent,
    PostCommentFormComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
