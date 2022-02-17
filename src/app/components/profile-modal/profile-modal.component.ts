import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/entities/user';
import {UserService} from '../../core/services/user.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {
  @Input() username: string;
  user: User;

  constructor(private userService: UserService,
              private dialogRef: MatDialogRef<ProfileModalComponent>) { }

  ngOnInit(): void {
    this.user = this.userService.$users.find((u) => u.username === this.username);
    if (!this.user) {
      this.dialogRef.close();
    }
  }

}
