import { Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags.service';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  constructor(
    public tagsSrv: TagsService,
    public photosSrv: PhotosService
  ) { }

  ngOnInit(): void {}

  applyTagToPhoto(tag: any, photo: any) {

    if(!photo.tagsList) {
      photo.tagsList = [];
    }

    if(photo.tagsList.some((tagItem: any) => tagItem.name == tag.name)) return;

    photo.tagsList.push(tag);

  }

}
