export class Comment {

  commentDate:Date;
  constructor
  (
    public id:number,
    public username:string,
    public postId:number,
    public content:string
  ){
    this.commentDate=new Date();
  }
}
