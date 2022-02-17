import { Injectable } from '@angular/core';
import {Post} from '../entities/post';
import {UserService} from './user.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private lastId = 13;
  private $myPosts = [
    (new Post({createdBy: this.userService.$me, createdAt: new Date(2022, 1, 10), postTest: 'rest', id: 1})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(2022, 1, 10), postTest: 'rest rest', id: 2})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(2022, 1, 10), postTest: 'rest test test ', id: 5})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(2022, 1, 10), postTest: 'rest test', id: 7})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(2022, 1, 9), postTest: 'rest $@test', id: 8}))
  ];
  private $otherPosts = [
    (new Post({createdBy: this.userService.$users[1], createdAt: new Date(2022, 1, 10), postTest: 'rest1', id: 3})),
    (new Post({createdBy: this.userService.$users[2], createdAt: new Date(2022, 1, 10), postTest: 'rest2', id: 4})),
    (new Post({createdBy: this.userService.$users[3], createdAt: new Date(2022, 1, 10), postTest: 'rest3', id: 6})),
    (new Post({createdBy: this.userService.$users[3], createdAt: new Date(2022, 1, 10), postTest: 'rest33', id: 9})),
    (new Post({createdBy: this.userService.$users[3], createdAt: new Date(2022, 1, 10), postTest: 'rest333', id: 10})),
    (new Post({createdBy: this.userService.$users[5], createdAt: new Date(2022, 1, 10), postTest: 'rest5', id: 11})),
    (new Post({createdBy: this.userService.$users[6], createdAt: new Date(2022, 1, 10), postTest: 'rest6', id: 12})),
    (new Post({createdBy: this.userService.$users[6], createdAt: new Date(2022, 1, 10), postTest: 'rest66', id: 13}))
  ];
  public postObserver: BehaviorSubject<Post> = new BehaviorSubject(null);

  constructor(private userService: UserService) { }

  followingPosts(): Observable<Post[]>  {
    return new Observable<Post[]> ((observer) => {
      const result = this.$otherPosts.filter((p) =>
        this.userService.$me.followingUsernames.includes(p.createdBy.username))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      observer.next(result);
      observer.complete();
    });
  }

  userPosts(user: User): Observable<Post[]> {
    return new Observable<Post[]> ((observer) => {
      const result = [...this.$otherPosts, ...this.$myPosts]
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .filter((p) => p.createdBy.username === user.username);
      observer.next(result);
      observer.complete();
    });
  }

  countUserPosts(user: User): Observable<number> {
    return new Observable<number> ((observer) => {
      const result = [...this.$otherPosts, ...this.$myPosts]
        .filter((p) => p.createdBy.username === user.username);
      observer.next(result.length);
      observer.complete();
    });
  }

  allPosts(): Observable<Post[]> {
    return new Observable<Post[]>(observer => {
      const result = [...this.$otherPosts, ...this.$myPosts]
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      observer.next(result);
      observer.complete();
    });
  }
  createPost(postText: string): Observable<Post> {
    return new Observable<Post>((observer) => {
      if (!this.checkHasDailyLimit()) {
        observer.error('You reached the daily limit for posts');
      } else {
        this.lastId += 1;
        const newPost = new Post({createdBy: this.userService.$me,
          createdAt: new Date(), postTest: postText, id:  this.lastId});
        this.$myPosts.push(newPost);
        this.postObserver.next(newPost);
        observer.next(newPost);
      }
      observer.complete();
    });
  }
  createRepost(originPost: Post, repostText?: string): Observable<Post> {
    return new Observable<Post>((observer) => {
      if (!this.checkHasDailyLimit()) {
        observer.error('You reached the daily limit for posts');
      } else {
        this.lastId += 1;
        const newPost = new Post({createdBy: this.userService.$me,
          createdAt: new Date(), postTest: repostText, id: this.lastId,
          originPostBy: originPost.createdBy, originPostAt: originPost.createdAt,
          originPostText: originPost.postText});
        this.$myPosts.push(newPost);
        this.postObserver.next(newPost);
        observer.next(newPost);
      }
      observer.complete();
    });
  }
  private checkHasDailyLimit(): boolean {
    let countDailyPosts = 0;
    const limit = 5;
    this.$myPosts.forEach((p) => {
      const postDate = p.createdAt;
      const today = new Date();
      if (today.getFullYear() === postDate.getFullYear()
          && today.getMonth() === postDate.getMonth()
          && today.getDate() === postDate.getDate()) {
        countDailyPosts++;
      }
    });
    return countDailyPosts < limit;
  }
}
