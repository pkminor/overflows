import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() categories:string[];
  @Output() newPostEvent = new EventEmitter<Post>();

  newPost = new Post(0,"","","","");
  constructor() { }

  ngOnInit() {
  }

  postIssue(){ this.newPostEvent.emit(this.newPost); }

}
