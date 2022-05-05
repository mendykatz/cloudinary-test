import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-photos-by-tag',
  templateUrl: './photos-by-tag.component.html',
  styleUrls: ['./photos-by-tag.component.scss']
})
export class PhotosByTagComponent implements OnInit {

  @Input() tagName: string = '';
  @Input() color: string = '';

  constructor(
    public tagsSrv: TagsService,
    public photosSrv: PhotosService
  ) { }

  ngOnInit(): void {
  }

  onRemoveTag(tagName: string, photo: any) {
    photo.tagsList = photo.tagsList.filter((tag: any) => tag.name != tagName);
  }
}
