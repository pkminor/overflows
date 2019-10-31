import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Comment} from '../comment';

@Component({
  selector: 'app-post-comment-form',
  templateUrl: './post-comment-form.component.html',
  styleUrls: ['./post-comment-form.component.css']
})
export class PostCommentFormComponent implements OnInit {

  newComment= new Comment(0,"",1,"");

  @Output() newCommentEvent = new EventEmitter<Comment>();
  constructor() { }

  ngOnInit() {
  }

  postComment(){ this.newCommentEvent.emit(newComment); }

}
