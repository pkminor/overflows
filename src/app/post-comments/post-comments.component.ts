import { Component, OnInit,Input } from '@angular/core';
import {Post} from '../post';


@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }

}
