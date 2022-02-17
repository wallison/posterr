import { Injectable } from '@angular/core';
import {User} from '../entities/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {Post} from '../entities/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  $me = (new User({username: 'wallison', createdAt: new Date(2022, 1, 9), id: 1,
    followingUsernames: ['fernando', 'vicki', 'david', 'helder', 'rick'] }));
  $users = [
    (new User({username: 'wallison',
      createdAt: new Date(2022, 1, 9),
      id: 1,
      followingUsernames: ['fernando', 'carlos', 'vicki', 'david', 'helder', 'rick']})
    ),
    (new User({username: 'fernando',
        createdAt: new Date(2022, 1, 9),
        id: 2,
        followingUsernames: ['carlos', 'vicki', 'wallison']})
    ),
    (new User({username: 'carlos',
        createdAt: new Date(2022, 1, 9),
        id: 3,
        followingUsernames: ['fernando', 'carlos', 'vicki', 'wallison']})
    ),
    (new User({username: 'vicki',
        createdAt: new Date(2022, 1, 9),
        id: 4,
        followingUsernames: ['fernando', 'wallison']})
    ),
    (new User({username: 'david',
        createdAt: new Date(2022, 1, 9),
        id: 5 })
    ),
    (new User({username: 'helder',
        createdAt: new Date(2022, 1, 9),
        id: 6 })
    ),
    (new User({username: 'rick',
        createdAt: new Date(2022, 1, 9),
        id: 7 })
    ),
  ];

  public followingUserObserver: BehaviorSubject<User[]> = new BehaviorSubject(null);
  constructor() {}

  follow(user: User): void {
    if (!this.isFollowing(user)) {
      this.$me.followingUsernames.push(user.username);
      this.followingUserObserver.next(this.$users);
    }
  }

  unfollow(user: User): void {
    if (this.isFollowing(user)) {
      this.$me.followingUsernames = this.$me.followingUsernames.filter(username => user.username !== username);
      this.followingUserObserver.next(this.$users);
    }
  }

  isFollowing(user: User): boolean {
    return this.$me.followingUsernames.indexOf(user.username) >= 0;
  }
}
