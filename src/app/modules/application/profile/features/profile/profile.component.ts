import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileInterface } from '../../models/profile.model';
import { ProfileService } from '../../data-access/profile.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfileInterface | null = null;
  isLoading = false;
  isUploading = false;
  imageError = false;

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.isLoading = true;
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        // API response wrapper'ını handle et
        if (response.success && response.data) {
          this.userProfile = response.data;
        } else {
          // response direkt UserProfileInterface ise
          this.userProfile = response;
        }
        this.isLoading = false;
        this.imageError = false;
        console.log('Profile loaded:', this.userProfile); // Debug için
      },
      error: (error) => {
        console.error('Profile loading failed:', error);
        this.isLoading = false;
        // Hata durumunda boş profil objesi oluştur
        this.userProfile = {
          id: '',
          name: 'Kullanıcı',
          email: '',
          profileImageUrl: undefined,
          hasProfileImage: false
        };
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadProfileImage(file);
    }
  }

  uploadProfileImage(file: File): void {
    // if (!this.userProfile) return;
    //
    // // Dosya türü kontrolü
    // if (!file.type.startsWith('image/')) {
    //   alert('Lütfen geçerli bir resim dosyası seçin.');
    //   return;
    // }
    //
    // // Dosya boyutu kontrolü (5MB)
    // if (file.size > 5 * 1024 * 1024) {
    //   alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
    //   return;
    // }
    //
    // this.isUploading = true;
    //
    // // FormData oluştur
    // const formData = new FormData();
    // formData.append('profileImage', file);
    //
    // // Gerçek API çağrısı
    // this.profileService.uploadProfileImage(formData).subscribe({
    //   next: (response: any) => {
    //     if (this.userProfile && response && response.data) {
    //       this.userProfile.profileImageUrl = response.data.profileImageUrl;
    //       this.userProfile.hasProfileImage = true;
    //     }
    //     this.isUploading = false;
    //     this.imageError = false;
    //   },
    //   error: (error) => {
    //     console.error('Upload failed:', error);
    //     this.isUploading = false;
    //     alert('Fotoğraf yüklenirken bir hata oluştu.');
    //   }
    // });
  }

  updateProfileImage(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  deleteProfileImage(): void {
    // if (!this.userProfile) return;
    //
    // if (confirm('Profil fotoğrafınızı silmek istediğinizden emin misiniz?')) {
    //   this.isUploading = true;
    //
    //   // Gerçek API çağrısı
    //   this.profileService.deleteProfileImage(this.userProfile.id).subscribe({
    //     next: () => {
    //       if (this.userProfile) {
    //         this.userProfile.profileImageUrl = undefined;
    //         this.userProfile.hasProfileImage = false;
    //       }
    //       this.isUploading = false;
    //     },
    //     error: (error) => {
    //       console.error('Delete failed:', error);
    //       this.isUploading = false;
    //       alert('Fotoğraf silinirken bir hata oluştu.');
    //     }
    //   });
    // }
  }

  onImageError(): void {
    this.imageError = true;
    console.log('Profile image failed to load');
  }

  onDefaultImageError(): void {
    console.error('Default profile image not found at: ./assets/images/default_profile_image.png');
    // Default image bulunamadığında SVG icon göster
  }

  getProfileImageUrl(): string {
    console.log('Getting profile image URL:', {
      userProfile: this.userProfile,
      hasProfileImage: this.userProfile?.hasProfileImage,
      profileImageUrl: this.userProfile?.profileImageUrl,
      imageError: this.imageError
    }); // Debug için

    if (!this.userProfile || this.imageError || !this.userProfile.hasProfileImage || !this.userProfile.profileImageUrl) {
      return './assets/images/default_profile_image.png';
    }
    return this.userProfile.profileImageUrl;
  }
}
