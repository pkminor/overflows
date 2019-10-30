export class Post {
  constructor
  (
    public id:number,
    public title:string,
    public category:string,
    public content:string,
    public postDate:Date,
    public comments:[]
  ){}
}
