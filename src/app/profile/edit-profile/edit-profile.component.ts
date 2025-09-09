import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  user: any = {};

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user = this.userService.getProfile();
  }

  saveChanges() {
    console.log('Save clicked!', this.user);
    this.userService.updateProfile(this.user);
    alert('Profile updated ✅');
    this.router.navigate(['/profile']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.profilePic = reader.result as string; // base64 preview
      };
      reader.readAsDataURL(file);
      console.log('File selected:', file.name);
    }
  }
}
