import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Post} from '../post';
import {Comment} from '../comment';


@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  name:string="My name";
  @Input() post:Post;
  @Output() newCommentEvent = new EventEmitter<Comment>();
  constructor() {

  }

  ngOnInit() {

  }

  postComment(comment:Comment){
    this.newCommentEvent.emit(comment);

    this.post.comments =
    this.post.comments.sort((left,right)=>{
      return (left.id>right.id)? -1:1;
    });
  }

}
