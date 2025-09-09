import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dummyUser = {
    id: 1,
    username: 'demo_user',
    email: 'demo@example.com',
    profilePic: 'https://via.placeholder.com/150',
    coverPic: 'https://via.placeholder.com/600x200',
    posts: [
      { id: 1, image: 'https://via.placeholder.com/300', caption: 'First post!' },
      { id: 2, image: 'https://via.placeholder.com/300', caption: 'Another post' }
    ]
  };

  getUserProfile() {
    return of(this.dummyUser); // 👈 returns observable with dummy data
  }

  updateUserProfile(data: any) {
    this.dummyUser = { ...this.dummyUser, ...data };
    return of(this.dummyUser);
  }
}
