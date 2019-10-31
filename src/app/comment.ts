export class Comment {


  constructor
  (
    public id:number,
    public username:string,
    public postId:number,
    public content:string,
    public commentDate:Date
  ){  }
}
