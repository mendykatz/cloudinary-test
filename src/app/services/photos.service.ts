import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageBusService } from './message-bus.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photosList: any = [];
  photosTagsLocalStorge = {};

  constructor(
    private http: HttpClient,
    private messageBus: MessageBusService
  ) {
    let photosTagsLocalStorge = JSON.parse(localStorage.getItem('photosTags'));
    this.photosTagsLocalStorge = photosTagsLocalStorge ? photosTagsLocalStorge : {};

    this.http.get('https://picsum.photos/v2/list').subscribe({
      next: (res: any) => {
        this.photosList = res;

        if(this.photosTagsLocalStorge) {
          this.photosList.forEach(photo => {
            photo.tagsList = this.photosTagsLocalStorge[photo.id];
          });
        }
      }
    })

    this.messageBus.on('tagRenamed', (event) => {

      this.photosList.forEach((photo) => {
        let tag =  photo.tagsList?.find((tag) => tag.name == event.value.previousName);

        if(tag) {
          tag.name = event.value.newName;
          this.savePhotosTagsToLocalStorage(photo);
        }
      });
    })

    this.messageBus.on('tagDeleted', (event) => {
      this.photosList.forEach((photo) => {
        photo.tagsList =  photo.tagsList?.filter((tag) => tag.name != event.value);
        this.savePhotosTagsToLocalStorage(photo);
      });
    })

  }

  applyTagToPhoto(tag, photo) {

    if(!photo.tagsList) {
      photo.tagsList = [];
    }

    if(photo.tagsList.some((tagItem) => tagItem.name == tag.name)) return;

    photo.tagsList.push(tag);

    this.savePhotosTagsToLocalStorage(photo);
  }

  savePhotosTagsToLocalStorage(photo) {
    this.photosTagsLocalStorge[photo.id] = photo.tagsList;
    localStorage.setItem('photosTags', JSON.stringify(this.photosTagsLocalStorge));
  }
}
