import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageBusService } from './message-bus.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photosList: any = [];

  constructor(
    private http: HttpClient,
    private messageBus: MessageBusService
  ) {

    this.http.get('https://picsum.photos/v2/list').subscribe({
      next: (res: any) => {
        this.photosList = res;
      }
    })

    this.messageBus.on('tagDeleted', (event) => {
      this.photosList.forEach((photo: any) => {
        photo.tagsList =  photo.tagsList?.filter((tag: any) => tag.name != event.value);
      });
    })

  }

  applyTagToPhoto(tag: any, photo: any) {

    if(!photo.tagsList) {
      photo.tagsList = [];
    }

    if(photo.tagsList.some((tagItem: any) => tagItem.name == tag.name)) return;

    photo.tagsList.push(tag);

  }
}
