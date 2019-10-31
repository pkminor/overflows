import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import {Comment} from '../comment';

@Component({
  selector: 'app-post-comment-form',
  templateUrl: './post-comment-form.component.html',
  styleUrls: ['./post-comment-form.component.css']
})
export class PostCommentFormComponent implements OnInit {


  @Input() name:string;
  newComment= new Comment(0,"",1,this.name,new Date("2019-01-01"));

  @Output() newCommentEvent = new EventEmitter<Comment>();
  constructor() {  }

  ngOnInit() {
    this.newComment= new Comment(0,"",1,this.name,new Date("2019-01-01"));
  }

  postComment(){
    this.newCommentEvent.emit(this.newComment);
    this.newComment= new Comment(0,"",1,"",new Date("2019-01-01"));
}

}
