import { Injectable } from '@angular/core';
import {Post} from '../entities/post';
import {UserService} from './user.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private lastId = 1;
  private $myPosts = [
    (new Post({createdBy: this.userService.$me, createdAt: new Date(), postTest: 'rest', id: 1})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(), postTest: 'rest rest', id: 2})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(), postTest: 'rest test test ', id: 5})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(), postTest: 'rest test', id: 7})),
    (new Post({createdBy: this.userService.$me, createdAt: new Date(), postTest: 'rest $@test', id: 8}))
  ];
  private $followingPosts = [
    (new Post({createdBy: this.userService.$users[1], createdAt: new Date(), postTest: 'rest1', id: 3})),
    (new Post({createdBy: this.userService.$users[2], createdAt: new Date(), postTest: 'rest2', id: 4})),
    (new Post({createdBy: this.userService.$users[3], createdAt: new Date(), postTest: 'rest3', id: 6})),
    (new Post({createdBy: this.userService.$users[3], createdAt: new Date(), postTest: 'rest33', id: 9})),
    (new Post({createdBy: this.userService.$users[3], createdAt: new Date(), postTest: 'rest333', id: 10})),
    (new Post({createdBy: this.userService.$users[5], createdAt: new Date(), postTest: 'rest5', id: 11})),
    (new Post({createdBy: this.userService.$users[6], createdAt: new Date(), postTest: 'rest6', id: 12})),
    (new Post({createdBy: this.userService.$users[6], createdAt: new Date(), postTest: 'rest66', id: 13}))
  ];
  public postObserver: BehaviorSubject<Post> = new BehaviorSubject(null);

  constructor(private userService: UserService) { }

  followingPosts(): Observable<Post[]>  {
    return new Observable<Post[]> ((observer) => {
      const result = this.$followingPosts
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      observer.next(result);
      observer.complete();
    });
  }

  myPosts(): Observable<Post[]> {
    return new Observable<Post[]> ((observer) => {
      const result = this.$myPosts
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      observer.next(result);
      observer.complete();
    });
  }

  allPosts(): Observable<Post[]> {
    return new Observable<Post[]>(observer => {
      const result = [...this.$followingPosts, ...this.$myPosts]
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      observer.next(result);
      observer.complete();
    });
  }
  createPost(postText: string): Observable<Post> {
    return new Observable<Post>((observer) => {
      this.lastId += 1;
      const newPost = new Post({createdBy: this.userService.$me,
        createdAt: new Date(), postTest: postText, id:  this.lastId});
      this.$myPosts.push(newPost);
      this.postObserver.next(newPost);
      observer.next(newPost);
      observer.complete();
    });
  }
  createRepost(originPost: Post, repostText?: string): Observable<Post> {
    return new Observable<Post>((observer) => {
      this.lastId += 1;
      const newPost = new Post({createdBy: this.userService.$me,
        createdAt: new Date(), postTest: repostText, id: this.lastId,
        originPostBy: originPost.createdBy, originPostAt: originPost.createdAt, originPostText: originPost.postText});
      this.$myPosts.push(newPost);
      this.postObserver.next(newPost);
      observer.next(newPost);
      observer.complete();
    });
  }
}
