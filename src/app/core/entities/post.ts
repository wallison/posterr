import {User} from './user';

export class Post {
  id?: number;
  createdBy: User;
  createdAt: Date;
  postText: string;
  originPostBy?: User;
  originPostAt: Date;
  originPostText?: string;
  public constructor(payload: {createdBy: User, createdAt: Date, postTest: string, originPostBy?: User,
    originPostText?: string, originPostAt?: Date, id?: number}) {
    this.createdBy = payload.createdBy;
    this.createdAt = payload.createdAt;
    this.postText = payload.postTest;
    this.originPostBy = payload.originPostBy ? payload.originPostBy : undefined;
    this.originPostAt = payload.originPostAt ? payload.originPostAt : undefined;
    this.originPostText = payload.originPostText ? payload.originPostText : undefined;
    this.id = payload.id ? payload.id : undefined;
  }
}
