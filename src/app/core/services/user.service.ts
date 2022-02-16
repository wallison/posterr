import { Injectable } from '@angular/core';
import {User} from '../entities/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  $me = (new User({username: 'wallison', createdAt: new Date(), id: 1,
    avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg' }));
  $users = [
    (new User({username: 'wallison',
      createdAt: new Date(),
      id: 1 })
    ),
    (new User({username: 'fernando',
        createdAt: new Date(),
        id: 2 })
    ),
    (new User({username: 'carlos',
        createdAt: new Date(),
        id: 3 })
    ),
    (new User({username: 'vicki',
        createdAt: new Date(),
        id: 4 })
    ),
    (new User({username: 'david',
        createdAt: new Date(),
        id: 5 })
    ),
    (new User({username: 'helder',
        createdAt: new Date(),
        id: 6 })
    ),
    (new User({username: 'rick',
        createdAt: new Date(),
        id: 7 })
    ),
  ];
  constructor() { }

  follow(user: User): void {
    if (!this.isFollowing(user)) {
      this.$me.followingUsernames.push(user.username);
    }
  }

  unfollow(user: User): void {
    if (this.isFollowing(user)) {
      this.$me.followingUsernames = this.$me.followingUsernames.filter(username => user.username !== username);
    }
  }

  isFollowing(user: User): boolean {
    return this.$me.followingUsernames.indexOf(user.username) >= 0;
  }
  findByUsername(username: string): Observable<User> {
    return new Observable<User>((observer) => {
      const result = this.$users.find((user) => user.username === username);
      observer.next(result);
      observer.complete();
    });
  }
}
