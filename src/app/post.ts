import {Comment} from './comment';
export class Post {
  postDate:Date;
  views:number;

  constructor
  (
    public id:number,
    public username:string,
    public title:string,
    public category:string,
    public content:string,
    public comments:Comment[]
  ){
    this.postDate=new Date();
    this.views=0;
  }
}
