import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/user';

  constructor(private http: HttpClient) {}

  getMyProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }

  getUserProfile(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/me`, data);
  }

  deleteProfile(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/me`);
  }

  followUser(id: string): Observable<any> {
    return this.http.post(`http://localhost:5000/api/users/${id}/follow`, {});
  }

  unfollowUser(id: string): Observable<any> {
    return this.http.post(`http://localhost:5000/api/users/${id}/unfollow`, {});
  }

  getFollowing(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/following`);
  }

  getFollowers(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/followers`);
  }
}
