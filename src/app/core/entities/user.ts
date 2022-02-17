export class User {
  id: number;
  username: string;
  createdAt: Date;
  followingUsernames: string[];
  public constructor(payload: {username: string,
    createdAt: Date, id?: number, avatarUrl?: string,
    followingUsernames?: string[]}) {
    this.username = payload.username;
    this.createdAt = payload.createdAt;
    this.id = payload.id ? payload.id : undefined;
    this.followingUsernames = payload.followingUsernames || [];
  }
}
