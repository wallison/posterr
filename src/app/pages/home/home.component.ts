import {Component, OnDestroy, OnInit} from '@angular/core';
import {HOME_ROUTES} from '../../core/constants';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ProfileModalComponent} from '../../components/profile-modal/profile-modal.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  followingPage = false;
  form: FormGroup;
  routeQueryParams: Subscription;

  constructor(private router: Router, private fb: FormBuilder,
              private dialog: MatDialog, private route: ActivatedRoute) {
    this.routeQueryParams = route.queryParams.subscribe(params => {
      if (params?.profile) {
        this.openProfile();
      }
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({post: ['', []]});
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

  get countCharacters(): number {
    return this.form.getRawValue().post?.length;
  }

  openProfile(): void {
    const dialogRef = this.dialog.open(ProfileModalComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['.'], { relativeTo: this.route });
    });
  }

  ngOnDestroy(): void {
    this.routeQueryParams.unsubscribe();
  }
}
