import {Comment} from './comment';
export class Post {
  postDate:Date;
  views:number;
  showComments:boolean;
  public comments:Comment[];

  constructor
  (
    public id:number,
    public username:string,
    public title:string,
    public category:string,
    public content:string,
  ){
    this.postDate=new Date();
    this.views=0;
    this.showComments=false;
    this.comments=[
      new Comment(0,"comment user",1,"this is a placeholder comment",new Date("2018-10-06")),
      new Comment(2,"comment user",1,"this is a placeholder comment",new Date("2017-03-16")),
      new Comment(3,"comment user",1,"this is a placeholder comment",new Date("2016-12-26"))
    ];
  }
}
