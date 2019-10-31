import { Injectable } from '@angular/core';
import { Post } from '../post';
import {Comment} from '../comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  categories:string[]=[
    "cmd","git","github","htmlcss","js","es6","bs","ts","angular","node","py","android","ds"
  ];
  posts:Post[]=[
    new Post(0,"user","Initializing angular forms","angular","How do we preset form values in angular?"),
    new Post(1,"user","Node nvm vs npm","node","Why should i use nvm over npm?"),
    new Post(2,"user","Python frameworks","python","What is the difference between flask and django?")
  ];

  constructor() { }

  getPosts(){return this.posts;} // return a list of food
  getPost(id:number){
    return this.posts.filter(pst=>pst.id===id)[0]; //return a food object not a list
  }

    getCategories(){return this.categories;}
}
