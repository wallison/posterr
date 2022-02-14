export class Post {
  public createdBy: string;
  public constructor(payload: {createdBy: string}) {
    this.createdBy = payload.createdBy;
  }
}
