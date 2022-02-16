export class User {
  public id: number;
  public avatarUrl: string;
  public username: string;
  public createdAt: Date;
  public followingUsernames: string[];
  public constructor(payload: {username: string,
    createdAt: Date, id?: number, avatarUrl?: string}) {
    this.username = payload.username;
    this.createdAt = payload.createdAt;
    this.id = payload.id ? payload.id : undefined;
    this.avatarUrl = payload.avatarUrl ? payload.avatarUrl : undefined;
    this.followingUsernames = [];
  }
}
