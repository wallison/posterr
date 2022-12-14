import {Component, OnDestroy, OnInit} from '@angular/core';
import {HOME_ROUTES} from '../../core/constants';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ProfileModalComponent} from '../../components/profile-modal/profile-modal.component';
import {Subscription} from 'rxjs';
import {PostService} from '../../core/services/post.service';
import {User} from '../../core/entities/user';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  followingPage = false;
  routeQueryParams: Subscription;

  constructor(private router: Router,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private postService: PostService,
              private userService: UserService) {
    this.routeQueryParams = route.queryParams.subscribe(params => {
      if (params?.username) {
        this.openProfile(params.username);
      }
    });
  }

  ngOnInit(): void {
    if (this.router.url.includes(HOME_ROUTES.FOLLOWING)) {
      this.followingPage = true;
    }
  }

  changePage(): void {
    let page = HOME_ROUTES.ALL;
    if (this.followingPage) {
      page = HOME_ROUTES.FOLLOWING;
    }
    this.router.navigate([page]);
  }

  home(): void {
    this.followingPage = false;
    this.router.navigate([HOME_ROUTES.ALL]);
  }
  profile(user: User = null): void {
    const queryParams: any = {
      username: user ? user.username : this.userService.$me.username
    };
    this.router.navigate([this.router.url], {queryParams});
  }

  openProfile(username: string): void {
    const dialogRef = this.dialog.open(ProfileModalComponent);
    dialogRef.componentInstance.username = username;
    dialogRef.afterClosed().subscribe(() => {
      const url = this.router.url.split('?')[0];
      this.router.navigate([url]);
    });
  }

  ngOnDestroy(): void {
    this.routeQueryParams.unsubscribe();
  }
}
