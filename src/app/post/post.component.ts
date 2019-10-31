import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Comment } from '../comment';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  posts:Post[];
  ls:number[]=[];
  categories:string[]=[];
  constructor(postservice:PostService) { //for(var i=0; i<100; i++) this.ls.push(i);
     this.posts=postservice.getPosts()
     this.posts=this.posts.sort((left,right)=>{ return (left.id>right.id)? -1:1; });

     this.categories=postservice.getCategories();
  }

  ngOnInit() {
  }

  showComments(index:number){this.posts[index].showComments=true;}

  postIssue(post:Post){
    post.id=this.posts.length+1;
    post.postDate=new Date();
    this.posts.push(post);
    this.posts=this.posts.sort((left,right)=>{ return (left.id>right.id)? -1:1; });
  }

  postComment(comment:Comment,index:number){
    comment.id = this.posts[index].comments.length+1;
    comment.commentDate= new Date();
    comment.username= "commenting user";
    this.posts[index].comments.push(comment);
    
  }

}
