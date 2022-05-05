import { Component } from '@angular/core';
import { PhotosService } from './services/photos.service';
import { TagsService } from './services/tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloudinary-test';

  constructor(
    public tagsSrv: TagsService,
    public photosSrv: PhotosService
    ) { }

  ngOnInit(): void {
  }

  isPhotosTagged(tagName: string) {

    let res = false;
    this.photosSrv.photosList.forEach((photo: any) => {
      if(photo.tagsList?.some((x: any) => x.name == tagName)) {
        res = true;
      }
    })

    return res;

  }
}
