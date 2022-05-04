import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TagsService } from '../services/tags.service';
import { MessageBusService } from '../services/message-bus.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  photosArr: any = [];

  constructor(
    private http: HttpClient,
    public tagsSrv: TagsService,
    private messageBus: MessageBusService
  ) { }

  ngOnInit(): void {

    this.http.get('https://picsum.photos/v2/list').subscribe({
      next: (res: any) => {
        this.photosArr = res;
      }
    })

    this.messageBus.on('tagRemoved', (event) => {
      this.photosArr.forEach((photo: any) => {
        photo.tagsList =  photo.tagsList.filter((tag: any) => tag.name != event.value);
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
