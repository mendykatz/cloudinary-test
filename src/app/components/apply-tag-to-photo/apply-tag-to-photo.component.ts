import { Component, Input, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-apply-tag-to-photo',
  templateUrl: './apply-tag-to-photo.component.html',
  styleUrls: ['./apply-tag-to-photo.component.scss']
})
export class ApplyTagToPhotoComponent implements OnInit {

  @Input() photo;

  constructor(
    public tagsSrv: TagsService,
    public photosSrv: PhotosService
  ) { }

  ngOnInit(): void {
  }

}
