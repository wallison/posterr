import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './pages/home/home.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ProfileModalComponent} from './components/profile-modal/profile-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReplyPostModalComponent } from './components/reply-post-modal/reply-post-modal.component';
import { RepostModalComponent } from './components/repost-modal/repost-modal.component';
import { CreatePostBoxComponent } from './components/create-post-box/create-post-box.component';
import { ProfilePostsComponent } from './components/profile-posts/profile-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    TopBarComponent,
    ProfileModalComponent,
    ReplyPostModalComponent,
    RepostModalComponent,
    CreatePostBoxComponent,
    ProfilePostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProfileModalComponent,
    ReplyPostModalComponent,
    RepostModalComponent
  ]
})
export class AppModule { }
