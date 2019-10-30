import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostBarComponent } from './post-bar/post-bar.component';
import { PostNavComponent } from './post-nav/post-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostBarComponent,
    PostNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
