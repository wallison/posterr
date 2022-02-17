export class User {
  public id: number;
  public username: string;
  public createdAt: Date;
  public followingUsernames: string[];
  public constructor(payload: {username: string,
    createdAt: Date, id?: number, avatarUrl?: string,
    followingUsernames?: string[]}) {
    this.username = payload.username;
    this.createdAt = payload.createdAt;
    this.id = payload.id ? payload.id : undefined;
    this.followingUsernames = payload.followingUsernames || [];
  }
}
