import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private dummyNotifications = [
    { id: 1, message: 'User123 liked your post' },
    { id: 2, message: 'New follower: JohnDoe' },
    { id: 3, message: 'Your profile was updated successfully' }
  ];

  getNotifications() {
    return of(this.dummyNotifications);
  }
}
