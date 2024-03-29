import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../services/tags.service';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  searchValue = '';

  constructor(
    public tagsSrv: TagsService,
    public photosSrv: PhotosService
  ) { }

  ngOnInit(): void {}

  drop(event, photo) {
    let tagIndex = event.previousIndex;

    this.photosSrv.applyTagToPhoto(this.tagsSrv.tagsList[tagIndex], photo);

    //fix for missing placeholder.
    this.tagsSrv.tagsList = this.tagsSrv.tagsList.filter((tag) => !tag.temp);
  }

}
