import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'userProfile';

  constructor() {
    // initialize with dummy data if not already saved
    if (!localStorage.getItem(this.storageKey)) {
      const defaultProfile = {
        name: 'Jana Ayman',
        username: 'ganaayman2021@gmail.com',
        bio: 'Love coding & photography 📸',
        profilePic: 'https://i.pravatar.cc/150?img=3'
      };
      localStorage.setItem(this.storageKey, JSON.stringify(defaultProfile));
    }
  }

  getProfile() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  updateProfile(updatedUser: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(updatedUser));
  }
}
